import { VercelRequest, VercelResponse } from "@vercel/node";
import { sendEmail } from "../lib/email.js";
import { z } from "zod";
import { careersSchema } from "../emails/careers/zod.js";
import { IncomingForm, Fields, Files } from "formidable";
import { promisify } from "util";

/**
 * Handle POST requests to the /api/contact endpoint
 * @param req The request object
 * @param res The response object
 * @returns A promise that resolves when the request is complete
 * @throws 405 error if the request method is not POST
 * @throws 400 error if the request body is invalid
 * @throws 500 error if there is an error processing the request
 */
export default async function handler(
  req: VercelRequest,
  res: VercelResponse
): Promise<void> {
  try {
    // // Handle POST request
    if (req.method === "POST") {
      await handleFetchPOST(req, res);
    } else {
      // Handle other HTTP methods or throw an error
      res.status(405).send({ error: "Method not allowed" });
    }
  } catch (err) {
    console.error(err);
    if (!res.headersSent) {
      res.status(500).json({ error: "Internal server error" });
    }
  }
}

/**
 * Parse the form data
 * @param req The request object
 * @returns A promise that resolves with the form data
 */
// const parseForm = promisify(new IncomingForm().parse);

/**
 * Handle POST requests with JSON data
 * @param req The request object
 * @param res The response object
 * @returns A promise that resolves when the request is complete
 * @throws 400 error if the JSON data is invalid
 * @throws 500 error if there is an error processing the request
 */
async function handleFetchPOST(req: VercelRequest, res: VercelResponse) {
  try {
    const form = new IncomingForm();

    const [rawFields, files]: [Fields, Files] = await new Promise(
      (resolve, reject) => {
        form.parse(req, (err, fields, files) => {
          if (err) reject(err);
          resolve([fields, files]);
        });
      }
    );

    const jsonObject = Object.fromEntries(
      Object.entries(rawFields).map(([key, value]) => [key, value?.[0] || ""])
    );
    const validatedFields = careersSchema.parse(jsonObject);
    const additionalFields = setupTemplateData(validatedFields);
    const templateData = {
      ...additionalFields,
      resume: files.resume?.[0],
    };

    await sendEmail({
      templateName: "careers",
      templateData,
      files,
      replyTo: validatedFields.email,
    });

    res.status(200).json({ success: true });
  } catch (err) {
    console.error(err);
    if (err instanceof z.ZodError) {
      res.status(400).json({ errors: err.errors });
    } else {
      res.status(500).json({ error: "Error processing request" });
    }
  }
}

interface CareersInput {
  name: string;
  email: string;
  phone?: string;
  // message: string;
}

interface CareerTemplateData extends CareersInput {
  date: string;
  time: string;
}

function setupTemplateData(validatedData: CareersInput): CareerTemplateData {
  const currentDate = new Date();
  return {
    // Format the date as "Monday, January 1, 2042"
    date: new Intl.DateTimeFormat("en-US", {
      dateStyle: "full",
      timeZone: "America/Phoenix",
    }).format(currentDate),
    // Format the time as 12-hour time with AM/PM
    time: new Intl.DateTimeFormat("en-US", {
      timeStyle: "long",
      timeZone: "America/Phoenix",
    }).format(currentDate),
    ...validatedData,
  };
}

export const config = {
  api: {
    bodyParser: false,
  },
};

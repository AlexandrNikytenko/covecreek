import { VercelRequest, VercelResponse } from "@vercel/node";
import { sendEmail } from "../lib/email.js";
import { z } from "zod";
import { inquirySchema } from "../emails/inquiry/zod.js";
import { requireEnv } from "../lib/utils.js";

requireEnv(["REDIRECT_URL"]);
const REDIRECT_URL = process.env.REDIRECT_URL!;

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
 * Handle POST requests with JSON data
 * @param req The request object
 * @param res The response object
 * @returns A promise that resolves when the request is complete
 * @throws 400 error if the JSON data is invalid
 * @throws 500 error if there is an error processing the request
 */
async function handleFetchPOST(req: VercelRequest, res: VercelResponse) {
  try {
    const validatedData = inquirySchema.parse(await req.body);
    const templateData = setupTemplateData(validatedData);

    await sendEmail({
      templateName: "inquiry",
      templateData,
      replyTo: validatedData.email,
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

interface InquiryInput {
  name: string;
  email: string;
  phone?: string;
  message: string;
}

interface InquiryTemplateData extends InquiryInput {
  date: string;
  time: string;
}

function setupTemplateData(validatedData: InquiryInput): InquiryTemplateData {
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

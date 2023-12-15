import nodemailer from "nodemailer";
import EmailTemplate from "email-templates";
import path from "path";
import { Files, File } from "formidable";

/**
 * Defines the options for the sendEmail function.
 * @property {string} templateName - The name of the email template to use.
 * @property {TemplateData} templateData - Data required by the email template. (See the specific template for required fields.)
 * @property {string} [replyTo] - The reply-to email address. (typically the form submitter's email address)
 * @property {string} [from] - (Defaults to EMAIL_FROM) The sender's email address.
 * @property {string} [subject] - (Defaults to using emails/${templateName}/subject.ejs) Override with the subject line not a path.
 * @property {string[]} [recipients] - (Defaults to EMAIL_RECIPIENTS) The email address(es) to send the email to.
 * @property {string} [logoPath] - (Defaults to LOGO_PATH) The path to the logo image to use in the email.
 * @property {string} [domain] - (Defaults to DOMAIN) The domain name to use in the email.
 * @property {nodemailer.Transporter} [transporter] - (Defaults to an instance with EMAIL_HOST, EMAIL_PORT, EMAIL_USERNAME, and EMAIL_PASSWORD) The nodemailer transporter to use to send the email.
 */
export interface SendEmailOptions {
  templateName: string;
  templateData: TemplateData;
  replyTo: string;
  from?: string;
  subject?: string;
  recipients?: string[];
  logoPath?: string;
  domain?: string;
  transporter?: nodemailer.Transporter;
  files?: Files;
}

export type Attachment = {
  filename: string;
  path: string;
  cid?: string;
};

/**
 * Defines the structure of the email message.
 * @property {string} from - The sender's email address.
 * @property {string} replyTo - The reply-to email address.
 * @property {string|string[]} to - The recipient's email address(es).
 * @property {string} subject - The subject of the email.
 * @property {Object[]} attachments - Attachments for the email.
 */
export interface MailData {
  from: string;
  replyTo: string;
  to: string;
  subject?: string;
  attachments: Attachment[];
}

/**
 * A generic object to hold the data required by the email template.
 * See the specific template for required fields. (i.e., emails/inquiry/html.ejs)
 */
export interface TemplateData {
  [key: string]: any;
}

/**
 * Sends an email using the specified template and options.
 * @param {SendEmailOptions} options - The options for sending the email.
 * @returns {Promise<void>} A promise that resolves when the email is sent.
 * @throws {Error} If there is an error sending the email.
 */
export async function sendEmail(options: SendEmailOptions): Promise<void> {
  // Set Default Options
  const {
    templateName,
    templateData,
    from: from = process.env.EMAIL_FROM!,
    replyTo: replyTo,
    subject: subject,
    recipients: recipients = process.env.EMAIL_RECIPIENTS!.split(","),
    logoPath = process.env.LOGO_PATH,
    domain = process.env.DOMAIN,
    transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: Number(process.env.EMAIL_PORT || 587),
      auth: {
        user: process.env.EMAIL_USERNAME,
        pass: process.env.EMAIL_PASSWORD,
      },
    }),
    files,
  } = options;

  // Create attachments from files
  const fileAttachments: Attachment[] = Object.values(files || {})
    .flat()
    .map((file) =>
      file
        ? {
            filename: file.originalFilename,
            path: file.filepath,
          }
        : undefined
    )
    .filter(Boolean) as Attachment[];

  const mailData: MailData = {
    from: from,
    replyTo: replyTo,
    to: recipients.join(","),
    subject: subject,
    attachments: [
      {
        filename: path.basename(logoPath!),
        path: path.resolve(logoPath!),
        cid: "logoimg",
      },
      ...fileAttachments,
    ],
  };

  const templatePath = path.resolve(`emails/${templateName}`);
  const emailTemplate = new EmailTemplate({
    views: {
      options: {
        extension: "ejs",
      },
    },
    juiceResources: {
      preserveImportant: true,
      webResources: {
        relativeTo: templatePath,
      },
    },
    transport: transporter,
    send: true,
    preview: false, // This feature is broken for ejs templates
  });

  try {
    await emailTemplate.send({
      template: templateName,
      message: mailData,
      locals: templateData,
    });
  } catch (err) {
    console.error(err);
    throw new Error("Error sending email");
  }
}

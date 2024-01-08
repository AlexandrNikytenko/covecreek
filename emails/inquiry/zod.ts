import { z } from "zod";

// Required fields for emails/inquiry
export const inquirySchema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  phone: z.string().optional(),
  message: z.string().min(1),
});

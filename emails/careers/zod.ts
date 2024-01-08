import { z } from "zod";

// Required fields for emails/careers
export const careersSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().optional(),
  message: z.string().min(1),
});

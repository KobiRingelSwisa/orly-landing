import { z } from "zod";

export const contactFormSchema = z.object({
  fullName: z
    .string()
    .min(2, "השם חייב להכיל לפחות 2 תווים")
    .max(50, "השם חייב להכיל עד 50 תווים"),
  phone: z
    .string()
    .min(9, "מספר הטלפון קצר מדי")
    .refine((phone) => {
      const cleaned = phone.replace(/\D/g, "");
      // Israeli phone number patterns (landline and mobile)
      const patterns = [
        /^0[23489][0-9]{7}$/, // Landlines (02, 03, 04, 08, 09)
        /^05[0-9]{8}$/, // Mobile (05x)
        /^972[23489][0-9]{7}$/, // International landlines
        /^9725[0-9]{8}$/, // International mobile
      ];
      return patterns.some((pattern) => pattern.test(cleaned));
    }, "מספר טלפון ישראלי לא תקין"),
});

export const leadSchema = contactFormSchema;

export type ContactFormData = z.infer<typeof contactFormSchema>;
export type LeadData = z.infer<typeof leadSchema>;

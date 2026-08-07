import type { z } from "zod";
import type { contactSchema } from "@/validations/contact";

/**
 * Structure des données de soumission du formulaire de contact (inférée du schéma Zod).
 */
export type ContactFormData = z.infer<typeof contactSchema>;

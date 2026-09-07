import { z } from "zod";

// Regex pour validation souple et internationale des numéros de téléphone
const phoneRegex = /^(\+?\d{1,4}[-.\s]?)?(\(?\d{1,3}\)?[-.\s]?)?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/;

// Regex sécurisée et internationale pour prénom, nom, organisation, fonction :
const nameRegex = /^(?!.*['’\s-]{2})[\p{L}\p{M}](?:[\p{L}\p{M}'’\s-]*[\p{L}\p{M}])?$/u;

export const TYPE_BESOIN_OPTIONS = [
  "Conseil stratégique",
  "Accompagnement entrepreneurial",
  "Développement d'écosystème",
  "Formation",
  "Étude / recherche",
  "Partenariat",
  "Autre",
] as const;

export const contactSchema = z.object({
  firstname: z
    .string()
    .trim()
    .min(1, "Le prénom est requis.")
    .min(2, "Le prénom doit contenir au moins 2 caractères.")
    .max(50, "Le prénom ne peut pas dépasser 50 caractères.")
    .regex(nameRegex, "Le prénom contient des caractères non autorisés."),

  lastname: z
    .string()
    .trim()
    .min(1, "Le nom est requis.")
    .min(2, "Le nom doit contenir au moins 2 caractères.")
    .max(50, "Le nom ne peut pas dépasser 50 caractères.")
    .regex(nameRegex, "Le nom contient des caractères non autorisés."),

  organisation: z
    .string()
    .trim()
    .min(1, "L'organisation est requise.")
    .max(100, "L'organisation ne peut pas dépasser 100 caractères."),

  fonction: z
    .string()
    .trim()
    .min(1, "La fonction est requise.")
    .max(100, "La fonction ne peut pas dépasser 100 caractères."),

  phone: z
    .string()
    .trim()
    .min(1, "Le numéro de téléphone est requis.")
    .min(8, "Le numéro de téléphone doit contenir au moins 8 chiffres.")
    .max(20, "Le numéro de téléphone ne peut pas dépasser 20 caractères.")
    .regex(phoneRegex, "Veuillez saisir un numéro de téléphone valide."),

  email: z
    .string()
    .trim()
    .min(1, "L'adresse email est requise.")
    .email("Veuillez saisir une adresse email valide."),

  typeBesoin: z
    .enum(TYPE_BESOIN_OPTIONS, {
      error: "Veuillez sélectionner un type de besoin valide.",
    }),

  message: z
    .string()
    .trim()
    .min(1, "Le message est requis.")
    .min(10, "Le message doit contenir au moins 10 caractères.")
    .max(1000, "Le message ne peut pas dépasser 1000 caractères."),
});


export type { ContactFormData } from "@/types/contact";

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

export type TypeBesoin = (typeof TYPE_BESOIN_OPTIONS)[number];

function normalizeNeedKey(value: string): string {
  return value
    .trim()
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

/**
 * Résout un paramètre d'URL (`?type=...`, slug de pôle ou libellé exact)
 * vers l'une des options valides du formulaire de contact.
 */
export function resolveNeedType(param: string | null | undefined): TypeBesoin {
  if (!param) return "Conseil stratégique";
  const normalized = normalizeNeedKey(param);

  const exactMatch = TYPE_BESOIN_OPTIONS.find(
    (option) => normalizeNeedKey(option) === normalized
  );
  if (exactMatch) return exactMatch;

  const slugAliases: Record<string, TypeBesoin> = {
    advisory: "Conseil stratégique",
    ecosysteme: "Développement d'écosystème",
    ecosystemes: "Développement d'écosystème",
    academy: "Formation",
    research: "Étude / recherche",
    recherche: "Étude / recherche",
  };

  return slugAliases[normalized] ?? "Conseil stratégique";
}

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
    .max(100, "L'organisation ne peut pas dépasser 100 caractères."),

  fonction: z
    .string()
    .trim()
    .max(100, "La fonction ne peut pas dépasser 100 caractères."),

  phone: z
    .string()
    .trim()
    .refine(
      (val) => val === "" || (val.length >= 8 && val.length <= 20 && phoneRegex.test(val)),
      "Veuillez saisir un numéro de téléphone valide."
    ),

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

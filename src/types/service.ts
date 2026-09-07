import type { LucideIcon } from "lucide-react";

/**
 * Représente une prestation ou domaine individuel au sein d'un pôle d'expertise.
 */
export type ServiceListItem = {
    /** Identifiant unique de la prestation */
    id: number;
    /** Nom de la prestation */
    name: string;
    /** Explication optionnelle */
    description?: string;
};

/**
 * Représente un pôle d'expertise complet (Advisory, Écosystèmes, Academy, Research).
 */
export type Service = {
    /** Identifiant unique du pôle */
    id: number;
    /** Slug URL (ex: advisory, ecosystemes) */
    slug: string;
    /** Titre officiel (ex: 01 — Advisory) */
    title: string;
    /** Sous-titre ou accroche courte */
    tagline: string;
    /** Description stratégique détaillée */
    description: string;
    /** Liste des domaines d'intervention (3 à 5) */
    list: ServiceListItem[];
    /** Domaines d'intervention sous forme de puces textuelles */
    domains: string[];
    /** Livrables clés associés */
    deliverables?: string[];
    /** Texte du bouton d'action */
    ctaText: string;
    /** Icône Lucide associée */
    icon: LucideIcon;
};


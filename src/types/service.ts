import type { LucideIcon } from "lucide-react";

/**
 * Représente une prestation individuelle au sein d'un service.
 */
export type ServiceListItem = {
    /** Identifiant unique de la prestation */
    id: number;
    /** Nom de la prestation */
    name: string;
};

/**
 * Représente une offre de service complète.
 */
export type Service = {
    /** Identifiant unique de l'offre */
    id: number;
    /** Titre de l'offre (ex: Advisory, Academy) */
    title: string;
    /** Liste des prestations incluses */
    list: ServiceListItem[];
    /** Icône Lucide associée */
    icon: LucideIcon;
};

import type { LucideIcon } from "lucide-react";

/**
 * Représente un domaine d'intervention de FANI IMPACT LAB.
 */
export type WhatWeDoItem = {
    /** Identifiant unique */
    id: number;
    /** Titre du domaine d'intervention */
    title: string;
    /** Description détaillée des actions */
    description: string;
    /** Icône Lucide associée */
    icon: LucideIcon;
};

/**
 * Représente une catégorie de client ou partenaire.
 */
export type ClientItem = {
    /** Identifiant unique */
    id: number;
    /** Nom de la catégorie (ex: Startups, PME, ONG) */
    name: string;
    /** Icône Lucide représentative */
    icon: LucideIcon;
};

/**
 * Représente une statistique clé de l'organisation.
 */
export type StatItem = {
    /** Valeur affichée (ex: "2020", "50+") */
    value: string;
    /** Libellé de la statistique */
    label: string;
};

/**
 * Représente un pilier d'action stratégique.
 */
export type ConvictionPillar = {
    /** Identifiant unique du pilier */
    id: number;
    /** Titre du pilier */
    title: string;
    /** Explication synthétique du pilier */
    description: string;
    /** Icône Lucide illustrant le pilier */
    icon: LucideIcon;
};

/**
 * Structure globale de la section Conviction & Vision.
 */
export type ConvictionData = {
    /** Badge supérieur */
    badge: string;
    /** Titre principal de la section */
    title: string;
    /** Partie accentuée du titre */
    titleGradient: string;
    /** Texte de la conviction principale */
    description: string;
    /** Énoncé de la vision stratégique */
    vision?: string;
    /** Citation inspirante optionnelle */
    quote?: string;
    /** Liste des piliers d'action */
    pillars: ConvictionPillar[];
};

/** Alias pour la vision */
export type VisionPillar = ConvictionPillar;
export type VisionData = ConvictionData;

/**
 * Informations et profil de la fondatrice.
 */
export type FounderInfo = {
    /** Nom complet */
    name: string;
    /** Rôle fonctionnel (ex: Fondatrice) */
    role: string;
    /** Titre officiel */
    title: string;
    /** Chemin vers la photo de profil */
    image: string;
    /** Paragraphes de biographie */
    bio: string[];
    /** Liste des compétences clés et réalisations */
    skills: string[];
};

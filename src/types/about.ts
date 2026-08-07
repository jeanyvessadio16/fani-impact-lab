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
 * Représente une étape de la méthode Le FIL.
 */
export type MethodStep = {
    /** Identifiant unique */
    id: number;
    /** Lettre représentative (F, I, L) */
    letter: string;
    /** Titre de l'étape (ex: Fédérer) */
    title: string;
    /** Subtitle / Court résumé */
    subtitle: string;
    /** Description détaillée */
    description: string;
};

/**
 * Structure globale de la section Notre Méthode.
 */
export type MethodData = {
    badge: string;
    title: string;
    caption: string;
    steps: MethodStep[];
};

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

/**
 * Représente une raison de choisir FANI IMPACT LAB.
 */
export type WhyChooseUsItem = {
    /** Identifiant unique */
    id: number;
    /** Titre de la raison / réalisation */
    title: string;
    /** Explication synthétique optionnelle */
    description?: string;
    /** Icône Lucide représentative optionnelle */
    icon?: LucideIcon;
};

/**
 * Structure globale de la section Pourquoi nous choisir.
 */
export type WhyChooseUsData = {
    /** Badge supérieur */
    badge: string;
    /** Titre principal */
    title: string;
    /** Partie accentuée du titre */
    titleGradient: string;
    /** Sous-titre ou description d'en-tête */
    subtitle: string;
    /** Liste des avantages/raisons */
    items: WhyChooseUsItem[];
};



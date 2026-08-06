import {
    Rocket,
    Lightbulb,
    Network,
    Landmark,
    Building2,
    Handshake,
    GraduationCap,
    Zap,
    BarChart3,
    type LucideIcon,
} from "lucide-react";

export type WhatWeDoItem = {
    id: number;
    title: string;
    description: string;
    icon: LucideIcon;
};

export type ClientItem = {
    id: number;
    name: string;
};

export type StatItem = {
    value: string;
    label: string;
};

export type ConvictionPillar = {
    id: number;
    title: string;
    icon: LucideIcon;
};

export type ConvictionData = {
    badge: string;
    title: string;
    titleGradient: string;
    description: string;
    vision?: string;
    quote?: string;
    pillars: ConvictionPillar[];
};

export const OUR_CONVICTION: ConvictionData = {
    badge: "Notre conviction & notre vision",
    title: "Notre ",
    titleGradient: "conviction & vision",
    description:
        "Les plus grands défis de l'Afrique ne seront pas résolus par une seule organisation. Ils seront résolus par des écosystèmes.",
    vision:
        "Faire de FANI IMPACT LAB une référence africaine du conseil stratégique en entrepreneuriat, innovation et développement des écosystèmes.",
    pillars: [
        {
            id: 1,
            title: "Créer des connexions durables",
            icon: Handshake,
        },
        {
            id: 2,
            title: "Renforcer les capacités",
            icon: GraduationCap,
        },
        {
            id: 3,
            title: "Accélérer les transformations",
            icon: Zap,
        },
        {
            id: 4,
            title: "Produire un impact mesurable",
            icon: BarChart3,
        },
    ],
};

export type VisionPillar = ConvictionPillar;
export type VisionData = ConvictionData;
export const OUR_VISION = OUR_CONVICTION;


export type FounderInfo = {
    name: string;
    role: string;
    title: string;
    image: string;
    bio: string[];
    skills: string[];
};

export const WHAT_WE_DO: WhatWeDoItem[] = [
    {
        id: 1,
        title: "Entrepreneuriat",
        description:
            "Accompagnement sur-mesure des entrepreneurs, accélération de projets et soutien à la création de valeur durable.",
        icon: Rocket,
    },
    {
        id: 2,
        title: "Innovation",
        description:
            "Conception de nouvelles solutions, modélisation d'approches disruptives et transformation par l'impact.",
        icon: Lightbulb,
    },
    {
        id: 3,
        title: "Développement des systèmes",
        description:
            "Animation d'écosystèmes, interconnexion d'acteurs clés et création de synergies territoriales.",
        icon: Network,
    },
    {
        id: 4,
        title: "Politiques publiques",
        description:
            "Conseil stratégique aux institutions, élaboration de stratégies territoriales et études d'impact.",
        icon: Landmark,
    },
    {
        id: 5,
        title: "Renforcement organisationnel",
        description:
            "Optimisation des processus, développement du leadership et structuration des capacités internes.",
        icon: Building2,
    },
];

export const CLIENTS: ClientItem[] = [
    { id: 1, name: "Startups" },
    { id: 2, name: "PME" },
    { id: 3, name: "Incubateurs" },
    { id: 4, name: "Institutions publiques" },
    { id: 5, name: "Collectivités" },
    { id: 6, name: "Bailleurs de fonds" },
    { id: 7, name: "ONG" },
    { id: 8, name: "Universités" },
    { id: 9, name: "Investisseurs" },
];

export const ABOUT_STATS: StatItem[] = [
    { value: "2020", label: "Année de création" },
    { value: "50+", label: "Projets accompagnés" },
    { value: "5", label: "Axes d'intervention" },
];

export const FOUNDER_INFO: FounderInfo = {
    name: "Fatoumata Niang",
    role: "Fondatrice",
    title: "Fondatrice & Directrice Générale — FANI IMPACT LAB",
    image: "/images/fondatrice.png",
    bio: [
        "Passionnée par l'entrepreneuriat et le développement, Fatoumata Niang a fondé FANI IMPACT LAB avec une vision claire : bâtir un cabinet de conseil capable de répondre aux besoins réels des organisations africaines, avec rigueur, créativité et profondeur.",

    ],
    skills: [
        "Plus de 20 ans d'expérience",
        "Fondatrice de plusieurs organisations",
        "Créatrice de réseaux d'entrepreneurs",
        "Contributrice au plaidoyer ayant accompagné la Startup Act au Sénégal",
        "Experte en entrepreneuriat, innovation et développement des écosystèmes",
    ],
};

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
    Briefcase,
    Users,
    Banknote,
    Heart,
    TrendingUp,
    Compass,
    Award,
    type LucideIcon,
} from "lucide-react";

import type {
    WhatWeDoItem,
    ClientItem,
    StatItem,
    ConvictionPillar,
    ConvictionData,
    VisionPillar,
    VisionData,
    MethodStep,
    MethodData,
    FounderInfo,
    WhyChooseUsItem,
    WhyChooseUsData,
} from "@/types/about";

export type {
    WhatWeDoItem,
    ClientItem,
    StatItem,
    ConvictionPillar,
    ConvictionData,
    VisionPillar,
    VisionData,
    MethodStep,
    MethodData,
    FounderInfo,
    WhyChooseUsItem,
    WhyChooseUsData,
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
            description: "Favoriser les synergies entre entrepreneurs, institutions et partenaires financiers.",
            icon: Handshake,
        },
        {
            id: 2,
            title: "Renforcer les capacités",
            description: "Outiller les acteurs locaux avec des expertises stratégiques d'excellence.",
            icon: GraduationCap,
        },
        {
            id: 3,
            title: "Accélérer les transformations",
            description: "Transformer les idées à haut potentiel en projets concrets sur le terrain.",
            icon: Zap,
        },
        {
            id: 4,
            title: "Produire un impact mesurable",
            description: "Garantir des résultats tangibles et durables pour les communautés.",
            icon: BarChart3,
        },
    ],
};

export const OUR_VISION = OUR_CONVICTION;

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
    { id: 1, name: "Startups", icon: Rocket },
    { id: 2, name: "PME", icon: Briefcase },
    { id: 3, name: "Incubateurs", icon: Lightbulb },
    { id: 4, name: "Institutions publiques", icon: Landmark },
    { id: 5, name: "Collectivités", icon: Users },
    { id: 6, name: "Bailleurs de fonds", icon: Banknote },
    { id: 7, name: "ONG", icon: Heart },
    { id: 8, name: "Universités", icon: GraduationCap },
    { id: 9, name: "Investisseurs", icon: TrendingUp },
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
    image: "/images/fondatrice.jpeg",
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

export const OUR_METHOD: MethodData = {
    badge: "NOTRE MÉTHODE",
    title: "Le FIL",
    caption: "Chaque projet est conçu pour connecter les bonnes personnes, structurer les solutions et produire des résultats mesurables.",
    steps: [
        {
            id: 1,
            letter: "F",
            title: "Fédérer",
            subtitle: "Connecter & Mobiliser",
            description: "Rassembler les entrepreneurs, institutions, collectivités et partenaires autour d'une vision commune pour créer des synergies écosystémiques solides.",
        },
        {
            id: 2,
            letter: "I",
            title: "Innover",
            subtitle: "Structurer & Concevoir",
            description: "Modéliser et concevoir des solutions audacieuses, adaptées aux réalités du terrain et axées sur la transformation et le renforcement des capacités.",
        },
        {
            id: 3,
            letter: "L",
            title: "Libérer l'impact",
            subtitle: "Déployer & Mesurer",
            description: "Accompagner l'exécution concrète sur le terrain et générer des résultats tangibles, mesurables et pérennes pour les territoires.",
        },
    ],
};

export const WHY_CHOOSE_US: WhyChooseUsData = {
    badge: "Notre impact & bilan",
    title: "Pourquoi choisir ",
    titleGradient: "FANI IMPACT LAB ?",
    subtitle: "Nous ne sommes pas seulement des consultants, nous sommes des bâtisseurs d'écosystèmes.",
    items: [
        { id: 1, title: "Nous avons créé", icon: Compass },
        { id: 2, title: "Nous avons accompagné", icon: Network },
        { id: 3, title: "Nous avons plaidé", icon: Lightbulb },
        { id: 4, title: "Nous avons fédéré", icon: Award },
    ],
};



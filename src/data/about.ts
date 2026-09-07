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
    Globe,
    Target,
    Layers,
    type LucideIcon,
} from "lucide-react";

import type {
    WhatWeDoItem,
    ClientItem,
    TargetAudienceItem,
    ConvictionPillar,
    ConvictionData,
    MethodStep,
    MethodData,
    FounderInfo,
    WhyChooseUsItem,
    WhyChooseUsData,
} from "@/types/about";

export type {
    WhatWeDoItem,
    ClientItem,
    TargetAudienceItem,
    ConvictionPillar,
    ConvictionData,
    MethodStep,
    MethodData,
    FounderInfo,
    WhyChooseUsItem,
    WhyChooseUsData,
};


export const OUR_CONVICTION: ConvictionData = {
    badge: "Notre conviction & notre vision",
    title: "Construire des écosystèmes pour ",
    titleGradient: "transformer les territoires",
    description:
        "Nous croyons fermement que les grands défis stratégiques et économiques de l'Afrique ne peuvent pas être résolus isolément. La collaboration entre entrepreneurs, institutions, investisseurs, collectivités, chercheurs et partenaires constitue l'unique levier d'un impact durable.",
    vision:
        "Faire de FANI IMPACT LAB une référence africaine dans la conception de stratégies, le renforcement des capacités et l'animation d'écosystèmes à fort impact.",
    pillars: [
        {
            id: 1,
            title: "Fédérer les acteurs clés",
            description: "Créer des synergies fertiles entre entrepreneurs, institutions, collectivités et partenaires financiers.",
            icon: Handshake,
        },
        {
            id: 2,
            title: "Structurer des solutions ancrées",
            description: "Modéliser des approches stratégiques adaptées aux réalités économiques et sociales locales.",
            icon: Target,
        },
        {
            id: 3,
            title: "Renforcer les capacités",
            description: "Outiller durablement les leaders, organisations et décideurs territoriaux.",
            icon: GraduationCap,
        },
        {
            id: 4,
            title: "Libérer l'impact mesurable",
            description: "Transformer chaque analyse et recommandation en actions concrètes et pérennes.",
            icon: BarChart3,
        },
    ],
};

export const OUR_VISION = OUR_CONVICTION;

export const WHAT_WE_DO: WhatWeDoItem[] = [
    {
        id: 1,
        title: "Advisory",
        description:
            "Conseil stratégique, transformation organisationnelle, modélisation économique et appui aux politiques publiques d'innovation.",
        icon: Lightbulb,
    },
    {
        id: 2,
        title: "Écosystèmes",
        description:
            "Conception, structuration et animation d'écosystèmes entrepreneuriaux, mise en réseau et création de consortiums.",
        icon: Network,
    },
    {
        id: 3,
        title: "Academy",
        description:
            "Programmes de formation sur-mesure, développement du leadership, renforcement de capacités et accompagnement.",
        icon: GraduationCap,
    },
    {
        id: 4,
        title: "Research",
        description:
            "Études stratégiques, diagnostics territoriaux, évaluations d'impact, recherche appliquée et note de plaidoyer.",
        icon: Landmark,
    },
];

export const CLIENTS: TargetAudienceItem[] = [
    {
        id: 1,
        name: "Entrepreneurs & Startups",
        description: "Clarification de la stratégie, passage à l'échelle et structuration du modèle économique.",
        icon: Rocket,
    },
    {
        id: 2,
        name: "PME & Entreprises",
        description: "Transformation organisationnelle, innovation et stratégies de croissance locale.",
        icon: Briefcase,
    },
    {
        id: 3,
        name: "Institutions Publiques",
        description: "Conseil en politiques d'innovation, développement territorial et structuration d'initiatives.",
        icon: Landmark,
    },
    {
        id: 4,
        name: "Collectivités Territoriales",
        description: "Valorisation des ressources locales et animation des écosystèmes territoriaux.",
        icon: Users,
    },
    {
        id: 5,
        name: "ONG & Organisations de Développement",
        description: "Conception de programmes à impact, études de faisabilité et évaluation.",
        icon: Heart,
    },
    {
        id: 6,
        name: "Incubateurs & Accélérateurs",
        description: "Mentorat, ingénierie de programmes d'accompagnement et montée en compétences.",
        icon: Lightbulb,
    },
    {
        id: 7,
        name: "Universités & Centres de Recherche",
        description: "Passerelles entre recherche appliquée, entrepreneuriat et transfert d'innovation.",
        icon: GraduationCap,
    },
    {
        id: 8,
        name: "Investisseurs & Business Angels",
        description: "Analyse d'écosystèmes, due diligence stratégique et cartographie d'opportunités.",
        icon: TrendingUp,
    },
    {
        id: 9,
        name: "Partenaires Techniques & Financiers",
        description: "Mise en œuvre d'initiatives complexes, gestion de consortiums et mesure d'impact.",
        icon: Banknote,
    },
];

export const TARGET_AUDIENCES = CLIENTS;

export const FOUNDER_INFO: FounderInfo = {
    name: "Fatoumata Niang",
    role: "Fondatrice & Directrice Générale",
    title: "Fondatrice & Directrice Générale — FANI IMPACT LAB",
    image: "/images/fondatrice.jpeg",
    linkedinUrl: "https://www.linkedin.com/in/fatoumata-niang",
    bio: [
        "Forte de plus de 20 ans d'expérience dans l'accompagnement des organisations, l'entrepreneuriat et l'innovation, Fatoumata Niang a fondé FANI IMPACT LAB avec une conviction profonde : l'Afrique a besoin de structures de conseil agile, expertes et profondément ancrées dans ses réalités territoriales.",
        "Experte reconnue dans la structuration des écosystèmes entrepreneuriaux au Sénégal et en Afrique de l'Ouest, elle a notamment contribué aux travaux de plaidoyer et d'élaboration ayant accompagné l'avènement du Startup Act au Sénégal.",
        "Sa vision associe rigueur méthodologique, finesse stratégique et engagement humain pour aider les acteurs publics, privés et communautaires à transformer leurs ambitions en résultats durables.",
    ],
    skills: [
        "Plus de 20 ans d'expérience au service de l'entrepreneuriat",
        "Fondatrice et leader d'initiatives à fort impact",
        "Contributrice majeure au plaidoyer du Startup Act Sénégal",
        "Experte en structuration d'écosystèmes & politiques d'innovation",
        "Ancrage fort en Casamance (Ziguinchor), au Sénégal et en Afrique",
    ],
};

export const OUR_METHOD: MethodData = {
    badge: "NOTRE MÉTHODE",
    title: "Le FIL",
    caption: "Une méthodologie structurée pour garantir la pertinence, la faisabilité et la pérennité de chaque intervention.",
    steps: [
        {
            id: 1,
            letter: "F",
            title: "Fédérer",
            subtitle: "Connecter les acteurs & les ressources",
            description: "Créer un espace de dialogue et de synergie entre entrepreneurs, institutions, chercheurs, investisseurs et collectivités pour bâtir une dynamique collective.",
        },
        {
            id: 2,
            letter: "I",
            title: "Innover",
            subtitle: "Concevoir des solutions adaptées",
            description: "Modéliser des stratégies et des outils pertinents, directement ajustés aux réalités économiques, culturales et territoriales du terrain.",
        },
        {
            id: 3,
            letter: "L",
            title: "Libérer l'impact",
            subtitle: "Exécuter & pérenniser",
            description: "Transformer les diagnostics et plans d'action en réalisations concrètes et mesurables, générant de la valeur durable pour les organisations.",
        },
    ],
};

export const WHY_CHOOSE_US: WhyChooseUsData = {
    badge: "POURQUOI FIL ?",
    title: "Pourquoi choisir ",
    titleGradient: "FANI IMPACT LAB ?",
    subtitle: "Notre engagement et notre valeur ajoutée reposent sur des résultats et des piliers d'action concrets.",
    items: [
        {
            id: 1,
            title: "Nous avons créé",
            description: "Des initiatives à fort impact, des programmes d'accompagnement sur-mesure et des outils méthodologiques adaptés aux réalités locales.",
            icon: Lightbulb,
        },
        {
            id: 2,
            title: "Nous avons accompagné",
            description: "Des entrepreneurs, des PME, des institutions et des acteurs des écosystèmes dans la structuration et le passage à l'échelle de leurs projets.",
            icon: Handshake,
        },
        {
            id: 3,
            title: "Nous avons plaidé",
            description: "Pour des politiques d'innovation ambitieuses et inclusives, avec une contribution majeure au cadre et au plaidoyer du Startup Act Sénégal.",
            icon: Landmark,
        },
        {
            id: 4,
            title: "Nous avons fédéré",
            description: "Les acteurs publics, privés, scientifiques et communautaires autour de visions collectives et de synergies à fort impact territorial.",
            icon: Network,
        },
    ],
};

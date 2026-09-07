import type { InsightArticle, InsightCategory } from "@/types/insights";

export const INSIGHT_CATEGORIES: InsightCategory[] = [
    "Entrepreneuriat",
    "Innovation",
    "Écosystèmes",
    "Leadership",
    "Politiques publiques",
    "Développement territorial",
    "Afrique",
];

export const INSIGHT_ARTICLES: InsightArticle[] = [
    {
        id: "art-1",
        slug: "batir-des-ecosystemes-entrepreneuriaux-resilients-en-afrique",
        title: "Pourquoi l'Afrique doit passer des projets isolés à la logique d'écosystème",
        excerpt:
            "Les approches en 'silos' ont montré leurs limites. Découvrez comment la structuration d'écosystèmes collaboratifs permet de démultiplier l'impact sur les territoires.",
        category: "Écosystèmes",
        author: {
            name: "Fatoumata Niang",
            role: "Fondatrice & DG — FANI IMPACT LAB",
            image: "/images/fondatrice.jpeg",
        },
        publishedAt: "15 Août 2026",
        readingTime: "5 min de lecture",
        coverImage: "/images/bg-fil.jpg",
        featured: true,
        tags: ["Écosystèmes", "Afrique", "Stratégie", "Territoire"],
        content: [
            "Pendant trop longtemps, l'accompagnement à l'entrepreneuriat en Afrique s'est articulé autour d'initiatives fragmentées : un incubateur financé par un bailleur d'un côté, un concours de pitchs sponsorisé de l'autre, et des universités déconnectées du tissu économique local.",
            "Résultat : des cohortes d'entrepreneurs formés mais isolés, incapables de trouver les relais financiers, réglementaires et commerciaux indispensables à leur croissance.",
            "Chez FANI IMPACT LAB, notre conviction est claire : les grands défis du continent ne seront pas résolus par des organisations isolées, mais par des écosystèmes articulés. Un écosystème fonctionnel repose sur quatre piliers d'interdépendance : la fluidité de la confiance entre acteurs, l'alignement des incitations publiques et privées, la circulation des compétences et l'ancrage territorial.",
            "En appliquant notre méthode FIL (Fédérer - Innover - Libérer l'impact), nous aidons les collectivités et les bailleurs à concevoir des cadres où chaque acteur apporte sa valeur sans duplicité, créant ainsi une valeur partagée et durable.",
        ],
    },
    {
        id: "art-2",
        slug: "du-startup-act-a-l-execution-territoriale-au-senegal",
        title: "Startup Act au Sénégal : Quels leviers pour inclure les régions périphériques ?",
        excerpt:
            "Le cadre législatif offre des opportunités historiques. Analyse stratégique des défis de territorialisation pour que des pôles comme la Casamance en bénéficient pleinement.",
        category: "Politiques publiques",
        author: {
            name: "Fatoumata Niang",
            role: "Fondatrice & DG — FANI IMPACT LAB",
            image: "/images/fondatrice.jpeg",
        },
        publishedAt: "28 Juillet 2026",
        readingTime: "7 min de lecture",
        coverImage: "/images/about-hero.png",
        featured: false,
        tags: ["Startup Act", "Politiques publiques", "Sénégal", "Casamance"],
        content: [
            "L'adoption du Startup Act au Sénégal a marqué une étape fondamentale pour la reconnaissance des entreprises à fort potentiel d'innovation. Cependant, la valeur d'une loi ne réside pas dans son texte, mais dans la réalité de son exécution.",
            "À l'heure actuelle, la majorité des jeunes entreprises informées et en mesure d'en réclamer les avantages fiscaux et douaniers se concentrent dans la capitale.",
            "Pour que cette dynamique profite à l'ensemble du territoire national, notamment à la région de la Casamance et au sud du Sénégal, trois conditions majeures doivent être réunies : la décentralisation des guichets d'information, la simplification administrative pour les entreprises informelles et la formation des agents territoriaux aux enjeux de l'économie numérique.",
            "FANI IMPACT LAB formule dans cette note des propositions concrètes pour accompagner les pouvoirs publics et les structures d'appui locales dans la territorialisation effective du Startup Act.",
        ],
    },
    {
        id: "art-3",
        slug: "le-leadership-d-impact-en-afrique-de-l-ouest",
        title: "Le leadership d'impact : Allier rigueur stratégique et ancrage humain",
        excerpt:
            "Diriger une organisation ou une initiative à impact en Afrique exige un équilibre subtil entre vision globale et compréhension fine des dynamiques locales.",
        category: "Leadership",
        author: {
            name: "Fatoumata Niang",
            role: "Fondatrice & DG — FANI IMPACT LAB",
            image: "/images/fondatrice.jpeg",
        },
        publishedAt: "10 Juin 2026",
        readingTime: "4 min de lecture",
        coverImage: "/images/contact-hero.png",
        featured: false,
        tags: ["Leadership", "Management", "Entrepreneuriat", "Afrique"],
        content: [
            "Qu'est-ce qui caractérise un dirigeant capable de bâtir une organisation pérenne dans les écosystèmes émergents ? Ce n'est ni l'application aveugle de manuels de management occidentaux, ni le seul pragmatisme intuitif.",
            "Le leadership d'impact exige une double compétence : la rigueur d'analyse stratégique d'une part, et l'intelligence relationnelle et territoriale d'autre part.",
            "Dans cette analyse, nous explorons les piliers du leadership défendu au sein de FIL Academy : la clarté d'intention, la capacité de co-construction avec les équipes et les communautés, et la résilience face à la complexité des marchés africains.",
        ],
    },
];

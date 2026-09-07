import { Lightbulb, Network, GraduationCap, FlaskConical, type LucideIcon } from "lucide-react";
import type { Service, ServiceListItem } from "@/types/service";

export type { Service, ServiceListItem };

export const SERVICES: Service[] = [
    {
        id: 1,
        slug: "advisory",
        title: "Advisory",
        tagline: "Conseil stratégique et accompagnement des organisations",
        description:
            "Nous aidons les organisations, les entreprises et les institutions à clarifier leur vision stratégique, à adapter leurs modèles économiques et à transformer leurs ambitions en plans d'action pragmatiques.",
        list: [
            { id: 1, name: "Stratégie d'organisation & de croissance", description: "Cadrage de la vision, positionnement et feuille de route opérationnelle." },
            { id: 2, name: "Transformation organisationnelle", description: "Reconception des processus, gouvernance et agilité d'exécution." },
            { id: 3, name: "Modèles économiques & pérennité", description: "Ingénierie de business models viables adaptés aux marchés africains." },
            { id: 4, name: "Développement organisationnel", description: "Renforcement de la structuration interne et gestion du changement." },
            { id: 5, name: "Politiques publiques & innovation", description: "Conseil aux institutions pour l'élaboration de cadences réglementaires et stratégiques." },
        ],
        domains: [
            "Stratégie",
            "Transformation organisationnelle",
            "Modèles économiques",
            "Développement organisationnel",
            "Politiques publiques",
            "Innovation",
        ],
        deliverables: [
            "Schémas directeurs & plans stratégiques",
            "Analyses d'impact & notes de cadrage",
            "Feuilles de route de transformation",
            "Modèles d'affaires & matrices de pérennité",
        ],
        ctaText: "Explorer Advisory",
        icon: Lightbulb,
    },
    {
        id: 2,
        slug: "ecosystemes",
        title: "Écosystèmes",
        tagline: "Conception, structuration et animation d'écosystèmes",
        description:
            "Nous concevons et animons des réseaux d'acteurs publics, privés et communautaires afin de stimuler les synergies territoriales, le partage de ressources et la création de valeur partagée.",
        list: [
            { id: 1, name: "Entrepreneuriat & innovation ouverte", description: "Dynamisation des hubs, réseaux de créateurs et programmes collaboratifs." },
            { id: 2, name: "Animation de communautés & réseaux", description: "Fédérer les talents, les experts et les parties prenantes territoriales." },
            { id: 3, name: "Partenariats & alliance stratégiques", description: "Conception et négociation d'accords d'impact multi-acteurs." },
            { id: 4, name: "Structuration de consortiums", description: "Montage de coalitions d'acteurs pour la réponse aux grands appels d'offres." },
            { id: 5, name: "Développement territorial & mise en réseau", description: "Ancrage des initiatives au cœur des dynamiques économiques locales." },
        ],
        domains: [
            "Entrepreneuriat",
            "Innovation",
            "Communautés",
            "Partenariats",
            "Consortiums",
            "Développement territorial",
            "Mise en réseau des acteurs",
        ],
        deliverables: [
            "Cartographie & diagnostic d'écosystèmes",
            "Chartes de gouvernance de consortium",
            "Programmes d'animation de communautés",
            "Accords de partenariat stratégique",
        ],
        ctaText: "Explorer Écosystèmes",
        icon: Network,
    },
    {
        id: 3,
        slug: "academy",
        title: "Academy",
        tagline: "Formation et développement des compétences",
        description:
            "Nous concevons et déployons des parcours de formation, d'immersion et de mentorat pour armer les dirigeants, entrepreneurs et équipes opérationnelles d'expertises de haut niveau.",
        list: [
            { id: 1, name: "Formation à l'entrepreneuriat & posture", description: "Parcours pratiques de l'idée au déploiement commercial." },
            { id: 2, name: "Leadership & management stratégique", description: "Développement des compétences managériales et de vision." },
            { id: 3, name: "Ingénierie de l'innovation", description: "Méthodes agiles, design thinking et résolution de problèmes complexes." },
            { id: 4, name: "Renforcement des capacités institutionnelles", description: "Modules sur-mesure pour les équipes publiques et associatives." },
            { id: 5, name: "Programmes de mentorat & coaching", description: "Mise en relation et suivi personnalisé par des experts aguerris." },
        ],
        domains: [
            "Entrepreneuriat",
            "Leadership",
            "Innovation",
            "Renforcement des capacités",
            "Mentorat",
            "Programmes de formation",
        ],
        deliverables: [
            "Curricula & supports de formation sur-mesure",
            "Ateliers intensifs & bootcamps",
            "Cadres d'évaluation des compétences",
            "Dispositifs de mentorat structurés",
        ],
        ctaText: "Explorer Academy",
        icon: GraduationCap,
    },
    {
        id: 4,
        slug: "research",
        title: "Research",
        tagline: "Recherche, études et production de connaissances",
        description:
            "Nous produisons des études rigoureuses, des cartographies fines et des analyses prospectives pour nourrir la prise de décision, documenter l'impact et alimenter le plaidoyer stratégique en Afrique.",
        list: [
            { id: 1, name: "Études & cartographies sectorielles", description: "Analyses de filières, opportunités de marché et dynamiques territoriales." },
            { id: 2, name: "Diagnostics organisationnels & territoriaux", description: "États des lieux approfondis et identification des verrous de croissance." },
            { id: 3, name: "Évaluations de programmes & mesure d'impact", description: "Évaluation à mi-parcours et ex-post de projets d'accompagnement." },
            { id: 4, name: "Recherche appliquée & capitalisation", description: "Documentation des bonnes pratiques et publication de guides méthodologiques." },
            { id: 5, name: "Plaidoyer & notes de politiques publiques", description: "Rédaction de notes stratégiques à destination des décideurs institutionnels." },
        ],
        domains: [
            "Études",
            "Diagnostics",
            "Évaluations",
            "Recherche appliquée",
            "Capitalisation",
            "Analyse des écosystèmes",
            "Plaidoyer",
            "Politiques publiques",
        ],
        deliverables: [
            "Rapports d'études & notes de synthèse",
            "Guides de capitalisation & bonnes pratiques",
            "Grilles d'évaluation d'impact",
            "Notes de plaidoyer institutionnel",
        ],
        ctaText: "Explorer Research",
        icon: FlaskConical,
    },
];

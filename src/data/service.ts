import { Lightbulb, Network, GraduationCap, FlaskConical, type LucideIcon } from "lucide-react";

export type Service = {
    id: number;
    title: string;
    list: { id: number; name: string }[];
    icon: LucideIcon;
};

export const SERVICES: Service[] = [
    {
        id: 1,
        title: "Advisory",
        list: [
            { id: 1, name: "Conseil stratégique" },
            { id: 2, name: "Transformation organisationnelle" },
            { id: 3, name: "Business models" },
            { id: 4, name: "Politiques publiques" },
        ],
        icon: Lightbulb,
    },
    {
        id: 2,
        title: "Ecosystèmes",
        list: [
            { id: 1, name: "Développement des écosystèmes entrepreneuriaux" },
            { id: 2, name: "Animation des communautés" },
            { id: 3, name: "Création de consortiums" },
            { id: 4, name: "Partenariats" },
        ],
        icon: Network,
    },
    {
        id: 3,
        title: "Academy",
        list: [
            { id: 1, name: "Leadership" },
            { id: 2, name: "Innovation" },
            { id: 3, name: "Entrepreneuriat" },
            { id: 4, name: "Renforcement de capacités" },
            { id: 5, name: "Mentorat" },
        ],
        icon: GraduationCap,
    },
    {
        id: 4,
        title: "Research",
        list: [
            { id: 1, name: "Etudes" },
            { id: 2, name: "Diagnostics" },
            { id: 3, name: "Evaluations" },
            { id: 4, name: "Capitalisation" },
            { id: 5, name: "Plaidoyer" },
        ],
        icon: FlaskConical,
    },
];
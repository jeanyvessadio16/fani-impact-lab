import type { LucideIcon } from "lucide-react";

export type ProjectCaseStudy = {
    id: string;
    title: string;
    slug: string;
    pole: "Advisory" | "Écosystèmes" | "Academy" | "Research";
    partnerOrClient?: string;
    isClientPublic: boolean;
    status: "Initiative en cours" | "Projet pilote" | "Étude de cas";
    date: string;
    context: string;
    problematic: string;
    intervention: string;
    methodology: string;
    expectedResults: string[];
    impactPotential: string;
    image?: string;
    tags: string[];
};

export type ProjectFilterOption = "Tous" | "Advisory" | "Écosystèmes" | "Academy" | "Research";

export type InsightCategory =
    | "Entrepreneuriat"
    | "Innovation"
    | "Écosystèmes"
    | "Leadership"
    | "Politiques publiques"
    | "Développement territorial"
    | "Afrique";

export type InsightArticle = {
    id: string;
    slug: string;
    title: string;
    excerpt: string;
    category: InsightCategory;
    author: {
        name: string;
        role: string;
        image?: string;
    };
    publishedAt: string;
    readingTime: string;
    coverImage: string;
    content: string[]; // Paragraphes de contenu ou sections
    tags: string[];
    featured?: boolean;
};

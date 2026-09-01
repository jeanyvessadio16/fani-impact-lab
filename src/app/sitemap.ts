import type { MetadataRoute } from "next";

/**
 * Générateur dynamique du plan du site (Sitemap XML) pour Next.js App Router.
 * Définit la liste de toutes les pages publiques indexables, avec leur priorité
 * et leur fréquence de mise à jour pour les moteurs de recherche (Google, Bing, etc.).
 */
export default function sitemap(): MetadataRoute.Sitemap {
  // Domaine principal de l'application (configuré via variable d'environnement ou valeur par défaut)
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://fanimpactlab.vercel.app";
  const currentDate = new Date();

  return [
    // Page d'accueil - Priorité maximale
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    // Page À Propos - Présentation, vision, méthode et fondatrice
    {
      url: `${baseUrl}/a-propos`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    // Page Contact - Formulaire et coordonnées d'accès
    {
      url: `${baseUrl}/contact`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];
}


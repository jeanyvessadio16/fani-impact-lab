import type { MetadataRoute } from "next";

/**
 * Générateur dynamique du fichier directives robots.txt pour Next.js.
 * Contrôle l'accès des robots d'exploration (Googlebot, Bingbot, etc.)
 * et indique l'emplacement du fichier sitemap.xml.
 */
export default function robots(): MetadataRoute.Robots {
  // Domaine de base de l'application
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://faniimpactlab.com";

  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/"], // Restreindre l'indexation des routes API internes
    },
    // Lien vers le sitemap.xml généré dynamiquement
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}


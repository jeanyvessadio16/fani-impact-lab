import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

import HeaderNavbar from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";

const poppins = Poppins({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

// URL du site de production avec repli vers l'adresse canonique par défaut
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://fanimpactlab.vercel.app";

/**
 * Métadonnées globales par défaut pour l'ensemble du site FANI IMPACT LAB.
 * Inclut le modèle de titre, la description générale, les mots-clés stratégiques,
 * ainsi que la configuration des cartes Open Graph et Twitter.
 */
export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "FANI IMPACT LAB | Cabinet de Conseil Stratégique, Entrepreneuriat & Innovation",
    template: "%s | FANI IMPACT LAB",
  },
  description:
    "FANI IMPACT LAB est un cabinet de conseil stratégique spécialisé dans l'entrepreneuriat, l'innovation, le développement des écosystèmes et le renforcement des capacités au Sénégal et en Afrique.",
  keywords: [
    "FANI IMPACT LAB",
    "Cabinet de conseil Sénégal",
    "Conseil stratégique Afrique",
    "Entrepreneuriat Sénégal",
    "Innovation Ziguinchor",
    "Fatoumata Niang",
    "Développement des écosystèmes",
    "Accompagnement PME Afrique",
    "Startup Act Sénégal",
    "Renforcement de capacités",
    "Politiques publiques entrepreneuriat",
    "Conseil stratégique Ziguinchor",
    "Développement territorial Casamance",
  ],
  authors: [{ name: "FANI IMPACT LAB", url: siteUrl }],
  creator: "FANI IMPACT LAB",
  publisher: "FANI IMPACT LAB",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: siteUrl,
    title: "FANI IMPACT LAB | Cabinet de Conseil Stratégique, Entrepreneuriat & Innovation",
    description:
      "Cabinet de conseil stratégique spécialisé dans l'entrepreneuriat, l'innovation et le développement des écosystèmes au Sénégal et en Afrique.",
    siteName: "FANI IMPACT LAB",
    images: [
      {
        url: "/logo/logo-fil.png",
        width: 1200,
        height: 630,
        alt: "Logo FANI IMPACT LAB - Conseil Stratégique & Innovation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "FANI IMPACT LAB | Conseil Stratégique & Innovation",
    description:
      "Cabinet de conseil stratégique spécialisé dans l'entrepreneuriat, l'innovation et le développement des écosystèmes au Sénégal et en Afrique.",
    images: ["/logo/logo-fil.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

/**
 * Balisage de Données Structurées (JSON-LD Schema.org / Organization).
 * Permet aux moteurs de recherche d'identifier officiellement FANI IMPACT LAB,
 * son siège à Ziguinchor (Sénégal), ses canaux de contact et sa fondatrice Fatoumata Niang.
 */
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "FANI IMPACT LAB",
  "url": siteUrl,
  "logo": `${siteUrl}/logo/FIL-LOGO.png`,
  "description":
    "Cabinet de conseil stratégique spécialisé dans l'entrepreneuriat, l'innovation et le développement des écosystèmes au Sénégal et en Afrique.",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Santhiaba",
    "addressLocality": "Ziguinchor",
    "addressCountry": "SN",
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+221 78 603 20 20",
    "contactType": "customer service",
    "email": "info@acceent.org",
    "availableLanguage": ["French"],
  },
  "founder": {
    "@type": "Person",
    "name": "Fatoumata Niang",
    "jobTitle": "Fondatrice & Directrice Générale",
  },
  "sameAs": [
    "https://www.linkedin.com/company/fani-impact-lab",
    "https://wa.me/221786032020",
    "https://www.facebook.com/faniimpactlab",
    "https://www.instagram.com/faniimpactlab",
    "https://www.youtube.com/@faniimpactlab",
    "https://www.tiktok.com/@faniimpactlab"
  ],
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${poppins.variable} h-full antialiased`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <HeaderNavbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

import type { NavLink, CompanyContact, SocialLink } from "@/types/navigation";

export type { NavLink, CompanyContact, SocialLink };

export const NAV_LINKS: NavLink[] = [
    { id: 1, label: "Accueil", href: "/" },
    { id: 2, label: "Nos offres", href: "/#services" },
    { id: 3, label: "À propos", href: "/a-propos" },
    { id: 4, label: "Nous contacter", href: "/contact" },
];

export const FOOTER_SERVICES_LINKS: NavLink[] = [
    { id: 1, label: "Advisory", href: "/#services" },
    { id: 2, label: "Écosystèmes", href: "/#services" },
    { id: 3, label: "Academy", href: "/#services" },
    { id: 4, label: "Research", href: "/#services" },
];

export const COMPANY_CONTACT: CompanyContact = {
    email: "info@acceent.org",
    phone: "+221 78 603 20 20",
    address: "Santhiaba, Ziguinchor — Sénégal",
    locationShort: "Santhiaba, Ziguinchor",
    country: "Sénégal",
};

export const SOCIAL_LINKS: SocialLink[] = [
    {
        id: "linkedin",
        name: "LinkedIn",
        href: "https://www.linkedin.com/company/fani-impact-lab",
        icon: "linkedin",
        description: "Rejoignez notre réseau professionnel sur LinkedIn",
    },
    {
        id: "whatsapp",
        name: "WhatsApp",
        href: "https://wa.me/221786032020",
        icon: "whatsapp",
        description: "Contactez-nous directement sur WhatsApp",
    },
    {
        id: "facebook",
        name: "Facebook",
        href: "https://www.facebook.com/faniimpactlab",
        icon: "facebook",
        description: "Suivez notre communauté sur Facebook",
    },
    {
        id: "instagram",
        name: "Instagram",
        href: "https://www.instagram.com/faniimpactlab",
        icon: "instagram",
        description: "Découvrez nos activités en images sur Instagram",
    },
    {
        id: "youtube",
        name: "YouTube",
        href: "https://www.youtube.com/@faniimpactlab",
        icon: "youtube",
        description: "Visionnez nos conférences & podcasts sur YouTube",
    },
    {
        id: "tiktok",
        name: "TikTok",
        href: "https://www.tiktok.com/@faniimpactlab",
        icon: "tiktok",
        description: "Regardez nos vidéos courtes d'impact sur TikTok",
    },
];


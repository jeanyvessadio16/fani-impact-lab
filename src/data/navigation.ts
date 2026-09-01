import type { NavLink, CompanyContact } from "@/types/navigation";

export type { NavLink, CompanyContact };

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
    phone: "+221 76 141 70 70",
    address: "Santhiaba, Ziguinchor — Sénégal",
    locationShort: "Santhiaba, Ziguinchor",
    country: "Sénégal",
};

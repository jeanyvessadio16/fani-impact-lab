/**
 * Représente un lien de navigation du site web.
 */
export type NavLink = {
    /** Identifiant unique du lien */
    id: number;
    /** Libellé affiché */
    label: string;
    /** Destination URL ou ancre */
    href: string;
};

/**
 * Structure des coordonnées de l'entreprise.
 */
export type CompanyContact = {
    /** Email de contact */
    email: string;
    /** Numéro de téléphone */
    phone: string;
    /** Adresse postale complète */
    address: string;
    /** Nom court de la ville/quartier */
    locationShort: string;
    /** Pays */
    country: string;
};

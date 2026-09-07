import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mentions Légales | FANI IMPACT LAB",
  description: "Mentions légales officielles du site de FANI IMPACT LAB (FIL).",
  robots: {
    index: false,
    follow: true,
  },
};

export default function MentionsLegalesPage() {
  return (
    <main className="relative flex-1 bg-white pt-36 pb-24 px-6 md:px-12 max-w-4xl mx-auto text-stone-900">
      <h1 className="text-3xl sm:text-4xl font-extrabold text-[#061224] tracking-tight mb-8">
        Mentions Légales
      </h1>

      <div className="flex flex-col gap-8 text-sm leading-relaxed text-stone-800">
        <section className="flex flex-col gap-2">
          <h2 className="text-xl font-bold text-stone-950">1. Éditeur du site</h2>
          <p>
            Le présent site web est édité par la structure <strong>FANI IMPACT LAB (FIL)</strong>.
          </p>
          <p>
            <strong>Siège social :</strong> Santhiaba, Ziguinchor — Casamance, Sénégal.<br />
            <strong>Téléphone / WhatsApp :</strong> +221 78 603 20 20<br />
            <strong>Email de contact :</strong> info@acceent.org<br />
            <strong>Fondatrice & Directrice Générale :</strong> Fatoumata Niang
          </p>
        </section>

        <section className="flex flex-col gap-2">
          <h2 className="text-xl font-bold text-stone-950">2. Hébergement du site</h2>
          <p>
            Le site web est hébergé sur la plateforme cloud de <strong>Vercel Inc.</strong><br />
            Adresse : 440 N Barranca Ave #4133, Covina, CA 91723, États-Unis.<br />
            Site web : <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" className="text-blue-900 underline">https://vercel.com</a>
          </p>
        </section>

        <section className="flex flex-col gap-2">
          <h2 className="text-xl font-bold text-stone-950">3. Propriété intellectuelle</h2>
          <p>
            L'ensemble des éléments figurant sur le site FANI IMPACT LAB (textes, logos, graphismes, iconographie, concepts, méthodologies comme "Le FIL") est protégé par les dispositions du Code de la propriété intellectuelle et les traités internationaux relatifs au droit d'auteur.
          </p>
          <p>
            Toute reproduction, représentation, modification, publication ou adaptation de tout ou partie des éléments du site est strictement interdite sans l'autorisation écrite préalable de FANI IMPACT LAB.
          </p>
        </section>

        <section className="flex flex-col gap-2">
          <h2 className="text-xl font-bold text-stone-950">4. Limites de responsabilité</h2>
          <p>
            FANI IMPACT LAB s'efforce de fournir sur son site des informations aussi précises que possible. Toutefois, les informations fournies le sont à titre indicatif et ne sauraient engager la responsabilité de l'éditeur en cas d'erreur ou d'omission.
          </p>
        </section>
      </div>
    </main>
  );
}

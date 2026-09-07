import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Politique de Confidentialité | FANI IMPACT LAB",
  description: "Politique de confidentialité et protection des données personnelles de FANI IMPACT LAB (FIL).",
  robots: {
    index: false,
    follow: true,
  },
};

export default function PolitiqueConfidentialitePage() {
  return (
    <main className="relative flex-1 bg-white pt-36 pb-24 px-6 md:px-12 max-w-4xl mx-auto text-stone-900">
      <h1 className="text-3xl sm:text-4xl font-extrabold text-[#061224] tracking-tight mb-8">
        Politique de Confidentialité
      </h1>

      <div className="flex flex-col gap-8 text-sm leading-relaxed text-stone-800">
        <section className="flex flex-col gap-2">
          <h2 className="text-xl font-bold text-stone-950">1. Collecte des données personnelles</h2>
          <p>
            Dans le cadre de l'utilisation du site <strong>FANI IMPACT LAB</strong>, nous pouvons être amenés à collecter des données personnelles via notre formulaire de contact, notamment : Nom, Prénom, Organisation, Fonction, Adresse email, Numéro de téléphone / WhatsApp et le détail du besoin exprimé.
          </p>
        </section>

        <section className="flex flex-col gap-2">
          <h2 className="text-xl font-bold text-stone-950">2. Utilisation des données</h2>
          <p>
            Les données collectées sont utilisées exclusivement par l'équipe de FANI IMPACT LAB pour :
          </p>
          <ul className="list-disc pl-5 flex flex-col gap-1">
            <li>Répondre aux demandes d'information et de conseil stratégique.</li>
            <li>Établir des propositions de partenariat ou d'accompagnement sur-mesure.</li>
            <li>Assurer le suivi administratif des échanges institutionnels.</li>
          </ul>
          <p className="mt-1">
            Aucune donnée personnelle n'est vendue, louée ou cédée à des tiers à des fins commerciales.
          </p>
        </section>

        <section className="flex flex-col gap-2">
          <h2 className="text-xl font-bold text-stone-950">3. Conservation des données</h2>
          <p>
            Les informations collectées sont conservées pendant la durée stricte nécessaire au traitement de la demande et au suivi de la relation professionnelle.
          </p>
        </section>

        <section className="flex flex-col gap-2">
          <h2 className="text-xl font-bold text-stone-950">4. Vos droits</h2>
          <p>
            Conformément à la réglementation sur la protection des données personnelles, vous disposez d'un droit d'accès, de rectification, de suppression et d'opposition sur les données vous concernant.
          </p>
          <p>
            Pour exercer ce droit, vous pouvez nous contacter directement par email à : <strong>info@acceent.org</strong> ou par WhatsApp au <strong>+221 78 603 20 20</strong>.
          </p>
        </section>
      </div>
    </main>
  );
}

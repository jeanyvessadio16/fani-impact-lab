import type { Metadata } from "next";
import ContactForm from "@/components/shared/ContactForm";
import { Sparkles } from "lucide-react";

export const metadata: Metadata = {
    title: "Nous contacter | FANI IMPACT LAB - Ziguinchor & Sénégal",
    description:
        "Contactez FANI IMPACT LAB pour vos projets d'entrepreneuriat, d'innovation, d'études stratégiques et de développement d'écosystèmes au Sénégal et en Afrique.",
    keywords: [
        "Contact FANI IMPACT LAB",
        "Conseil stratégique Ziguinchor",
        "Cabinet de conseil Sénégal contact",
        "Accompagnement projet Afrique",
        "Fatoumata Niang contact",
        "Santhiaba Ziguinchor",
    ],
    alternates: {
        canonical: "/contact",
    },
    openGraph: {
        title: "Nous contacter | FANI IMPACT LAB - Ziguinchor & Sénégal",
        description:
            "Une question, une idée ou un projet à fort impact ? Contactez l'équipe de FANI IMPACT LAB.",
        url: "https://faniimpactlab.com/contact",
        images: [
            {
                url: "/logo/FIL-LOGO.png",
                width: 1200,
                height: 630,
                alt: "FANI IMPACT LAB Contact",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Nous contacter | FANI IMPACT LAB",
        description:
            "Une question, une idée ou un projet à fort impact ? Contactez l'équipe de FANI IMPACT LAB.",
        images: ["/logo/FIL-LOGO.png"],
    },
};

export default function ContactPage() {
    return (
        <main className="relative flex-1 bg-stone-50/60 min-h-screen">
            {/* ============================================================ */}
            {/* HERO SECTION CONTACT                                         */}
            {/* ============================================================ */}
            <section className="relative min-h-[48vh] flex items-center justify-center overflow-hidden bg-[#061224] text-white border-b border-blue-950">
                {/* Arrière-plan avec Image claire et bien visible en position fixe (effet parallaxe) */}
                <div
                    className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat bg-fixed opacity-50"
                    style={{ backgroundImage: "url('/images/contact-hero.png')" }}
                />

                {/* Masque de lisibilité sombre uni aux reflets bleu marine */}
                <div className="absolute inset-0 z-0 bg-[#071326]/85" />

                <div className="relative z-10 w-full px-6 md:px-12 pt-32 pb-16 md:pt-40 md:pb-20 max-w-4xl mx-auto text-center flex flex-col items-center gap-4">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-900/60 border border-blue-700/60 backdrop-blur-md text-amber-300 text-xs sm:text-sm font-bold tracking-wide">
                        <Sparkles className="size-4 text-amber-400 animate-pulse" />
                        <span>Prendre contact</span>
                    </div>

                    <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
                        Discutons de votre <span className="text-amber-400">projet</span>
                    </h1>

                    <p className="text-base sm:text-lg text-stone-200 font-medium leading-relaxed max-w-xl">
                        Une question, une idée ou un projet à fort impact ? Notre équipe est à votre écoute pour vous accompagner.
                    </p>
                </div>
            </section>

            {/* ============================================================ */}
            {/* FORMULAIRE                                                    */}
            {/* ============================================================ */}
            <section className="relative z-20 -mt-10 pb-20 px-4 sm:px-6 md:px-12 flex justify-center">
                <ContactForm />
            </section>
        </main>
    );
}
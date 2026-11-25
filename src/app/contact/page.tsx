import type { Metadata } from "next";
import { Suspense } from "react";
import Image from "next/image";
import { Mail, Phone, MapPin, Clock, ArrowUpRight } from "lucide-react";
import ContactForm from "@/components/shared/ContactForm";
import { COMPANY_CONTACT } from "@/data/navigation";
import { SocialIcon } from "@/components/ui/SocialIcons";

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
        url: "/contact",
        images: [
            {
                url: "/logo/logo-fil.png",
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
        images: ["/logo/logo-fil.png"],
    },
};

export default function ContactPage() {
    return (
        <main id="main-content" className="relative flex-1 bg-stone-50/60 min-h-screen">
            {/* ============================================================ */}
            {/* HERO SECTION CONTACT                                         */}
            {/* ============================================================ */}
            <section className="relative min-h-[46vh] flex items-center justify-center overflow-hidden bg-[#061224] text-white border-b border-blue-950">
                <Image
                    src="/images/contact-hero.png"
                    alt=""
                    aria-hidden="true"
                    fill
                    preload
                    sizes="100vw"
                    className="object-cover object-bottom opacity-40"
                />

                {/* Masque de lisibilité sombre uni aux reflets bleu marine */}
                <div
                    aria-hidden="true"
                    className="absolute inset-0 z-0 bg-gradient-to-b from-[#061224]/92 via-[#061224]/85 to-[#061224]/95"
                />

                <div className="relative z-10 w-full px-6 md:px-12 pt-28 pb-16 md:pt-36 md:pb-20 max-w-4xl mx-auto text-center flex flex-col items-center gap-4">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-900/60 border border-blue-700/60 backdrop-blur-md text-amber-300 text-xs sm:text-sm font-bold tracking-wide">
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
            {/* CONTACTS DIRECTS & FORMULAIRE                                */}
            {/* ============================================================ */}
            <section className="relative z-20 -mt-10 pb-20 px-4 sm:px-6 md:px-12 max-w-6xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                    {/* Colonne latérale : Contacts directs */}
                    <aside className="lg:col-span-5 flex flex-col gap-5" aria-label="Coordonnées directes">
                        <div className="rounded-2xl border border-stone-200 bg-white shadow-xl p-6 sm:p-8 flex flex-col gap-6">
                            <div className="flex flex-col gap-2">
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-900 text-xs font-bold w-fit">
                                    <Clock className="size-3.5 text-emerald-700" />
                                    <span>Réponse sous 24 à 48h ouvrées</span>
                                </div>
                                <h2 className="text-xl sm:text-2xl font-extrabold text-[#061224] tracking-tight mt-1">
                                    Contacts directs
                                </h2>
                                <p className="text-sm text-stone-700 leading-relaxed">
                                    Privilégiez un échange immédiat sur WhatsApp ou par téléphone pour cadrer rapidement votre besoin.
                                </p>
                            </div>

                            <a
                                href="https://wa.me/221786032020"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full min-h-[48px] inline-flex items-center justify-center gap-2.5 px-5 py-3 rounded-xl bg-emerald-800 hover:bg-emerald-900 text-white text-sm font-bold shadow-xs transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-800 focus-visible:ring-offset-2"
                            >
                                <SocialIcon name="whatsapp" className="size-5" />
                                <span>Écrire sur WhatsApp</span>
                                <ArrowUpRight className="size-4" />
                            </a>

                            <ul className="flex flex-col gap-4 pt-3 border-t border-stone-100">
                                <li>
                                    <a
                                        href={`tel:${COMPANY_CONTACT.phone.replace(/\s+/g, "")}`}
                                        className="group flex items-start gap-3 text-sm text-stone-800 hover:text-blue-900 transition-colors rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-800 focus-visible:ring-offset-2"
                                    >
                                        <span className="inline-flex items-center justify-center size-10 rounded-xl bg-blue-50 border border-blue-200 text-blue-900 shrink-0 group-hover:bg-[#061224] group-hover:text-amber-400 transition-colors">
                                            <Phone className="size-4" />
                                        </span>
                                        <span className="flex flex-col">
                                            <span className="text-xs font-bold uppercase tracking-wider text-stone-600">
                                                Téléphone
                                            </span>
                                            <span className="font-semibold text-stone-950">{COMPANY_CONTACT.phone}</span>
                                        </span>
                                    </a>
                                </li>

                                <li>
                                    <a
                                        href={`mailto:${COMPANY_CONTACT.email}`}
                                        className="group flex items-start gap-3 text-sm text-stone-800 hover:text-blue-900 transition-colors rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-800 focus-visible:ring-offset-2"
                                    >
                                        <span className="inline-flex items-center justify-center size-10 rounded-xl bg-blue-50 border border-blue-200 text-blue-900 shrink-0 group-hover:bg-[#061224] group-hover:text-amber-400 transition-colors">
                                            <Mail className="size-4" />
                                        </span>
                                        <span className="flex flex-col">
                                            <span className="text-xs font-bold uppercase tracking-wider text-stone-600">
                                                Email professionnel
                                            </span>
                                            <span className="font-semibold text-stone-950 break-all">{COMPANY_CONTACT.email}</span>
                                        </span>
                                    </a>
                                </li>

                                <li className="flex items-start gap-3 text-sm text-stone-800">
                                    <span className="inline-flex items-center justify-center size-10 rounded-xl bg-blue-50 border border-blue-200 text-blue-900 shrink-0">
                                        <MapPin className="size-4" />
                                    </span>
                                    <span className="flex flex-col">
                                        <span className="text-xs font-bold uppercase tracking-wider text-stone-600">
                                            Siège & Bureau Régional
                                        </span>
                                        <span className="font-semibold text-stone-950">
                                            Santhiaba, Ziguinchor — Casamance, Sénégal
                                        </span>
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </aside>

                    {/* Colonne principale : Formulaire */}
                    <div className="lg:col-span-7 w-full">
                        <Suspense
                            fallback={
                                <div className="h-[540px] w-full rounded-2xl bg-white border border-stone-200 shadow-xl animate-pulse" />
                            }
                        >
                            <ContactForm />
                        </Suspense>
                    </div>
                </div>
            </section>
        </main>
    );
}
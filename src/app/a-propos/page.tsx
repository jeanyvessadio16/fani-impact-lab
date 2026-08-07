import Image from "next/image";
import Link from "next/link";
import { Sparkles, ArrowRight, Quote } from "lucide-react";
import { WHAT_WE_DO, CLIENTS, FOUNDER_INFO } from "@/data/about";
import ConvictionSection from "@/components/shared/ConvictionSection";
import MethodSection from "@/components/shared/MethodSection";
import WhyChooseUsSection from "@/components/shared/WhyChooseUsSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "À propos – FANI IMPACT LAB",
    description:
        "Découvrez qui nous sommes, notre vision, ce que nous faisons et la fondatrice de FANI IMPACT LAB.",
};

/* ------------------------------------------------------------------ */
/*  PAGE                                                              */
/* ------------------------------------------------------------------ */

export default function APropos() {
    return (
        <main className="relative flex-1 bg-white">
            {/* ============================================================ */}
            {/* HERO SECTION                                                  */}
            {/* ============================================================ */}
            <section className="relative min-h-[75vh] flex items-center overflow-hidden bg-stone-950 text-white border-b border-stone-800">
                {/* Arrière-plan avec Image claire et bien visible */}
                <div
                    className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-60 scale-105"
                    style={{ backgroundImage: "url('/images/about-hero.png')" }}
                />

                {/* Overlays de Fondu pour Lisibilité Maximale du Texte et de l'Image */}
                <div className="absolute inset-0 z-0 bg-gradient-to-r from-stone-950/90 via-stone-950/70 to-stone-950/40" />
                <div className="absolute inset-0 z-0 bg-gradient-to-t from-stone-950/80 via-transparent to-stone-950/50" />

                {/* Content */}
                <div className="relative z-10 w-full px-6 md:px-12 pt-36 pb-20 md:pt-40 md:pb-24 max-w-7xl mx-auto flex flex-col gap-7">
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/20 border border-orange-400/30 backdrop-blur-md text-orange-300 text-xs sm:text-sm font-semibold tracking-wide w-fit">
                        <Sparkles className="size-4 text-orange-400 animate-pulse" />
                        <span>Qui sommes-nous ?</span>
                    </div>

                    {/* Heading */}
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1] max-w-3xl">
                        Un cabinet{" "}
                        <span className="text-orange-400">
                            de conseil
                        </span>{" "}
                        au service de l&apos;Afrique
                    </h1>

                    {/* Description */}
                    <p className="text-lg sm:text-xl text-stone-200 font-normal leading-relaxed max-w-2xl">
                        FANI IMPACT LAB est un cabinet de conseil stratégique spécialisé dans l'entrepreneuriat, l'innovation et le développement des écosystèmes.
                    </p>

                    {/* CTA */}
                    <div className="flex flex-wrap items-center gap-4 pt-2">
                        <Link
                            href="#conviction"
                            className="inline-flex items-center gap-2.5 h-12 px-7 text-sm font-semibold bg-orange-600 hover:bg-orange-700 text-white rounded-xl shadow-md transition-all hover:scale-[1.02] active:scale-[0.98]"
                        >
                            Notre vision
                            <ArrowRight className="size-4" />
                        </Link>
                        <Link
                            href="#fondatrice"
                            className="inline-flex items-center gap-2 h-12 px-6 text-sm font-medium border border-white/30 bg-white/10 hover:bg-white/20 text-white rounded-xl backdrop-blur-md transition-all"
                        >
                            La fondatrice
                        </Link>
                    </div>
                </div>
            </section>

            {/* ============================================================ */}
            {/* NOTRE CONVICTION & VISION                                    */}
            {/* ============================================================ */}
            <ConvictionSection />

            {/* ============================================================ */}
            {/* NOTRE MÉTHODE (LE FIL)                                       */}
            {/* ============================================================ */}
            <MethodSection />

            {/* ============================================================ */}
            {/* POURQUOI NOUS CHOISIR / BILAN D'IMPACT                        */}
            {/* ============================================================ */}
            <WhyChooseUsSection />



            {/* ============================================================ */}
            {/* CE QUE NOUS FAISONS                                           */}
            {/* ============================================================ */}
            <section
                id="ce-que-nous-faisons"
                className="relative py-24 bg-stone-50/70 border-b border-stone-200/80 overflow-hidden"
            >
                <div className="relative z-10 w-full px-6 md:px-12 max-w-7xl mx-auto">
                    {/* Header */}
                    <div className="mb-16 flex flex-col gap-4 max-w-2xl">
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-orange-100/80 border border-orange-200 text-orange-800 text-xs font-semibold tracking-widest uppercase w-fit">
                            <Sparkles className="size-3.5 text-orange-600" />
                            Nos domaines d&apos;intervention
                        </div>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-stone-950 leading-tight">
                            Ce que nous{" "}
                            <span className="text-orange-700">
                                faisons
                            </span>
                        </h2>
                        <p className="text-base sm:text-lg text-stone-700 leading-relaxed">
                            Nous accompagnons entrepreneurs, institutions, entreprises, ONG et partenaires techniques dans la conception de solution à fort impact.
                        </p>
                    </div>

                    {/* Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                        {WHAT_WE_DO.map((item) => {
                            const Icon = item.icon;
                            return (
                                <div
                                    key={item.id}
                                    className="group relative flex flex-col gap-4 p-6 rounded-2xl border border-stone-200/90 bg-white shadow-xs transition-all duration-200 hover:border-orange-300 hover:shadow-md hover:-translate-y-1"
                                >
                                    {/* Icon + numéro */}
                                    <div className="flex items-center justify-between">
                                        <div className="inline-flex items-center justify-center size-12 rounded-xl bg-orange-50 border border-orange-200/80 text-orange-700 transition-colors group-hover:bg-orange-100/80 shrink-0">
                                            <Icon className="size-6" />
                                        </div>
                                        <span className="text-xs font-mono text-stone-600 tabular-nums select-none">
                                            0{item.id}
                                        </span>
                                    </div>

                                    {/* Titre & description */}
                                    <div className="flex flex-col gap-2">
                                        <h3 className="text-lg font-bold text-stone-900 tracking-tight leading-snug">
                                            {item.title}
                                        </h3>
                                        <div className="h-0.5 w-8 rounded-full bg-orange-600 transition-all duration-300 group-hover:w-14" />
                                        <p className="text-sm text-stone-700 leading-relaxed mt-1">
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* ============================================================ */}
            {/* NOS CLIENTS                                                   */}
            {/* ============================================================ */}
            <section
                id="clients"
                className="relative py-24 overflow-hidden bg-white border-b border-stone-200/80"
            >
                <div className="relative z-10 w-full px-6 md:px-12 max-w-7xl mx-auto flex flex-col gap-12">
                    {/* Top – Header & Description */}
                    <div className="flex flex-col gap-4 max-w-3xl">
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-orange-100/80 border border-orange-200 text-orange-800 text-xs font-semibold tracking-widest uppercase w-fit">
                            <Sparkles className="size-3.5 text-orange-600" />
                            Ceux qui nous font confiance
                        </div>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-stone-950 leading-tight">
                            Nos{" "}
                            <span className="text-orange-700">
                                clients
                            </span>
                        </h2>
                        <p className="text-base sm:text-lg text-stone-700 leading-relaxed">
                            Nous intervenons auprès d&apos;une grande diversité d&apos;acteurs,
                            réunis par une même ambition : créer un impact durable et
                            mesurable sur leurs territoires et leurs secteurs.
                        </p>
                    </div>

                    {/* Bottom – Client cards grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {CLIENTS.map((client) => {
                            const Icon = client.icon;
                            return (
                                <div
                                    key={client.id}
                                    className="group flex items-center justify-between px-5 py-4 rounded-2xl border border-stone-200/90 bg-white shadow-2xs transition-all duration-200 hover:border-orange-300 hover:shadow-xs hover:-translate-y-0.5"
                                >
                                    <div className="flex items-center gap-3.5">
                                        <div className="inline-flex items-center justify-center size-9 rounded-xl bg-orange-50 border border-orange-200/80 text-orange-700 transition-colors group-hover:bg-orange-100/80 shrink-0">
                                            <Icon className="size-4.5" />
                                        </div>
                                        <span className="text-sm font-semibold text-stone-800 group-hover:text-orange-700 transition-colors">
                                            {client.name}
                                        </span>
                                    </div>
                                    <div className="h-2 w-2 rounded-full bg-orange-500/60 group-hover:bg-orange-600 transition-colors" />
                                </div>
                            );
                        })}
                    </div>

                    {/* Quote block */}
                    <div className="mt-4 p-8 rounded-2xl bg-orange-50/70 border-l-4 border-orange-600 shadow-2xs flex flex-col sm:flex-row gap-5 items-start">
                        <Quote className="size-8 text-orange-600 shrink-0 mt-1" />
                        <blockquote className="text-base sm:text-lg text-stone-800 italic leading-relaxed">
                            Les plus grands défis de l'Afrique ne seront pas résolus par une seule organisation, <span className="text-orange-800 font-semibold not-italic">mais seront résolus par des écosystèmes</span>.
                        </blockquote>
                    </div>
                </div>
            </section>

            {/* ============================================================ */}
            {/* FONDATRICE DE FIL                                             */}
            {/* ============================================================ */}
            <section
                id="fondatrice"
                className="relative py-24 bg-stone-50/70 border-b border-stone-200/80 overflow-hidden"
            >
                <div className="relative z-10 w-full px-6 md:px-12 max-w-7xl mx-auto">
                    {/* Header */}
                    <div className="mb-16 flex flex-col gap-4 max-w-xl">
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-orange-100/80 border border-orange-200 text-orange-800 text-xs font-semibold tracking-widest uppercase w-fit">
                            <Sparkles className="size-3.5 text-orange-600" />
                            La personne derrière FIL
                        </div>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-stone-950 leading-tight">
                            La{" "}
                            <span className="text-orange-700">
                                fondatrice
                            </span>
                        </h2>
                    </div>

                    {/* Profile card */}
                    <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 items-start">
                        {/* Photo */}
                        <div className="lg:col-span-2">
                            <div className="relative group max-w-sm mx-auto lg:mx-0">
                                <div className="relative overflow-hidden rounded-3xl border border-stone-200 bg-white shadow-md aspect-[4/5]">
                                    <Image
                                        src={FOUNDER_INFO.image}
                                        alt={`Fondatrice de FANI IMPACT LAB - ${FOUNDER_INFO.name}`}
                                        fill
                                        className="object-cover object-top transition-transform duration-500 group-hover:scale-103"
                                        sizes="(max-width: 1024px) 80vw, 40vw"
                                        priority
                                    />
                                </div>

                                {/* Name badge overlaid at bottom */}
                                <div className="absolute bottom-4 left-4 right-4">
                                    <div className="px-4 py-2.5 rounded-xl bg-white/95 backdrop-blur-md border border-stone-200 shadow-sm">
                                        <p className="text-sm font-bold text-stone-900">
                                            {FOUNDER_INFO.name}
                                        </p>
                                        <p className="text-xs text-orange-700 font-semibold mt-0.5">
                                            {FOUNDER_INFO.role}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Bio */}
                        <div className="lg:col-span-3 flex flex-col gap-6 lg:pt-2">
                            <div className="flex flex-col gap-2">
                                <h3 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
                                    {FOUNDER_INFO.name}
                                </h3>
                                <p className="text-orange-700 font-semibold text-sm tracking-wide">
                                    {FOUNDER_INFO.title}
                                </p>
                                <div className="h-0.5 w-12 rounded-full bg-orange-600 mt-1" />
                            </div>

                            <div className="flex flex-col gap-4 text-stone-700 text-base leading-relaxed">
                                {FOUNDER_INFO.bio.map((paragraph, index) => (
                                    <p key={index}>{paragraph}</p>
                                ))}
                            </div>

                            {/* Tags */}
                            <div className="flex flex-wrap gap-2 mt-2">
                                {FOUNDER_INFO.skills.map((tag) => (
                                    <span
                                        key={tag}
                                        className="px-3 py-1 text-xs font-semibold rounded-full bg-orange-100/80 border border-orange-200 text-orange-800"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            {/* CTA */}
                            <div className="flex flex-wrap gap-4 mt-4 pt-6 border-t border-stone-200/80">
                                <Link
                                    href="/contact"
                                    className="inline-flex items-center gap-2.5 h-12 px-7 text-sm font-semibold bg-orange-700 hover:bg-orange-800 text-white rounded-xl shadow-xs transition-all hover:scale-[1.02] active:scale-[0.98]"
                                >
                                    Nous contacter
                                    <ArrowRight className="size-4" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ============================================================ */}
            {/* CTA FINAL                                                     */}
            {/* ============================================================ */}
            <section className="relative py-20 bg-white overflow-hidden">
                <div className="relative z-10 w-full px-6 md:px-12 max-w-4xl mx-auto text-center flex flex-col items-center gap-7">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-100/80 border border-orange-200 text-orange-800 text-xs font-semibold tracking-wide">
                        <Sparkles className="size-3.5 text-orange-600 animate-pulse" />
                        Démarrons ensemble
                    </div>

                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-stone-950 leading-tight max-w-2xl">
                        Prêt à transformer votre{" "}
                        <span className="text-orange-700">
                            vision en impact ?
                        </span>
                    </h2>

                    <p className="text-base sm:text-lg text-stone-700 leading-relaxed max-w-xl">
                        Partagez-nous votre projet. Notre équipe vous accompagnera avec les
                        meilleures expertises pour en faire une réalité.
                    </p>

                    <Link
                        href="/contact"
                        className="inline-flex items-center gap-2.5 h-13 px-9 text-base font-semibold bg-orange-700 hover:bg-orange-800 text-white rounded-xl shadow-sm transition-all hover:scale-[1.02] active:scale-[0.98]"
                    >
                        Prendre rendez-vous
                        <ArrowRight className="size-5" />
                    </Link>
                </div>
            </section>
        </main>
    );
}
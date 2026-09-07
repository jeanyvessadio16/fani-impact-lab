import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import ConvictionSection from "@/components/shared/ConvictionSection";
import MethodSection from "@/components/shared/MethodSection";
import FounderSection from "@/components/shared/FounderSection";
import TargetAudienceSection from "@/components/shared/TargetAudienceSection";
import { FadeIn } from "@/components/ui/animated";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "À propos | Vision, Agilité & Fondatrice Fatoumata Niang",
  description:
    "Découvrez l'histoire, la vision, la méthode 'Le FIL' et la fondatrice de FANI IMPACT LAB, Fatoumata Niang. Un cabinet dédié à l'entrepreneuriat et au développement des écosystèmes au Sénégal et en Afrique.",
  keywords: [
    "À propos FANI IMPACT LAB",
    "Fatoumata Niang fondatrice",
    "Vision entrepreneuriat Afrique",
    "Méthode Le FIL",
    "Fédérer Innover Libérer l'impact",
    "Écosystèmes entrepreneuriaux Sénégal",
    "Startup Act Sénégal contributeur",
    "Conseil stratégique Casamance Ziguinchor",
  ],
  alternates: {
    canonical: "/a-propos",
  },
  openGraph: {
    title: "À propos de FANI IMPACT LAB | Vision & Fondatrice Fatoumata Niang",
    description:
      "Cabinet de conseil stratégique engagé dans le développement des écosystèmes et l'accompagnement d'impact au Sénégal et en Afrique.",
    url: "https://fanimpactlab.vercel.app/a-propos",
    images: [
      {
        url: "/images/fondatrice.jpeg",
        width: 800,
        height: 1000,
        alt: "Fatoumata Niang - Fondatrice FANI IMPACT LAB",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "À propos de FANI IMPACT LAB | Vision & Fondatrice Fatoumata Niang",
    description:
      "Cabinet de conseil stratégique engagé dans le développement des écosystèmes et l'accompagnement d'impact au Sénégal et en Afrique.",
    images: ["/images/fondatrice.jpeg"],
  },
};

export default function APropos() {
    return (
        <main className="relative flex-1 bg-white">
            {/* HERO SECTION */}
            <section className="relative min-h-[60vh] flex flex-col justify-center items-center overflow-hidden bg-[#061224] text-white border-b border-blue-950">
                <div
                    className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat bg-fixed opacity-40"
                    style={{ backgroundImage: "url('/images/about-hero.png')" }}
                />
                <div className="absolute inset-0 z-0 bg-[#061224]/85" />

                <div className="relative z-10 w-full px-6 md:px-12 pt-32 pb-20 max-w-4xl mx-auto flex flex-col justify-center items-center gap-5 text-center">
                    <FadeIn direction="down" delay={0.1}>
                        <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-900/60 border border-blue-700/60 backdrop-blur-md text-amber-300 text-xs sm:text-sm font-bold tracking-wide">
                            <span>Qui sommes-nous ?</span>
                        </div>
                    </FadeIn>

                    <FadeIn direction="up" delay={0.2}>
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1] max-w-3xl">
                            Un cabinet de <span className="text-amber-400">conseil stratégique</span> au service de l'Afrique
                        </h1>
                    </FadeIn>

                    <FadeIn direction="up" delay={0.3}>
                        <p className="text-lg sm:text-xl text-stone-200 font-medium leading-relaxed max-w-2xl">
                            FANI IMPACT LAB est une structure nouvelle portée par une ambition claire : structurer les écosystèmes et accompagner la transformation des organisations en Afrique avec rigueur et proximité.
                        </p>
                    </FadeIn>
                </div>
            </section>

            {/* NOTRE CONVICTION & VISION */}
            <ConvictionSection />

            {/* NOTRE MÉTHODE (LE FIL) */}
            <MethodSection />

            {/* POUR QUOI ET POUR QUI ? */}
            <TargetAudienceSection />

            {/* FONDATRICE DE FIL */}
            <FounderSection />

            {/* CTA FINAL */}
            <section className="relative py-20 bg-[#061224] text-white overflow-hidden">
                <FadeIn direction="up" className="relative z-10 w-full px-6 md:px-12 max-w-4xl mx-auto text-center flex flex-col items-center gap-7">
                    <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-900/60 border border-blue-700/60 text-amber-300 text-xs font-bold tracking-wide">
                        <span>Rejoignez l'Aventure</span>
                    </div>

                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight max-w-2xl">
                        Construisons ensemble vos projets à <span className="text-amber-400">fort impact</span>
                    </h2>

                    <p className="text-base sm:text-lg text-stone-200 font-medium leading-relaxed max-w-xl">
                        Discutons de vos enjeux et modélisons la meilleure feuille de route stratégique pour vos équipes.
                    </p>

                    <Link
                        href="/contact"
                        className="inline-flex items-center gap-2.5 h-13 px-9 text-base font-semibold bg-amber-600 hover:bg-amber-700 text-white rounded-xl shadow-md transition-all hover:scale-[1.02]"
                    >
                        <span>Engager le dialogue</span>
                        <ArrowRight className="size-5" />
                    </Link>
                </FadeIn>
            </section>
        </main>
    );
}
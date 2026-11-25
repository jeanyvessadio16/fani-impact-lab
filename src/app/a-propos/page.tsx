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
        url: "/images/directrice-acceent.jpeg",
        width: 694,
        height: 1008,
        alt: "Fatoumata Niang - Fondatrice FANI IMPACT LAB",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "À propos de FANI IMPACT LAB | Vision & Fondatrice Fatoumata Niang",
    description:
      "Cabinet de conseil stratégique engagé dans le développement des écosystèmes et l'accompagnement d'impact au Sénégal et en Afrique.",
    images: ["/images/directrice-acceent.jpeg"],
  },
};

export default function APropos() {
  return (
    <main id="main-content" className="relative flex-1 bg-white">
      {/* HERO SECTION */}
      <section className="relative min-h-[55vh] flex flex-col justify-center items-center overflow-hidden bg-[#061224] text-white border-b border-blue-950">
        <Image
          src="/images/about-hero.png"
          alt=""
          aria-hidden="true"
          fill
          preload
          sizes="100vw"
          className="object-cover object-center opacity-45"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 z-0 bg-gradient-to-b from-[#061224]/80 via-[#061224]/85 to-[#061224]/95"
        />

        <div className="relative z-10 w-full px-6 md:px-12 pt-28 pb-16 md:pt-36 md:pb-20 max-w-4xl mx-auto text-center flex flex-col items-center gap-5">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-900/60 border border-blue-700/60 backdrop-blur-md text-amber-300 text-xs sm:text-sm font-bold tracking-wide">
            <span>Qui sommes-nous ?</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1] max-w-3xl">
            Un cabinet de <span className="text-amber-400">conseil stratégique</span> au service de l&apos;Afrique
          </h1>

          <p className="text-lg sm:text-xl text-stone-200 font-medium leading-relaxed max-w-2xl">
            FANI IMPACT LAB est une structure portée par une ambition claire : structurer les écosystèmes et accompagner la transformation des organisations en Afrique avec rigueur et proximité.
          </p>
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
            <span>Rejoignez l&apos;Aventure</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight max-w-2xl">
            Construisons ensemble vos projets à <span className="text-amber-400">fort impact</span>
          </h2>

          <p className="text-base sm:text-lg text-stone-200 font-medium leading-relaxed max-w-xl">
            Discutons de vos enjeux et modélisons la meilleure feuille de route stratégique pour vos équipes.
          </p>

          <Link
            href="/contact"
            className="inline-flex items-center gap-2.5 h-12 min-h-[48px] px-9 text-base font-bold bg-amber-400 hover:bg-amber-300 text-[#061224] rounded-xl shadow-md transition-all hover:scale-[1.02] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-300 focus-visible:ring-offset-2 focus-visible:ring-offset-[#061224]"
          >
            <span>Engager le dialogue</span>
            <ArrowRight className="size-5" />
          </Link>
        </FadeIn>
      </section>
    </main>
  );
}
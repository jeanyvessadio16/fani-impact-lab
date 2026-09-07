import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { SocialIcon } from "@/components/ui/SocialIcons";
import { FOUNDER_INFO } from "@/data/about";
import { FadeIn, ScaleIn } from "@/components/ui/animated";


export default function FounderSection() {
  return (
    <section id="fondatrice" className="relative py-24 bg-stone-50/80 border-b border-stone-200 overflow-hidden">
      <div className="relative z-10 w-full px-6 md:px-12 max-w-7xl mx-auto flex flex-col gap-12">
        {/* Header */}
        <FadeIn direction="up" className="flex flex-col gap-3.5 max-w-2xl">
          <div className="inline-flex items-center px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-950 text-xs font-bold tracking-widest uppercase w-fit">
            <span>L'Expertise qui Nous Porte</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-stone-950 leading-tight">
            La <span className="text-blue-900">Fondatrice</span>
          </h2>
          <p className="text-base sm:text-lg text-stone-800 font-medium leading-relaxed">
            Si FANI IMPACT LAB est une structure jeune, l'expertise stratégique et l'engagement écosystémique qui l'animent reposent sur un parcours éprouvé.
          </p>
        </FadeIn>

        {/* Layout Profil */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Photo */}
          <ScaleIn delay={0.1} className="lg:col-span-5">
            <div className="relative group max-w-md mx-auto lg:mx-0">
              <div className="relative overflow-hidden rounded-3xl border border-stone-200 bg-white shadow-xl aspect-[4/5]">
                <Image
                  src={FOUNDER_INFO.image}
                  alt={`Fondatrice de FANI IMPACT LAB - ${FOUNDER_INFO.name}`}
                  fill
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-103"
                  sizes="(max-width: 1024px) 90vw, 40vw"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#061224]/80 via-transparent to-transparent opacity-80" />
              </div>

              {/* Monogramme / Card Overlay */}
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-white/95 backdrop-blur-md border border-stone-200 shadow-md">
                <p className="text-base font-extrabold text-stone-950">
                  {FOUNDER_INFO.name}
                </p>
                <p className="text-xs text-blue-900 font-bold mt-0.5">
                  {FOUNDER_INFO.role}
                </p>
              </div>
            </div>
          </ScaleIn>

          {/* Bio & parcours */}
          <FadeIn direction="left" delay={0.2} className="lg:col-span-7 flex flex-col gap-6">
            <div className="flex flex-col gap-1">
              <h3 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight">
                {FOUNDER_INFO.name}
              </h3>
              <p className="text-blue-900 font-bold text-sm tracking-wide">
                {FOUNDER_INFO.title}
              </p>
              <div className="h-0.5 w-12 rounded-full bg-amber-500 mt-2" />
            </div>

            <div className="flex flex-col gap-4 text-stone-800 text-base leading-relaxed font-normal">
              {FOUNDER_INFO.bio.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            {/* Compétences & Engagements */}
            <div className="flex flex-col gap-2.5 mt-2">
              <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-stone-600">
                Engagements & Réalisations Clés
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {FOUNDER_INFO.skills.map((skill, index) => (
                  <div key={index} className="flex items-start gap-2 text-xs font-semibold text-stone-800 bg-white p-2.5 rounded-xl border border-stone-200">
                    <CheckCircle2 className="size-4 text-blue-900 shrink-0 mt-0.5" />
                    <span>{skill}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-stone-200">
              {FOUNDER_INFO.linkedinUrl && (
                <a
                  href={FOUNDER_INFO.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#0A66C2] hover:bg-[#084e96] text-white text-xs sm:text-sm font-semibold shadow-xs transition-all"
                >
                  <SocialIcon name="linkedin" className="size-4" />
                  <span>Profil LinkedIn</span>
                </a>
              )}


              <Link
                href="/a-propos#fondatrice"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#061224] hover:bg-[#0B1E3D] text-white text-xs sm:text-sm font-semibold shadow-xs transition-all"
              >
                <span>Découvrir son parcours</span>
                <ArrowRight className="size-4 text-amber-400" />
              </Link>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

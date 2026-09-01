import React from "react";
import { Sparkles } from "lucide-react";
import { OUR_METHOD, type MethodData } from "@/data/about";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/animated";

interface MethodSectionProps {
  data?: MethodData;
  className?: string;
}

export default function MethodSection({
  data = OUR_METHOD,
  className = "",
}: MethodSectionProps) {
  return (
    <section
      id="notre-methode"
      className={`relative py-14 sm:py-18 bg-[#071326] text-white border-y border-blue-950 overflow-hidden ${className}`}
    >
      <div className="relative z-10 w-full px-6 md:px-12 max-w-6xl mx-auto flex flex-col gap-8 sm:gap-10">
        {/* En-tête compacte */}
        <FadeIn direction="up" className="flex flex-col items-start gap-2.5">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/15 border border-amber-400/30 text-amber-300 text-xs font-bold tracking-widest uppercase">
            <Sparkles className="size-3.5 text-amber-400" />
            <span>{data.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight">
            {data.title}
          </h2>
        </FadeIn>

        {/* Schéma graphique compact: F -> I -> L */}
        <div className="relative w-full max-w-3xl mx-auto my-2 sm:my-4">
          {/* Ligne horizontale de connexion entre les cercles (visible sm+) */}
          <div className="hidden sm:block absolute top-[36px] sm:top-[40px] lg:top-[44px] left-[18%] right-[18%] h-[2px] bg-amber-400/70 z-0" />

          {/* 3 Étapes F I L */}
          <StaggerContainer staggerChildren={0.2} className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-4 relative z-10">
            {data.steps.map((step) => (
              <StaggerItem key={step.id}>
                <div className="group flex flex-col items-center text-center transition-transform duration-200">
                  {/* Cercle avec la lettre */}
                  <div className="relative mb-3 flex items-center justify-center">
                    <div className="size-18 sm:size-20 lg:size-22 rounded-full border-2 border-amber-400/90 bg-stone-900 flex items-center justify-center shadow-md shadow-stone-950 transition-all duration-200 group-hover:scale-105 group-hover:border-amber-300">
                      <span className="text-2xl sm:text-3xl font-black text-amber-400 tracking-tight group-hover:text-amber-300">
                        {step.letter}
                      </span>
                    </div>
                  </div>

                  {/* Libellé de l'étape */}
                  <h3 className="text-base sm:text-lg font-bold text-stone-100 tracking-tight leading-snug">
                    {step.title}
                  </h3>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>

        {/* Citation / Caption compacte */}
        <FadeIn direction="up" delay={0.3} className="max-w-2xl mx-auto text-center">
          <p className="text-stone-300 italic text-sm sm:text-base font-medium leading-relaxed">
            &ldquo;{data.caption}&rdquo;
          </p>
        </FadeIn>
      </div>
    </section>
  );
}


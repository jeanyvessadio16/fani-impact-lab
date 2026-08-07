import React from "react";
import { Sparkles } from "lucide-react";
import { OUR_METHOD, type MethodData } from "@/data/about";

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
      className={`relative py-10 sm:py-14 bg-[#0b172a] text-white border-y border-stone-800/80 overflow-hidden bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-500/10 via-[#0b172a] to-[#0b172a] ${className}`}
    >
      <div className="relative z-10 w-full px-6 md:px-12 max-w-6xl mx-auto flex flex-col gap-6 sm:gap-8">
        {/* En-tête compacte */}
        <div className="flex flex-col items-start gap-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/15 border border-amber-400/30 text-amber-300 text-xs font-semibold tracking-widest uppercase">
            <Sparkles className="size-3.5 text-amber-400" />
            <span>{data.badge}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white leading-tight">
            {data.title}
          </h2>
        </div>

        {/* Schéma graphique compact: F -> I -> L */}
        <div className="relative w-full max-w-3xl mx-auto my-2 sm:my-4">
          {/* Ligne horizontale de connexion entre les cercles (visible sm+) */}
          <div className="hidden sm:block absolute top-[32px] sm:top-[36px] lg:top-[40px] left-[18%] right-[18%] h-[2px] bg-amber-400/80 z-0" />

          {/* 3 Étapes F I L */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-4 relative z-10">
            {data.steps.map((step) => (
              <div
                key={step.id}
                className="group flex flex-col items-center text-center transition-transform duration-200"
              >
                {/* Cercle avec la lettre */}
                <div className="relative mb-3 flex items-center justify-center">
                  <div className="size-16 sm:size-18 lg:size-20 rounded-full border-2 border-amber-400 bg-[#0b172a] flex items-center justify-center shadow-md shadow-amber-500/10 transition-all duration-200 group-hover:scale-105 group-hover:border-amber-300">
                    <span className="text-2xl sm:text-3xl font-extrabold text-amber-400 tracking-tight group-hover:text-amber-300">
                      {step.letter}
                    </span>
                  </div>
                </div>

                {/* Libellé de l'étape */}
                <h3 className="text-base sm:text-lg font-bold text-white tracking-tight leading-snug">
                  {step.title}
                </h3>
              </div>
            ))}
          </div>
        </div>

        {/* Citation / Caption compacte */}
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-stone-300 italic text-xs sm:text-sm font-normal leading-relaxed">
            &ldquo;{data.caption}&rdquo;
          </p>
        </div>
      </div>
    </section>
  );
}

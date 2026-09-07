import React from "react";
import { ArrowRight } from "lucide-react";
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
      className={`relative py-20 bg-[#071326] text-white border-y border-blue-950 overflow-hidden ${className}`}
    >
      <div className="relative z-10 w-full px-6 md:px-12 max-w-7xl mx-auto flex flex-col gap-12">
        {/* En-tête de section */}
        <FadeIn direction="up" className="flex flex-col items-center text-center gap-3.5 max-w-2xl mx-auto">
          <div className="inline-flex items-center px-3.5 py-1.5 rounded-full bg-amber-500/15 border border-amber-400/30 text-amber-300 text-xs font-bold tracking-widest uppercase">
            <span>{data.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
            La Méthode <span className="text-amber-400">Le FIL</span>
          </h2>
          <p className="text-stone-300 text-sm sm:text-base font-medium leading-relaxed">
            {data.caption}
          </p>
        </FadeIn>

        {/* Grille des 3 Piliers F - I - L */}
        <StaggerContainer staggerChildren={0.15} className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
          {data.steps.map((step, idx) => (
            <StaggerItem key={step.id}>
              <div className="group relative flex flex-col h-full p-7 rounded-2xl bg-[#0B1E3D] border border-blue-900/80 hover:border-amber-400/60 shadow-lg transition-all duration-300 hover:-translate-y-1">
                {/* Header carte : Lettre Monogramme */}
                <div className="flex items-center justify-between mb-6">
                  <div className="size-16 rounded-2xl bg-amber-500/20 border border-amber-400/40 text-amber-400 flex items-center justify-center font-black text-3xl shadow-inner group-hover:scale-105 group-hover:bg-amber-500 group-hover:text-[#061224] transition-all duration-300">
                    {step.letter}
                  </div>
                  <span className="text-xs font-mono text-stone-400 font-bold uppercase tracking-widest">
                    Étape 0{idx + 1}
                  </span>
                </div>

                {/* Titre & Sous-titre */}
                <h3 className="text-2xl font-extrabold text-white tracking-tight mb-1">
                  {step.title}
                </h3>
                <p className="text-xs font-semibold text-amber-300 uppercase tracking-wider mb-4">
                  {step.subtitle}
                </p>
                <div className="h-0.5 w-10 bg-amber-400/80 group-hover:w-16 transition-all duration-300 mb-4" />

                {/* Description */}
                <p className="text-stone-300 text-sm leading-relaxed font-normal flex-1">
                  {step.description}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}



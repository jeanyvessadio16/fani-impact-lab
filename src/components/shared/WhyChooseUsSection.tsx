import React from "react";
import { Sparkles, CheckCircle2, Check } from "lucide-react";
import { WHY_CHOOSE_US, type WhyChooseUsData } from "@/data/about";

interface WhyChooseUsSectionProps {
  data?: WhyChooseUsData;
  className?: string;
}

export default function WhyChooseUsSection({
  data = WHY_CHOOSE_US,
  className = "",
}: WhyChooseUsSectionProps) {
  return (
    <section
      id="pourquoi-nous-choisir"
      className={`relative py-16 sm:py-20 bg-stone-50/70 border-b border-stone-200/80 overflow-hidden ${className}`}
    >
      <div className="relative z-10 w-full px-6 md:px-12 max-w-7xl mx-auto flex flex-col gap-10">
        {/* En-tête de section */}
        <div className="flex flex-col gap-3.5 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-orange-100/80 border border-orange-200 text-orange-800 text-xs font-semibold tracking-widest uppercase w-fit">
            <Sparkles className="size-3.5 text-orange-600" />
            <span>{data.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-stone-950 leading-tight">
            {data.title}{" "}
            <span className="text-orange-700">
              {data.titleGradient}
            </span>
          </h2>
          <p className="text-base sm:text-lg text-stone-700 leading-relaxed font-medium">
            {data.subtitle}
          </p>
        </div>

        {/* Grille compacte des items de la liste validée */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {data.items.map((item) => (
            <div
              key={item.id}
              className="group flex items-center justify-between p-5 rounded-2xl border border-stone-200/90 bg-white shadow-2xs transition-all duration-200 hover:border-emerald-400 hover:shadow-sm hover:-translate-y-0.5"
            >
              {/* Gauche: Icône coche + Titre */}
              <div className="flex items-center gap-3.5">
                <div className="inline-flex items-center justify-center size-10 rounded-xl bg-emerald-50 border border-emerald-200/80 text-emerald-600 transition-colors group-hover:bg-emerald-100 shrink-0">
                  <CheckCircle2 className="size-5 text-emerald-600" />
                </div>
                <span className="text-base font-extrabold text-stone-900 tracking-tight group-hover:text-emerald-700 transition-colors">
                  {item.title}
                </span>
              </div>

              {/* Droite: Tag de validation */}
              <div className="hidden xs:inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-50 border border-emerald-200/60 text-emerald-700 text-[11px] font-semibold">
                <Check className="size-3 stroke-[3]" />
                <span>Validé</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import React from "react";
import { WHY_CHOOSE_US, type WhyChooseUsData } from "@/data/about";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/animated";

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
      id="pourquoi-fil"
      className={`relative py-20 bg-stone-50/80 border-b border-stone-200 overflow-hidden ${className}`}
    >
      <div className="relative z-10 w-full px-6 md:px-12 max-w-7xl mx-auto flex flex-col gap-12">
        {/* En-tête de section */}
        <FadeIn direction="up" className="flex flex-col gap-3.5 max-w-3xl">
          <div className="inline-flex items-center px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-950 text-xs font-bold tracking-widest uppercase w-fit">
            <span>{data.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-stone-950 leading-tight">
            {data.title}{" "}
            <span className="text-blue-900">
              {data.titleGradient}
            </span>
          </h2>
          <p className="text-base sm:text-lg text-stone-800 leading-relaxed font-medium">
            {data.subtitle}
          </p>
        </FadeIn>

        {/* Grille des 4 piliers différenciateurs */}
        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {data.items.map((item) => {
            const Icon = item.icon;
            return (
              <StaggerItem key={item.id}>
                <div className="group flex flex-col p-6 rounded-2xl border border-stone-200 bg-white shadow-2xs transition-all duration-200 hover:border-blue-400 hover:shadow-md hover:-translate-y-1 h-full">
                  <div className="inline-flex items-center justify-center size-12 rounded-xl bg-blue-50 border border-blue-200 text-blue-900 mb-4 transition-colors group-hover:bg-blue-900 group-hover:text-white shrink-0">
                    <Icon className="size-6" />
                  </div>

                  <h3 className="text-lg font-extrabold text-stone-950 tracking-tight leading-snug mb-2">
                    {item.title}
                  </h3>
                  <div className="h-0.5 w-8 rounded-full bg-amber-500 transition-all duration-300 group-hover:w-14 mb-3" />

                  <p className="text-sm text-stone-700 leading-relaxed font-normal flex-1">
                    {item.description}
                  </p>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}



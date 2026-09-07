import React from "react";
import { ArrowRight } from "lucide-react";
import { TARGET_AUDIENCES } from "@/data/about";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/animated";
import Link from "next/link";

export default function TargetAudienceSection() {
  return (
    <section id="pour-qui" className="relative py-20 bg-white border-b border-stone-200 overflow-hidden">
      <div className="relative z-10 w-full px-6 md:px-12 max-w-7xl mx-auto flex flex-col gap-12">
        {/* Header */}
        <FadeIn direction="up" className="flex flex-col gap-3.5 max-w-3xl">
          <div className="inline-flex items-center px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-950 text-xs font-bold tracking-widest uppercase w-fit">
            <span>Nos Partenaires & Bénéficiaires</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-stone-950 leading-tight">
            Pour <span className="text-blue-900">qui ?</span>
          </h2>
          <p className="text-base sm:text-lg text-stone-800 font-medium leading-relaxed">
            FANI IMPACT LAB accompagne une diversité d'acteurs engagés dans la transformation durable des territoires et le développement économique en Afrique.
          </p>
        </FadeIn>

        {/* Grille visuelle */}
        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {TARGET_AUDIENCES.map((item) => {
            const Icon = item.icon;
            return (
              <StaggerItem key={item.id}>
                <div className="group relative flex flex-col justify-between p-6 rounded-2xl border border-stone-200 bg-white shadow-2xs transition-all duration-200 hover:border-blue-400 hover:shadow-md hover:-translate-y-1 h-full">
                  <div className="flex flex-col gap-3">
                    <div className="flex items-center justify-between">
                      <div className="inline-flex items-center justify-center size-11 rounded-xl bg-blue-50 border border-blue-200 text-blue-900 transition-colors group-hover:bg-blue-900 group-hover:text-white shrink-0">
                        <Icon className="size-5" />
                      </div>
                      <span className="text-xs font-mono text-stone-400 font-bold">
                        0{item.id}
                      </span>
                    </div>

                    <h3 className="text-lg font-extrabold text-stone-950 tracking-tight leading-snug group-hover:text-blue-900 transition-colors">
                      {item.name}
                    </h3>
                    <div className="h-0.5 w-8 rounded-full bg-amber-500 transition-all duration-300 group-hover:w-14" />
                    {item.description && (
                      <p className="text-sm text-stone-700 leading-relaxed font-normal mt-1">
                        {item.description}
                      </p>
                    )}
                  </div>

                  <div className="mt-4 pt-4 border-t border-stone-100 flex items-center justify-between text-xs font-semibold text-stone-500 group-hover:text-blue-900 transition-colors">
                    <span>Discuter de vos besoins</span>
                    <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>

        {/* Banner CTA */}
        <FadeIn direction="up" delay={0.2} className="text-center mt-4">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#061224] hover:bg-[#0B1E3D] text-white text-sm font-semibold shadow-xs transition-all hover:scale-[1.02]"
          >
            <span>Vous vous reconnaissez ? Échangeons sur votre projet</span>
            <ArrowRight className="size-4 text-amber-400" />
          </Link>
        </FadeIn>
      </div>
    </section>
  );
}

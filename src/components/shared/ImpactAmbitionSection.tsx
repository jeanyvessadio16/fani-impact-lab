import React from "react";
import Link from "next/link";
import { Lightbulb, ArrowRight, Target, Users, Globe, BookOpen, Layers, ShieldCheck } from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/animated";

export const IMPACT_DOMAINS = [
  {
    id: 1,
    title: "Développement entrepreneurial",
    description: "Accompagner la création et la montée en puissance de projets viables et pérennes.",
    icon: Target,
  },
  {
    id: 2,
    title: "Innovation ouverte",
    description: "Stimuler la conception de nouvelles solutions adaptées aux réalités du terrain.",
    icon: Lightbulb,
  },
  {
    id: 3,
    title: "Emploi & Compétences",
    description: "Outiller les jeunes, femmes et dirigeants par des formations d'excellence.",
    icon: BookOpen,
  },
  {
    id: 4,
    title: "Développement territorial",
    description: "Valoriser le potentiel économique de la Casamance, du Sénégal et d'Afrique.",
    icon: Globe,
  },
  {
    id: 5,
    title: "Structuration des écosystèmes",
    description: "Connecter les incubateurs, universités et investisseurs dans des cadres pérennes.",
    icon: Layers,
  },
  {
    id: 6,
    title: "Politiques publiques",
    description: "Nourrir la décision publique par des études rigoureuses et des notes de plaidoyer.",
    icon: ShieldCheck,
  },
  {
    id: 7,
    title: "Collaboration multi-acteurs",
    description: "Faire émerger des consortiums solides fondés sur la co-construction d'impact.",
    icon: Users,
  },
];

export default function ImpactAmbitionSection() {
  return (
    <section id="notre-ambition-impact" className="scroll-mt-24 relative py-24 bg-[#061224] text-white border-y border-blue-950 overflow-hidden">
      <div className="relative z-10 w-full px-6 md:px-12 max-w-7xl mx-auto flex flex-col gap-12">
        {/* Header */}
        <FadeIn direction="up" className="flex flex-col items-center text-center gap-3.5 max-w-3xl mx-auto">
          <div className="inline-flex items-center px-3.5 py-1.5 rounded-full bg-amber-500/15 border border-amber-400/30 text-amber-300 text-xs font-bold tracking-widest uppercase">
            <span>Engagements & Horizons</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Notre ambition <span className="text-amber-400">d&apos;impact</span>
          </h2>
          <p className="text-stone-300 text-sm sm:text-base font-medium leading-relaxed max-w-2xl">
            FIL déploie un cadre de mesure d&apos;impact rigoureux, adossé à plus de 20 ans d&apos;expertise terrain, autour de 7 axes de transformation stratégique.
          </p>
        </FadeIn>

        {/* Grille des axes d'impact (7 axes + 1 carte CTA pour une grille 4x2 équilibrée) */}
        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {IMPACT_DOMAINS.map((domain) => {
            const Icon = domain.icon;
            return (
              <StaggerItem key={domain.id}>
                <div className="flex flex-col h-full p-6 rounded-2xl bg-[#0B1E3D] border border-blue-900/80 hover:border-amber-400/50 transition-colors duration-300">
                  <div className="inline-flex items-center justify-center size-11 rounded-xl bg-amber-500/20 text-amber-400 border border-amber-400/30 mb-4 shrink-0">
                    <Icon className="size-5" />
                  </div>
                  <h3 className="text-lg font-extrabold text-white tracking-tight mb-2">
                    {domain.title}
                  </h3>
                  <p className="text-stone-300 text-xs sm:text-sm leading-relaxed font-normal flex-1">
                    {domain.description}
                  </p>
                </div>
              </StaggerItem>
            );
          })}

          <StaggerItem>
            <div className="flex flex-col justify-between h-full p-6 rounded-2xl bg-[#0B1E3D] border border-amber-400/40 shadow-md">
              <div>
                <div className="inline-flex items-center px-2.5 py-1 rounded-full bg-amber-500/20 border border-amber-400/30 text-amber-300 text-xs font-bold uppercase tracking-wider mb-4">
                  Passer à l&apos;action
                </div>
                <h3 className="text-lg font-extrabold text-white tracking-tight mb-2">
                  Un projet à impact ?
                </h3>
                <p className="text-stone-300 text-xs sm:text-sm leading-relaxed font-normal">
                  Transformons ensemble vos ambitions territoriales et stratégiques en réalisations mesurables.
                </p>
              </div>

              <Link
                href="/contact"
                className="mt-5 w-full min-h-[44px] inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-[#061224] text-sm font-bold shadow-md transition-all hover:scale-[1.02] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-300 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B1E3D]"
              >
                <span>Échanger avec FIL</span>
                <ArrowRight className="size-4" />
              </Link>
            </div>
          </StaggerItem>
        </StaggerContainer>
      </div>
    </section>
  );
}

import React from "react";
import Link from "next/link";
import { Lightbulb, ArrowRight, Target, Users, Globe, BookOpen, Layers, Award, ShieldCheck } from "lucide-react";
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
    description: "Faire émerger des consortiums solides réclamant de la co-construction d'impact.",
    icon: Users,
  },
];

export default function ImpactAmbitionSection() {
  return (
    <section id="notre-ambition-impact" className="relative py-24 bg-[#071326] text-white border-y border-blue-950 overflow-hidden">
      <div className="relative z-10 w-full px-6 md:px-12 max-w-7xl mx-auto flex flex-col gap-12">
        {/* Header */}
        <FadeIn direction="up" className="flex flex-col items-center text-center gap-3.5 max-w-3xl mx-auto">
          <div className="inline-flex items-center px-3.5 py-1.5 rounded-full bg-amber-500/15 border border-amber-400/30 text-amber-300 text-xs font-bold tracking-widest uppercase">
            <span>Engagements & Horizons</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Notre ambition <span className="text-amber-400">d'impact</span>
          </h2>
          <p className="text-stone-300 text-sm sm:text-base font-medium leading-relaxed max-w-2xl">
            En tant que jeune cabinet, FIL bâtit un cadre de mesure d'impact rigoureux. Notre ambition s'articule autour de 7 axes de transformation stratégique.
          </p>
        </FadeIn>

        {/* Grille des axes d'impact */}
        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {IMPACT_DOMAINS.map((domain) => {
            const Icon = domain.icon;
            return (
              <StaggerItem key={domain.id}>
                <div className="group flex flex-col h-full p-6 rounded-2xl bg-[#0B1E3D] border border-blue-900/80 hover:border-amber-400/60 transition-all duration-300 hover:-translate-y-1">
                  <div className="inline-flex items-center justify-center size-11 rounded-xl bg-amber-500/20 text-amber-400 border border-amber-400/30 mb-4 shrink-0 group-hover:bg-amber-500 group-hover:text-[#061224] transition-colors">
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
        </StaggerContainer>

        {/* CTA */}
        <FadeIn direction="up" delay={0.2} className="text-center mt-2">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-amber-600 hover:bg-amber-700 text-white text-sm font-semibold shadow-md transition-all hover:scale-[1.02]"
          >
            <span>Échanger sur nos axes d'impact</span>
            <ArrowRight className="size-4" />
          </Link>
        </FadeIn>
      </div>
    </section>
  );
}

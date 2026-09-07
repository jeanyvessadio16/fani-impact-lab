import type { Metadata } from "next";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { ArrowRight, MapPin, Globe, CheckCircle2 } from "lucide-react";
import { SERVICES } from "@/data/service";
import WhyChooseUsSection from "@/components/shared/WhyChooseUsSection";
import ImpactAmbitionSection from "@/components/shared/ImpactAmbitionSection";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/animated";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";

export const metadata: Metadata = {
  title: "FANI IMPACT LAB | Cabinet de Conseil Stratégique & Innovation",
  description:
    "Nous accompagnons les entrepreneurs, organisations et acteurs des écosystèmes dans la conception de stratégies, la structuration de leurs initiatives et la création d'un impact durable en Afrique.",
  keywords: [
    "FANI IMPACT LAB",
    "Cabinet de conseil stratégique Sénégal",
    "Conseil stratégique Afrique",
    "Innovation Sénégal",
    "Entrepreneuriat Sénégal",
    "Écosystèmes entrepreneuriaux",
    "Accompagnement entrepreneurs Ziguinchor",
    "Développement territorial Casamance",
    "Recherche et politiques publiques",
    "Formation entrepreneuriat Sénégal",
    "Fatoumata Niang",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "FANI IMPACT LAB | Transformer les idées en impact.",
    description:
      "Nous accompagnons les entrepreneurs, organisations et acteurs des écosystèmes dans la conception de stratégies et la création d'un impact durable en Afrique.",
    url: "https://fanimpactlab.vercel.app",
    images: [
      {
        url: "/logo/logo-fil.png",
        width: 1200,
        height: 630,
        alt: "FANI IMPACT LAB - Conseil Stratégique & Innovation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "FANI IMPACT LAB | Transformer les idées en impact.",
    description:
      "Nous accompagnons les entrepreneurs, organisations et acteurs des écosystèmes dans la conception de stratégies et la création d'un impact durable en Afrique.",
    images: ["/logo/logo-fil.png"],
  },
};

export default function Home() {
  return (
    <main className="relative flex-1 bg-white">
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-[#061224] text-white border-b border-blue-950">
        <div
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat bg-fixed opacity-35"
          style={{ backgroundImage: "url('/images/bg-fil.jpg')" }}
        />
        <div className="absolute inset-0 z-0 bg-[#061224]/85" />

        <div className="relative z-10 w-full px-6 md:px-12 pt-36 pb-24 md:pt-44 md:pb-32 flex flex-col items-start space-y-7 max-w-7xl mx-auto">
          {/* Tag marque */}
          <FadeIn direction="down" delay={0.1}>
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-900/60 border border-blue-700/60 backdrop-blur-md text-amber-300 text-xs sm:text-sm font-bold tracking-wide">
              <span>FANI IMPACT LAB</span>
            </div>
          </FadeIn>

          {/* Titre Principal */}
          <FadeIn direction="up" delay={0.2}>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12] max-w-4xl">
              Transformer les idées en <span className="text-amber-400">impact.</span>
            </h1>
          </FadeIn>

          {/* Proposition de valeur */}
          <FadeIn direction="up" delay={0.3}>
            <p className="text-lg sm:text-xl text-stone-200 font-medium leading-relaxed max-w-3xl">
              Nous accompagnons les entrepreneurs, organisations et acteurs des écosystèmes dans la conception de stratégies, la structuration de leurs initiatives et la création d'un impact durable en Afrique.
            </p>
          </FadeIn>

          {/* CTA Principal & Secondaire */}
          <FadeIn direction="up" delay={0.4}>
            <div className="flex flex-wrap items-center gap-4 pt-3 w-full sm:w-auto">
              <Link
                href="/contact"
                className={buttonVariants({
                  variant: "default",
                  className:
                    "h-13 min-h-[48px] px-8 text-base font-semibold bg-[#0B1E3D] hover:bg-[#122B52] text-white border border-blue-700/60 rounded-xl shadow-lg transition-all hover:scale-[1.02] active:scale-[0.98] gap-2.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500",
                })}
              >
                <span>Parler de votre projet</span>
                <ArrowRight className="size-5 text-amber-400" />
              </Link>

              <Link
                href="/nos-expertises"
                className={buttonVariants({
                  variant: "outline",
                  className:
                    "h-13 min-h-[48px] px-7 text-base font-semibold border-white/30 bg-white/10 hover:bg-white/20 text-white rounded-xl backdrop-blur-md transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white",
                })}
              >
                Découvrir nos expertises
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 2. SECTION NOTRE VISION */}
      <section className="relative py-24 bg-stone-50/70 border-b border-stone-200 overflow-hidden">
        <div className="relative z-10 w-full px-6 md:px-12 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <FadeIn direction="right" className="lg:col-span-7 flex flex-col gap-5">
            <div className="inline-flex items-center px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-950 text-xs font-bold tracking-widest uppercase w-fit">
              <span>Notre Vision</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-stone-950 leading-tight">
              Construire des écosystèmes capables de{" "}
              <span className="text-blue-900">
                transformer durablement
              </span> les territoires.
            </h2>
            <p className="text-base sm:text-lg text-stone-800 font-medium leading-relaxed">
              Chez FANI IMPACT LAB, nous croyons que les grands défis ne peuvent pas être résolus isolément. La collaboration entre entrepreneurs, institutions, investisseurs, collectivités, chercheurs et partenaires constitue l'unique levier pour démultiplier l'impact.
            </p>
            <div>
              <Link
                href="/a-propos"
                className="inline-flex items-center gap-2.5 px-6 py-3 rounded-xl bg-[#061224] hover:bg-[#0B1E3D] text-white text-sm font-semibold shadow-xs transition-all hover:scale-[1.02]"
              >
                <span>Découvrir FIL</span>
                <ArrowRight className="size-4 text-amber-400" />
              </Link>
            </div>
          </FadeIn>

          <FadeIn direction="left" delay={0.2} className="lg:col-span-5">
            <div className="p-8 rounded-3xl bg-[#061224] text-white shadow-xl border border-blue-950 flex flex-col gap-6">
              <div className="flex items-center gap-3">
                <div className="size-10 rounded-xl bg-amber-500/20 text-amber-400 border border-amber-400/30 flex items-center justify-center font-bold">
                  <Globe className="size-5" />
                </div>
                <div>
                  <p className="text-xs font-mono font-bold uppercase tracking-wider text-amber-300">Ancrage & Vision</p>
                  <p className="text-sm font-extrabold text-white">Afrique & Réalités Territoriales</p>
                </div>
              </div>
              <blockquote className="text-stone-200 text-sm sm:text-base italic leading-relaxed border-l-2 border-amber-400 pl-4">
                &ldquo;Créer des ponts entre les idées innovantes et les capacités d'exécution sur le terrain pour bâtir des écosystèmes autonomes et résilients.&rdquo;
              </blockquote>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 3. SECTION NOS EXPERTISES (4 PÔLES) */}
      <section id="nos-expertises" className="relative py-24 bg-white overflow-hidden">
        <div className="relative z-10 w-full px-6 md:px-12 max-w-7xl mx-auto flex flex-col gap-14">
          <FadeIn direction="up" className="flex flex-col gap-4 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-950 text-xs font-bold tracking-widest uppercase w-fit">
              <span>Nos Pôles d'Excellence</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-stone-950 leading-tight">
              Nos <span className="text-blue-900">expertises</span>
            </h2>
            <p className="text-base sm:text-lg text-stone-800 font-medium leading-relaxed">
              Une offre structurée autour de quatre grands pôles complémentaires au service des décideurs, entrepreneurs et institutions.
            </p>
          </FadeIn>

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICES.map((service) => {
              const Icon = service.icon;
              return (
                <StaggerItem key={service.id}>
                  <Card className="group relative flex flex-col border-stone-200 bg-white transition-all duration-300 hover:border-blue-400 hover:shadow-xl hover:-translate-y-1 rounded-2xl shadow-2xs h-full justify-between">
                    <CardHeader className="pb-3">
                      <div className="flex items-center justify-between mb-3">
                        <div className="inline-flex items-center justify-center size-12 rounded-xl bg-blue-50 border border-blue-200 text-blue-900 transition-colors group-hover:bg-[#061224] group-hover:text-amber-400">
                          <Icon className="size-6" />
                        </div>
                        <span className="text-xs font-mono text-stone-500 font-bold tabular-nums">
                          0{service.id}
                        </span>
                      </div>

                      <CardTitle className="text-xl font-extrabold text-stone-950 tracking-tight leading-snug">
                        {service.title}
                      </CardTitle>
                      <div className="h-0.5 w-8 rounded-full bg-amber-500 transition-all duration-300 group-hover:w-14 mt-1" />
                    </CardHeader>

                    <CardContent className="flex-1 pt-2 pb-4">
                      <p className="text-xs text-stone-600 mb-4 line-clamp-3 leading-relaxed">
                        {service.description}
                      </p>
                      <ul className="flex flex-col gap-2">
                        {service.domains.slice(0, 4).map((domain, i) => (
                          <li key={i} className="flex items-center gap-2 text-xs font-semibold text-stone-800">
                            <CheckCircle2 className="size-3.5 text-blue-900 shrink-0" />
                            <span>{domain}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>

                    <CardFooter className="border-t border-stone-100 bg-stone-50/60 flex items-center justify-between py-3.5 px-6 rounded-b-2xl">
                      <Link
                        href={`/nos-expertises#${service.slug}`}
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-900 group-hover:text-amber-600 transition-colors w-full justify-between"
                      >
                        <span>{service.ctaText}</span>
                        <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </CardFooter>
                  </Card>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* 4. SECTION POURQUOI CHOISIR FANI IMPACT LAB */}
      <WhyChooseUsSection />

      {/* 5. SECTION NOTRE AMBITION D'IMPACT */}
      <ImpactAmbitionSection />

      {/* 9. ANCRAGE TERRITORIAL & LOCALISATION */}
      <section id="ancrage-territorial" className="relative py-24 bg-white border-b border-stone-200 overflow-hidden">
        <div className="relative z-10 w-full px-6 md:px-12 max-w-7xl mx-auto flex flex-col gap-12">
          <FadeIn direction="up" className="flex flex-col gap-3.5 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-950 text-xs font-bold tracking-widest uppercase w-fit">
              <MapPin className="size-3.5 text-amber-600" />
              <span>Ancrage Local & Rayonnement Africain</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-stone-950 leading-tight">
              Où nous <span className="text-blue-900">trouver</span>
            </h2>
            <p className="text-base sm:text-lg text-stone-800 font-medium leading-relaxed">
              Basé à Ziguinchor (Casamance, Sénégal), FANI IMPACT LAB opère au cœur des réalités territoriales de l'Afrique de l'Ouest.
            </p>
          </FadeIn>

          <Card className="group relative flex flex-col md:flex-row border-stone-200 bg-stone-50/50 rounded-3xl shadow-sm overflow-hidden p-8 gap-8 items-center">
            <div className="flex-1 flex flex-col gap-4">
              <div className="inline-flex items-center justify-center size-12 rounded-xl bg-[#061224] text-amber-400">
                <MapPin className="size-6" />
              </div>
              <h3 className="text-2xl font-extrabold text-stone-950 tracking-tight">
                Siège & Bureau Régional
              </h3>
              <p className="text-stone-700 text-sm leading-relaxed">
                Santhiaba, Ziguinchor — Région de la Casamance, Sénégal.
              </p>
              <div className="flex flex-wrap gap-2 pt-2">
                <span className="px-3 py-1 rounded-full bg-blue-100 text-blue-900 font-bold text-xs">
                  Ziguinchor
                </span>
                <span className="px-3 py-1 rounded-full bg-blue-100 text-blue-900 font-bold text-xs">
                  Casamance
                </span>
                <span className="px-3 py-1 rounded-full bg-blue-100 text-blue-900 font-bold text-xs">
                  Sénégal
                </span>
                <span className="px-3 py-1 rounded-full bg-amber-100 text-amber-900 font-bold text-xs">
                  Afrique de l'Ouest
                </span>
              </div>
            </div>

            <div className="w-full md:w-auto">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl bg-[#061224] hover:bg-[#0B1E3D] text-white text-sm font-semibold shadow-md transition-all hover:scale-[1.02]"
              >
                <span>Entrer en contact</span>
                <ArrowRight className="size-4 text-amber-400" />
              </Link>
            </div>
          </Card>
        </div>
      </section>

      {/* 11. CTA FINAL */}
      <section className="relative py-24 bg-[#061224] text-white overflow-hidden">
        <FadeIn direction="up" className="relative z-10 w-full px-6 md:px-12 max-w-4xl mx-auto text-center flex flex-col items-center gap-7">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-900/60 border border-blue-700/60 text-amber-300 text-xs font-bold tracking-wide">
            <span>Co-construisons l'Avenir</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight max-w-2xl">
            Prêt à transformer vos idées en <span className="text-amber-400">impact durable ?</span>
          </h2>

          <p className="text-base sm:text-lg text-stone-200 font-medium leading-relaxed max-w-xl">
            Que vous soyez entrepreneur, décideur institutionnel, bailleur ou responsable territorial, échangeons sur vos enjeux stratégiques.
          </p>

          <Link
            href="/contact"
            className="inline-flex items-center gap-2.5 h-13 px-9 text-base font-semibold bg-amber-600 hover:bg-amber-700 text-white rounded-xl shadow-lg transition-all hover:scale-[1.02] active:scale-[0.98]"
          >
            <span>Parler de votre projet</span>
            <ArrowRight className="size-5" />
          </Link>
        </FadeIn>
      </section>
    </main>
  );
}



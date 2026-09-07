import type { Metadata } from "next";
import Link from "next/link";
import { SERVICES } from "@/data/service";
import { ArrowRight, CheckCircle2, FileText, Target, Layers } from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/animated";

export const metadata: Metadata = {
  title: "Nos Expertises | Advisory, Écosystèmes, Academy & Research",
  description:
    "Découvrez les 4 pôles d'excellence de FANI IMPACT LAB : Conseil stratégique (Advisory), Structuration d'écosystèmes, Formation & Leadership (Academy) et Recherche & Plaidoyer (Research).",
  keywords: [
    "Nos expertises FANI IMPACT LAB",
    "Advisory conseil stratégique Sénégal",
    "Écosystèmes entrepreneuriat Afrique",
    "Academy formation leadership",
    "Research études diagnostiques",
    "Fatoumata Niang expertise",
  ],
  alternates: {
    canonical: "/nos-expertises",
  },
  openGraph: {
    title: "Nos Expertises | FANI IMPACT LAB - 4 Pôles d'Excellence",
    description:
      "Advisory, Écosystèmes, Academy et Research : nos expertises stratégiques pour dynamiser les organisations et les territoires.",
    url: "https://fanimpactlab.vercel.app/nos-expertises",
    images: [
      {
        url: "/logo/logo-fil.png",
        width: 1200,
        height: 630,
        alt: "Nos Expertises FANI IMPACT LAB",
      },
    ],
  },
};

export default function NosExpertisesPage() {
  return (
    <main className="relative flex-1 bg-white">
      {/* HERO SECTION */}
      <section className="relative min-h-[55vh] flex items-center justify-center overflow-hidden bg-[#061224] text-white border-b border-blue-950">
        <div
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat bg-fixed opacity-35"
          style={{ backgroundImage: "url('/images/bg-fil.jpg')" }}
        />
        <div className="absolute inset-0 z-0 bg-[#061224]/85" />

        <div className="relative z-10 w-full px-6 md:px-12 pt-36 pb-20 max-w-4xl mx-auto text-center flex flex-col items-center gap-5">
          <FadeIn direction="down" delay={0.1}>
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-900/60 border border-blue-700/60 text-amber-300 text-xs sm:text-sm font-bold tracking-wide">
              <span>4 Pôles d'Excellence</span>
            </div>
          </FadeIn>

          <FadeIn direction="up" delay={0.2}>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
              Nos <span className="text-amber-400">Expertises</span>
            </h1>
          </FadeIn>

          <FadeIn direction="up" delay={0.3}>
            <p className="text-lg sm:text-xl text-stone-200 font-medium leading-relaxed max-w-2xl">
              De la clarification stratégique à la recherche appliquée en passant par l'animation écosystémique et la formation, découvrez comment nous accompagnons votre réussite.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* DÉTAIL DES 4 PÔLES */}
      <section className="relative py-24 bg-white">
        <div className="relative z-10 w-full px-6 md:px-12 max-w-7xl mx-auto flex flex-col gap-24">
          {SERVICES.map((service, index) => {
            const Icon = service.icon;
            const isEven = index % 2 === 0;

            return (
              <div
                key={service.id}
                id={service.slug}
                className={`scroll-mt-28 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start p-8 sm:p-12 rounded-3xl border border-stone-200 ${
                  isEven ? "bg-stone-50/60" : "bg-white"
                } shadow-sm`}
              >
                {/* En-tête du Pôle */}
                <div className="lg:col-span-5 flex flex-col gap-5">
                  <div className="flex items-center justify-between">
                    <div className="inline-flex items-center justify-center size-14 rounded-2xl bg-[#061224] text-amber-400 border border-blue-900 shadow-md">
                      <Icon className="size-7" />
                    </div>
                    <span className="text-sm font-mono text-stone-400 font-bold uppercase tracking-widest">
                      0{service.id} — Pôle
                    </span>
                  </div>

                  <div>
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-950 tracking-tight">
                      {service.title}
                    </h2>
                    <p className="text-sm font-bold text-amber-600 uppercase tracking-wider mt-1">
                      {service.tagline}
                    </p>
                    <div className="h-0.5 w-16 bg-amber-500 rounded-full mt-3" />
                  </div>

                  <p className="text-base text-stone-700 leading-relaxed font-normal">
                    {service.description}
                  </p>

                  {/* Livrables */}
                  {service.deliverables && (
                    <div className="flex flex-col gap-2 mt-2 p-4 rounded-xl bg-white border border-stone-200 shadow-2xs">
                      <p className="text-xs font-mono font-bold uppercase tracking-wider text-stone-600 flex items-center gap-1.5">
                        <FileText className="size-4 text-blue-900" />
                        <span>Livrables Clés & Productions</span>
                      </p>
                      <ul className="flex flex-col gap-1.5 mt-1">
                        {service.deliverables.map((item, i) => (
                          <li key={i} className="text-xs text-stone-800 font-medium flex items-center gap-2">
                            <span className="size-1.5 rounded-full bg-amber-500 shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <div className="pt-2">
                    <Link
                      href={`/contact?type=${encodeURIComponent(service.title)}`}
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#061224] hover:bg-[#0B1E3D] text-white text-xs sm:text-sm font-semibold shadow-xs transition-all hover:scale-[1.02]"
                    >
                      <span>Solliciter le pôle {service.title}</span>
                      <ArrowRight className="size-4 text-amber-400" />
                    </Link>
                  </div>
                </div>

                {/* Prestations et Domaines d'intervention */}
                <div className="lg:col-span-7 flex flex-col gap-6">
                  <h3 className="text-lg font-extrabold text-stone-950 tracking-tight flex items-center gap-2">
                    <Target className="size-5 text-blue-900" />
                    <span>Domaines d'Intervention & Prestations</span>
                  </h3>

                  <div className="flex flex-col gap-4">
                    {service.list.map((item) => (
                      <div
                        key={item.id}
                        className="p-5 rounded-2xl bg-white border border-stone-200 shadow-2xs flex flex-col gap-1.5 hover:border-blue-300 transition-colors"
                      >
                        <h4 className="text-base font-bold text-stone-900 flex items-center gap-2">
                          <CheckCircle2 className="size-4.5 text-blue-900 shrink-0" />
                          <span>{item.name}</span>
                        </h4>
                        {item.description && (
                          <p className="text-xs text-stone-600 leading-relaxed font-normal pl-6">
                            {item.description}
                          </p>
                        )}
                      </div>
                    ))}
                  </div>

                  {/* Puces des compétences */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {service.domains.map((dom, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-950 text-xs font-bold"
                      >
                        {dom}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* BANNIÈRE CTA */}
      <section className="relative py-20 bg-[#061224] text-white overflow-hidden">
        <FadeIn direction="up" className="relative z-10 w-full px-6 md:px-12 max-w-4xl mx-auto text-center flex flex-col items-center gap-7">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Besoin d'un accompagnement sur-mesure ?
          </h2>
          <p className="text-stone-300 text-base max-w-xl">
            Chaque organisation a des défis uniques. Rencontrons-nous pour définir l'intervention la plus pertinente.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-semibold text-sm shadow-md transition-all hover:scale-[1.02]"
          >
            <span>Prendre contact</span>
            <ArrowRight className="size-4" />
          </Link>
        </FadeIn>
      </section>
    </main>
  );
}

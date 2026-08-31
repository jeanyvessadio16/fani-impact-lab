import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { ArrowRight, Sparkles, CheckCircle2 } from "lucide-react";
import { SERVICES } from "@/data/service";
import WhyChooseUsSection from "@/components/shared/WhyChooseUsSection";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";

export default function Home() {
  return (
    <main className="relative flex-1 bg-white">
      {/* Section Hero */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-stone-950 text-white border-b border-stone-800">
        {/* Arrière-plan avec Image claire et bien visible en position fixe (effet parallaxe) */}
        <div
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat bg-fixed opacity-50"
          style={{ backgroundImage: "url('/images/bg-fil.jpg')" }}
        />

        {/* Masque de lisibilité sombre uni et net (sans dégradé parasite) */}
        <div className="absolute inset-0 z-0 bg-stone-950/80" />

        {/* Conteneur Hero */}
        <div className="relative z-10 w-full px-6 md:px-12 pt-32 pb-20 md:pt-40 md:pb-28 flex flex-col items-start space-y-7 max-w-7xl mx-auto">

          {/* Badge Pilule */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/20 border border-orange-400/40 backdrop-blur-md text-orange-200 text-xs sm:text-sm font-bold tracking-wide">
            <Sparkles className="size-4 text-orange-400 animate-pulse" />
            <span>Bienvenue chez FIL</span>
          </div>

          {/* Titre Principal */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12] max-w-4xl">
            FANI IMPACT LAB
          </h1>

          {/* Description */}
          <p className="text-lg sm:text-xl text-stone-200 font-medium leading-relaxed max-w-3xl">
            Chez FIL, nous accompagnons les entrepreneurs, institutions, les collectivités et organisations à fort impact dans la transformation de leurs idées en impact.
          </p>

          {/* Boutons CTA */}
          <div className="flex flex-wrap items-center gap-4 pt-2 w-full sm:w-auto">
            <Link
              href="#services"
              className={buttonVariants({
                variant: "default",
                className:
                  "h-13 min-h-[48px] px-8 text-base font-semibold bg-orange-600 hover:bg-orange-700 text-white rounded-xl shadow-md transition-all hover:scale-[1.02] active:scale-[0.98] gap-2.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2 focus-visible:ring-offset-stone-950",
              })}
            >
              <span>Découvrez nos offres</span>
              <ArrowRight className="size-5" />
            </Link>

            <Link
              href="/a-propos"
              className={buttonVariants({
                variant: "outline",
                className:
                  "h-13 min-h-[48px] px-7 text-base font-semibold border-white/30 bg-white/10 hover:bg-white/20 text-white rounded-xl backdrop-blur-md transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-stone-950",
              })}
            >
              En savoir plus
            </Link>
          </div>
        </div>
      </section>

      {/* Section nos services */}
      <section id="services" className="relative py-24 bg-white overflow-hidden">
        <div className="relative z-10 w-full px-6 md:px-12 max-w-7xl mx-auto">

          {/* En-tête de section */}
          <div className="mb-14 flex flex-col gap-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-100/80 border border-orange-200 text-orange-900 text-xs font-bold tracking-widest uppercase w-fit">
              <Sparkles className="size-3.5 text-orange-600" />
              <span>Ce que nous faisons</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-stone-950 leading-tight max-w-2xl">
              Nos{" "}
              <span className="text-orange-700">
                offres
              </span>
            </h2>
            <p className="text-base sm:text-lg text-stone-800 font-medium leading-relaxed max-w-2xl">
              Nous accompagnons les entrepreneurs, institutions, collectivités et organisations à fort impact dans la transformation de leurs idées en réalisations concrètes.
            </p>
          </div>

          {/* Grille de cartes */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
            {SERVICES.map((service) => {
              const Icon = service.icon;
              return (
                <Card
                  key={service.id}
                  className="group relative flex flex-col border-stone-200 bg-white transition-all duration-200 hover:border-orange-300 hover:shadow-md hover:-translate-y-1 rounded-2xl shadow-2xs"
                >
                  <CardHeader className="pb-2">
                    {/* Numéro + icône */}
                    <div className="flex items-center justify-between mb-3">
                      <div className="inline-flex items-center justify-center size-11 rounded-xl bg-orange-50 border border-orange-200 text-orange-700 transition-colors group-hover:bg-orange-100/80">
                        <Icon className="size-5" />
                      </div>
                      <span className="text-xs font-mono text-stone-700 font-bold tabular-nums select-none">
                        0{service.id}
                      </span>
                    </div>

                    {/* Titre */}
                    <CardTitle className="text-base font-extrabold text-stone-950 tracking-tight leading-snug">
                      {service.title}
                    </CardTitle>
                    <div className="h-0.5 w-8 rounded-full bg-orange-600 transition-all duration-300 group-hover:w-14 mt-1" />
                  </CardHeader>

                  <CardContent className="flex-1 pt-2">
                    <ul className="flex flex-col gap-2.5">
                      {service.list.map((item) => (
                        <li
                          key={item.id}
                          className="flex items-start gap-2.5 text-sm text-stone-800 transition-colors font-normal"
                        >
                          <CheckCircle2 className="size-4 mt-0.5 shrink-0 text-orange-600" />
                          <span className="leading-snug">{item.name}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>

                  <CardFooter className="border-t border-stone-100 bg-stone-50/60 flex items-center justify-between py-3.5 rounded-b-2xl">
                    <span className="text-xs font-semibold text-stone-700">
                      {service.list.length} prestation{service.list.length > 1 ? "s" : ""}
                    </span>
                    <ArrowRight className="size-4 text-orange-700 transition-all duration-200 group-hover:translate-x-0.5" />
                  </CardFooter>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Section Pourquoi Nous Choisir */}
      <WhyChooseUsSection />

      {/* Où nous trouver */}
      <section id="location" className="relative py-24 bg-white overflow-hidden">
        <div className="relative z-10 w-full px-6 md:px-12 max-w-7xl mx-auto">

          {/* En-tête de section */}
          <div className="mb-14 flex flex-col gap-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-100/80 border border-orange-200 text-orange-900 text-xs font-bold tracking-widest uppercase w-fit">
              <Sparkles className="size-3.5 text-orange-600" />
              <span>Où nous trouver</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-stone-950 leading-tight max-w-2xl">
              Où{" "}
              <span className="text-orange-700">
                trouver FIL
              </span>
            </h2>
            <p className="text-base sm:text-lg text-stone-800 font-medium leading-relaxed max-w-2xl">
              Découvrez nos locaux et rejoignez-nous pour réaliser vos projets à fort impact.
            </p>
          </div>

          {/* Carte de localisation */}
          <Card
            className="group relative flex flex-col border-stone-200 bg-white transition-all duration-200 hover:border-orange-300 hover:shadow-md max-w-md rounded-2xl shadow-2xs"
          >
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between mb-3">
                <div className="inline-flex items-center justify-center size-11 rounded-xl bg-orange-50 border border-orange-200 text-orange-700 transition-colors group-hover:bg-orange-100/80">
                  <Sparkles className="size-5" />
                </div>
                <span className="text-xs font-mono text-stone-700 font-bold tabular-nums select-none">
                  05
                </span>
              </div>

              <CardTitle className="text-base font-extrabold text-stone-950 tracking-tight">
                Nos locaux
              </CardTitle>
              <div className="h-0.5 w-8 rounded-full bg-orange-600 transition-all duration-300 group-hover:w-14 mt-1" />
            </CardHeader>

            <CardContent className="flex-1 pt-2">
              <ul className="flex flex-col gap-2.5">
                <li className="flex items-start gap-2.5 text-sm text-stone-800">
                  <Sparkles className="size-4 mt-0.5 shrink-0 text-orange-600" />
                  <span className="leading-snug font-medium">Santhiaba, Ziguinchor</span>
                </li>
                <li className="flex items-start gap-2.5 text-sm text-stone-800">
                  <Sparkles className="size-4 mt-0.5 shrink-0 text-orange-600" />
                  <span className="leading-snug font-medium">Sénégal</span>
                </li>
              </ul>
            </CardContent>

            <CardFooter className="border-t border-stone-100 bg-stone-50/60 flex items-center justify-between py-3.5 rounded-b-2xl">
              <span className="text-xs font-semibold text-stone-700">
                Ziguinchor, Sénégal
              </span>
              <ArrowRight className="size-4 text-orange-700 transition-all duration-200 group-hover:translate-x-0.5" />
            </CardFooter>
          </Card>
        </div>
      </section>
    </main>
  );
}


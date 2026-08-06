import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { ArrowRight, Sparkles, CheckCircle2 } from "lucide-react";
import { SERVICES } from "@/data/service";
import ConvictionSection from "@/components/shared/ConvictionSection";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";

export default function Home() {
  return (
    <main className="relative flex-1">
      {/* Section Hero */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-stone-950 text-white">
        {/* Arrière-plan avec Image & Dégradé Sombre Immersif */}
        <div
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-35 scale-105"
          style={{ backgroundImage: "url('/images/bg-fil.jpg')" }}
        />

        {/* Overlays de Dégradé & Ambient Glow */}
        <div className="absolute inset-0 z-0 bg-gradient-to-r from-stone-950 via-stone-950/90 to-stone-950/70" />
        <div className="absolute inset-0 z-0 bg-gradient-to-t from-stone-950 via-transparent to-stone-950/80" />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-orange-600/15 rounded-full blur-[160px] pointer-events-none z-0" />

        {/* Conteneur Hero */}
        <div className="relative z-10 w-full px-6 md:px-12 pt-32 pb-20 md:pt-40 md:pb-28 flex flex-col items-start space-y-7">

          {/* Badge Pilule en verre */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/30 backdrop-blur-md text-orange-300 text-xs sm:text-sm font-medium tracking-wide">
            <Sparkles className="size-4 text-orange-400 animate-pulse" />
            <span>Bienvenue chez FIL</span>
          </div>

          {/* Titre Principal */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12] max-w-4xl">
            <span className="text-stone-200">
              FANI IMPACT LAB
            </span>
            <br />
          </h1>

          {/* Description */}
          <p className="text-lg sm:text-xl text-stone-300 font-normal leading-relaxed max-w-3xl">
            Chez FIL, nous accompagnons les entrepreneurs, institutions, les collectivités et organisations à fort impact dans la transformation de leurs idées en impact.
          </p>

          {/* Boutons CTA */}
          <div className="flex flex-wrap items-center gap-4 pt-2 w-full sm:w-auto">
            <Link
              href="#services"
              className={buttonVariants({
                variant: "default",
                className:
                  "h-13 px-8 text-base font-semibold bg-gradient-to-r from-orange-800 to-amber-800 hover:from-orange-700 hover:to-amber-700 text-white rounded-xl shadow-lg shadow-orange-950/60 transition-all hover:scale-[1.02] active:scale-[0.98] gap-2.5",
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
                  "h-13 px-7 text-base font-medium border-white/20 bg-white/5 hover:bg-white/10 text-white hover:text-white rounded-xl backdrop-blur-md transition-all",
              })}
            >
              En savoir plus
            </Link>
          </div>
        </div>
      </section>

      {/* Section nos services */}

      <section id="services" className="relative py-24 bg-stone-950 overflow-hidden">
        {/* Ambient glow background */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-orange-600/8 rounded-full blur-[120px] pointer-events-none" />

        <div className="relative z-10 w-full px-6 md:px-12 max-w-7xl mx-auto">

          {/* En-tête de section */}
          <div className="mb-14 flex flex-col gap-4">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/25 text-orange-400 text-xs font-medium tracking-widest uppercase w-fit">
              <Sparkles className="size-3" />
              Ce que nous faisons
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight max-w-2xl">
              Nos{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-400">
                offres
              </span>
            </h2>
            <p className="text-base sm:text-lg text-stone-400 font-normal leading-relaxed max-w-2xl">
              Nous accompagnons les entrepreneurs, institutions, collectivités et organisations à fort impact dans la transformation de leurs idées en réalisations concrètes.
            </p>
          </div>

          {/* Grille de cartes shadcn */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
            {SERVICES.map((service) => {
              const Icon = service.icon;
              return (
                <Card
                  key={service.id}
                  className="group relative flex flex-col border-white/8 bg-white/4 backdrop-blur-sm transition-all duration-300 hover:border-orange-500/30 hover:bg-white/6 hover:shadow-2xl hover:shadow-orange-950/40 hover:-translate-y-1.5 rounded-2xl"
                >
                  <CardHeader className="pb-2">
                    {/* Numéro + icône */}
                    <div className="flex items-center justify-between mb-3">
                      <div className="inline-flex items-center justify-center size-11 rounded-xl bg-orange-500/15 border border-orange-500/25 text-orange-400 transition-colors group-hover:bg-orange-500/22">
                        <Icon className="size-5" />
                      </div>
                      <span className="text-xs font-mono text-stone-600 tabular-nums select-none">
                        0{service.id}
                      </span>
                    </div>

                    {/* Titre + trait animé */}
                    <CardTitle className="text-base font-bold text-white tracking-tight">
                      {service.title}
                    </CardTitle>
                    <div className="h-0.5 w-8 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 transition-all duration-300 group-hover:w-14 mt-1" />
                  </CardHeader>

                  <CardContent className="flex-1 pt-2">
                    <ul className="flex flex-col gap-2.5">
                      {service.list.map((item) => (
                        <li
                          key={item.id}
                          className="flex items-start gap-2.5 text-sm text-stone-400 group-hover:text-stone-300 transition-colors"
                        >
                          <CheckCircle2 className="size-4 mt-0.5 shrink-0 text-orange-500/55" />
                          <span className="leading-snug">{item.name}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>

                  <CardFooter className="border-t border-white/6 bg-transparent flex items-center justify-between">
                    <span className="text-xs text-stone-600">
                      {service.list.length} prestation{service.list.length > 1 ? "s" : ""}
                    </span>
                    <ArrowRight className="size-4 text-orange-500/40 transition-all duration-200 group-hover:text-orange-400 group-hover:translate-x-0.5" />
                  </CardFooter>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Section Notre Conviction */}
      <ConvictionSection />

      {/* Où nous trouver */}
      <section id="location" className="relative py-24 bg-stone-950 overflow-hidden">
        {/* Ambient glow background */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-orange-600/8 rounded-full blur-[120px] pointer-events-none" />

        <div className="relative z-10 w-full px-6 md:px-12 max-w-7xl mx-auto">

          {/* En-tête de section */}
          <div className="mb-14 flex flex-col gap-4">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/25 text-orange-400 text-xs font-medium tracking-widest uppercase w-fit">
              <Sparkles className="size-3" />
              Où nous trouver
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight max-w-2xl">
              Où{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-400">
                trouver FIL
              </span>
            </h2>
            <p className="text-base sm:text-lg text-stone-400 font-normal leading-relaxed max-w-2xl">
              Découvrez nos locaux et rejoignez-nous pour réaliser vos projets à fort impact.
            </p>
          </div>

          {/* Carte de localisation */}
          <Card
            className="group relative flex flex-col border-white/8 bg-white/4 backdrop-blur-sm transition-all duration-300 hover:border-orange-500/30 hover:bg-white/6 hover:shadow-2xl hover:shadow-orange-950/40 hover:-translate-y-1.5 rounded-2xl"
          >
            <CardHeader className="pb-2">
              {/* Numéro + icône */}
              <div className="flex items-center justify-between mb-3">
                <div className="inline-flex items-center justify-center size-11 rounded-xl bg-orange-500/15 border border-orange-500/25 text-orange-400 transition-colors group-hover:bg-orange-500/22">
                  <Sparkles className="size-5" />
                </div>
                <span className="text-xs font-mono text-stone-600 tabular-nums select-none">
                  05
                </span>
              </div>

              {/* Titre + trait animé */}
              <CardTitle className="text-base font-bold text-white tracking-tight">
                Où nous trouver
              </CardTitle>
              <div className="h-0.5 w-8 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 transition-all duration-300 group-hover:w-14 mt-1" />
            </CardHeader>

            <CardContent className="flex-1 pt-2">
              <ul className="flex flex-col gap-2.5">
                <li
                  className="flex items-start gap-2.5 text-sm text-stone-400 group-hover:text-stone-300 transition-colors"
                >
                  <Sparkles className="size-4 mt-0.5 shrink-0 text-orange-500/55" />
                  <span className="leading-snug">Santhiaba, Ziguinchor</span>
                </li>
                <li
                  className="flex items-start gap-2.5 text-sm text-stone-400 group-hover:text-stone-300 transition-colors"
                >
                  <Sparkles className="size-4 mt-0.5 shrink-0 text-orange-500/55" />
                  <span className="leading-snug">Sénégal</span>
                </li>
              </ul>
            </CardContent>

            <CardFooter className="border-t border-white/6 bg-transparent flex items-center justify-between">
              <span className="text-xs text-stone-600">
                3 prestations
              </span>
              <ArrowRight className="size-4 text-orange-500/40 transition-all duration-200 group-hover:text-orange-400 group-hover:translate-x-0.5" />
            </CardFooter>
          </Card>
        </div>
      </section>
    </main>
  );
}

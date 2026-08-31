import { Sparkles, Quote, Target } from "lucide-react";
import { OUR_CONVICTION, type ConvictionData } from "@/data/about";

interface ConvictionSectionProps {
  data?: ConvictionData;
  className?: string;
}

export default function ConvictionSection({
  data = OUR_CONVICTION,
  className = "",
}: ConvictionSectionProps) {
  return (
    <section
      id="conviction"
      className={`relative py-24 bg-stone-50/70 border-y border-stone-200/80 ${className}`}
    >
      <div className="relative z-10 w-full px-6 md:px-12 max-w-7xl mx-auto flex flex-col gap-12">
        {/* En-tête de la section */}
        <div className="flex flex-col gap-4 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-100/80 border border-orange-200 text-orange-900 text-xs font-bold tracking-widest uppercase w-fit">
            <Sparkles className="size-3.5 text-orange-600" />
            <span>{data.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-stone-950 leading-tight">
            {data.title}{" "}
            <span className="text-orange-700">
              {data.titleGradient}
            </span>
          </h2>
        </div>

        {/* Bloc Conviction vs Vision en 2 cartes distinctes et intuitives */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Bloc Conviction */}
          <div className="flex flex-col gap-4 p-8 rounded-2xl bg-white border border-stone-200 shadow-xs relative overflow-hidden group hover:border-orange-300 transition-all">
            <div className="flex items-center justify-between">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-orange-50 border border-orange-200 text-orange-900 text-xs font-bold uppercase">
                <Quote className="size-3.5 text-orange-600" />
                Notre Conviction
              </div>
            </div>
            <blockquote className="text-base sm:text-lg text-stone-900 font-semibold leading-relaxed italic pt-1">
              &ldquo;{data.description}&rdquo;
            </blockquote>
          </div>

          {/* Bloc Vision */}
          {data.vision && (
            <div className="flex flex-col gap-4 p-8 rounded-2xl bg-white border border-stone-200 shadow-xs relative overflow-hidden group hover:border-orange-300 transition-all">
              <div className="flex items-center justify-between">
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-orange-50 border border-orange-200 text-orange-900 text-xs font-bold uppercase">
                  <Target className="size-3.5 text-orange-600" />
                  Notre Vision
                </div>
              </div>
              <p className="text-base sm:text-lg text-stone-900 font-semibold leading-relaxed pt-1">
                {data.vision}
              </p>
            </div>
          )}
        </div>

        {/* Section Piliers d'action */}
        <div className="flex flex-col gap-6 pt-4">
          <div className="flex items-center gap-2.5">
            <span className="w-2.5 h-2.5 rounded-full bg-orange-600 inline-block" />
            <h3 className="text-xl sm:text-2xl font-extrabold text-stone-950 tracking-tight">
              Nos 4 piliers d&apos;action
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {data.pillars.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={pillar.id}
                  className="group relative flex flex-col justify-between gap-5 p-7 rounded-2xl border border-stone-200 bg-white shadow-xs transition-all duration-200 hover:border-orange-300 hover:shadow-md hover:-translate-y-1"
                >
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center justify-between">
                      <div className="inline-flex items-center justify-center size-12 rounded-xl bg-orange-50 border border-orange-200 text-orange-700 transition-colors group-hover:bg-orange-100/80 shrink-0">
                        <Icon className="size-6" />
                      </div>
                      <span className="text-xs font-mono text-stone-700 font-bold tabular-nums select-none">
                        0{pillar.id}
                      </span>
                    </div>

                    <div className="flex flex-col gap-2 mt-1">
                      <h4 className="text-base font-extrabold text-stone-900 tracking-tight leading-snug">
                        {pillar.title}
                      </h4>
                      <p className="text-sm text-stone-700 leading-relaxed font-normal">
                        {pillar.description}
                      </p>
                    </div>
                  </div>

                  <div className="h-0.5 w-8 rounded-full bg-orange-600 transition-all duration-300 group-hover:w-14" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}


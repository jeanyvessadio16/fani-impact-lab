import { Sparkles } from "lucide-react";
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
      className={`relative py-24 bg-stone-950 overflow-hidden border-t border-white/5 ${className}`}
    >
      {/* Ambient glow background */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[600px] h-[400px] bg-orange-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative z-10 w-full px-6 md:px-12 max-w-7xl mx-auto flex flex-col gap-14">
        {/* En-tête & Description */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          <div className="lg:col-span-6 flex flex-col gap-5">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/25 text-orange-400 text-xs font-medium tracking-widest uppercase w-fit">
              <Sparkles className="size-3" />
              {data.badge}
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
              {data.title}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-400">
                {data.titleGradient}
              </span>
            </h2>
          </div>

          <div className="lg:col-span-6 flex flex-col gap-4 lg:pt-3">
            {data.description && (
              <p className="text-base sm:text-lg text-stone-300 leading-relaxed font-normal">
                {data.description}
              </p>
            )}

            {(data.vision || data.quote) && (
              <p className="text-base sm:text-lg text-stone-300 leading-relaxed font-normal">
                {data.vision || data.quote}
              </p>
            )}
          </div>
        </div>

        {/* Pilier / Cartes de Convictions */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-2">
          {data.pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.id}
                className="group relative flex flex-col gap-4 p-7 rounded-2xl border border-white/8 bg-white/3 backdrop-blur-sm transition-all duration-300 hover:border-orange-500/30 hover:bg-white/6 hover:shadow-2xl hover:shadow-orange-950/40 hover:-translate-y-1.5"
              >
                <div className="inline-flex items-center justify-center size-12 rounded-xl bg-orange-500/15 border border-orange-500/25 text-orange-400 transition-colors group-hover:bg-orange-500/22 shrink-0">
                  <Icon className="size-6" />
                </div>

                <div className="flex flex-col gap-2 mt-1">
                  <h3 className="text-lg font-bold text-white tracking-tight">
                    {pillar.title}
                  </h3>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

import { Loader2, Sparkles } from "lucide-react";

export default function Loading() {
  return (
    <div className="relative min-h-[70vh] flex flex-col items-center justify-center bg-white px-6 py-20 text-center">
      {/* Conteneur d'animation principal */}
      <div className="relative flex flex-col items-center gap-6 max-w-md mx-auto">
        {/* Badge Pilule avec pulsation */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-50 border border-orange-200 text-orange-800 text-xs sm:text-sm font-bold tracking-wide animate-pulse">
          <Sparkles className="size-4 text-orange-600" />
          <span>Chargement en cours...</span>
        </div>

        {/* Cercle d'animation avec Spinner et Icône */}
        <div className="relative flex items-center justify-center my-2">
          <div className="size-20 rounded-2xl bg-orange-50 border border-orange-200/80 flex items-center justify-center shadow-xs">
            <Loader2 className="size-9 text-orange-700 animate-spin stroke-[2.5]" />
          </div>
        </div>

        {/* Titre et description de chargement */}
        <div className="flex flex-col gap-2">
          <h2 className="text-xl sm:text-2xl font-extrabold text-stone-950 tracking-tight">
            FANI <span className="text-orange-700">IMPACT LAB</span>
          </h2>
          <p className="text-sm text-stone-700 font-medium">
            Préparation du contenu à fort impact en cours.
          </p>
        </div>

        {/* Squelettes d'animation discrets */}
        <div className="w-full space-y-3 pt-4 opacity-75">
          <div className="h-3.5 bg-stone-200/80 rounded-full w-3/4 mx-auto animate-pulse" />
          <div className="h-3 bg-stone-100 rounded-full w-1/2 mx-auto animate-pulse" />
        </div>
      </div>
    </div>
  );
}

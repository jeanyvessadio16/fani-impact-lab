import Link from "next/link";
import { ArrowLeft, Sparkles, Home, Mail } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "404 - Page non trouvée | FANI IMPACT LAB",
  description: "La page que vous recherchez n'existe pas ou a été déplacée.",
};

export default function NotFound() {
  return (
    <main className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-stone-950 text-white border-b border-stone-800">
      {/* Arrière-plan avec Image fixe */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat bg-fixed opacity-40"
        style={{ backgroundImage: "url('/images/bg-fil.jpg')" }}
      />

      {/* Masque de lisibilité sombre uni */}
      <div className="absolute inset-0 z-0 bg-stone-950/85" />

      {/* Contenu principal 404 */}
      <div className="relative z-10 w-full px-6 md:px-12 py-24 max-w-4xl mx-auto text-center flex flex-col items-center gap-7">
        {/* Badge 404 */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/20 border border-orange-400/40 backdrop-blur-md text-orange-200 text-xs sm:text-sm font-bold tracking-wide">
          <Sparkles className="size-4 text-orange-400 animate-pulse" />
          <span>Erreur 404</span>
        </div>

        {/* Chiffre 404 géant & Titre */}
        <div className="flex flex-col items-center gap-2">
          <span className="text-7xl sm:text-9xl font-black text-orange-500 tracking-tighter leading-none select-none">
            404
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight max-w-2xl">
            Page <span className="text-orange-400">introuvable</span>
          </h1>
        </div>

        {/* Message d'explication */}
        <p className="text-base sm:text-lg text-stone-200 font-medium leading-relaxed max-w-lg">
          La page que vous recherchez n&apos;existe pas, a été déplacée ou est temporairement indisponible.
        </p>

        {/* Boutons d'action CTA */}
        <div className="flex flex-wrap items-center justify-center gap-4 pt-4 w-full sm:w-auto">
          <Link
            href="/"
            className="inline-flex items-center gap-2.5 h-13 min-h-[48px] px-8 text-base font-semibold bg-orange-600 hover:bg-orange-700 text-white rounded-xl shadow-md transition-all hover:scale-[1.02] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2 focus-visible:ring-offset-stone-950"
          >
            <Home className="size-5" />
            <span>Retour à l&apos;accueil</span>
          </Link>

          <Link
            href="/contact"
            className="inline-flex items-center gap-2.5 h-13 min-h-[48px] px-7 text-base font-semibold border border-white/30 bg-white/10 hover:bg-white/20 text-white rounded-xl backdrop-blur-md transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-stone-950"
          >
            <Mail className="size-5" />
            <span>Nous contacter</span>
          </Link>
        </div>
      </div>
    </main>
  );
}

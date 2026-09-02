"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  MapPin,
  Mail,
  Phone,
  ArrowUpRight,
  Sparkles,
} from "lucide-react";
import { NAV_LINKS, FOOTER_SERVICES_LINKS, COMPANY_CONTACT, SOCIAL_LINKS } from "@/data/navigation";
import { SocialIcon } from "@/components/ui/SocialIcons";

export default function Footer() {
  const pathname = usePathname();
  const year = new Date().getFullYear();

  if (pathname === "/contact") {
    return null;
  }

  return (
    <footer className="relative bg-[#061224] text-stone-200 border-t border-blue-950">
      {/* ── Main content ── */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 pt-16 pb-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">

          {/* ── Column 1 : Brand ── */}
          <div className="flex flex-col gap-5 sm:col-span-2 lg:col-span-1">
            {/* Logo + nom */}
            <Link href="/" className="flex items-center gap-3 group w-fit focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-lg">
              <div className="relative overflow-hidden rounded-lg p-1 bg-white border border-blue-900 group-hover:border-amber-500/60 transition-colors">
                <Image
                  src="/logo/logo-fil.png"
                  alt="Logo FANI IMPACT LAB"
                  width={80}
                  height={80}
                  className="object-contain transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            </Link>

            {/* Tagline */}
            <p className="text-sm leading-relaxed text-stone-300 max-w-xs">
              Transformer les idées en impact. Nous accompagnons entrepreneurs,
              institutions et organisations vers un avenir durable et innovant.
            </p>

            {/* Réseaux Sociaux les plus utilisés */}
            <div className="flex flex-col gap-2 mt-1">
              <span className="text-xs font-semibold text-stone-400">Suivez-nous :</span>
              <div className="flex items-center gap-2 flex-wrap">
                {SOCIAL_LINKS.map(({ id, name, href, icon }) => (
                  <a
                    key={id}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={name}
                    title={name}
                    className="p-2 rounded-lg bg-blue-950/80 border border-blue-900/60 text-stone-300 hover:text-amber-400 hover:bg-blue-900/80 hover:border-amber-500/40 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
                  >
                    <SocialIcon name={icon} className="size-4" />
                  </a>
                ))}
              </div>
            </div>
          </div>


          {/* ── Column 2 : Navigation ── */}
          <div className="flex flex-col gap-4">
            <h3 className="text-xs font-bold tracking-widest uppercase text-stone-300 flex items-center gap-2">
              <span className="inline-block w-4 h-px bg-amber-500 rounded-full" />
              Navigation
            </h3>
            <ul className="flex flex-col gap-2.5">
              {NAV_LINKS.map(({ id, label, href }) => (
                <li key={id}>
                  <Link
                    href={href}
                    className="group inline-flex items-center gap-1.5 text-sm text-stone-300 hover:text-white transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 rounded"
                  >
                    <ArrowUpRight className="size-3.5 text-amber-400 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Column 3 : Services ── */}
          <div className="flex flex-col gap-4">
            <h3 className="text-xs font-bold tracking-widest uppercase text-stone-300 flex items-center gap-2">
              <span className="inline-block w-4 h-px bg-amber-500 rounded-full" />
              Nos services
            </h3>
            <ul className="flex flex-col gap-2.5">
              {FOOTER_SERVICES_LINKS.map(({ id, label, href }) => (
                <li key={id}>
                  <Link
                    href={href}
                    className="group inline-flex items-center gap-1.5 text-sm text-stone-300 hover:text-white transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 rounded"
                  >
                    <ArrowUpRight className="size-3.5 text-amber-400 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Column 4 : Contact ── */}
          <div className="flex flex-col gap-4">
            <h3 className="text-xs font-bold tracking-widest uppercase text-stone-300 flex items-center gap-2">
              <span className="inline-block w-4 h-px bg-amber-500 rounded-full" />
              Contact
            </h3>
            <ul className="flex flex-col gap-3.5">
              <li>
                <a
                  href={`mailto:${COMPANY_CONTACT.email}`}
                  className="group flex items-start gap-3 text-sm text-stone-300 hover:text-white transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 rounded"
                >
                  <div className="mt-0.5 inline-flex items-center justify-center size-7 rounded-lg bg-blue-900/50 border border-blue-700/40 text-amber-400 shrink-0 group-hover:bg-blue-800/60 transition-colors">
                    <Mail className="size-3.5" />
                  </div>
                  <span>{COMPANY_CONTACT.email}</span>
                </a>
              </li>
              <li>
                <a
                  href={`tel:${COMPANY_CONTACT.phone.replace(/\s+/g, '')}`}
                  className="group flex items-start gap-3 text-sm text-stone-300 hover:text-white transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 rounded"
                >
                  <div className="mt-0.5 inline-flex items-center justify-center size-7 rounded-lg bg-blue-900/50 border border-blue-700/40 text-amber-400 shrink-0 group-hover:bg-blue-800/60 transition-colors">
                    <Phone className="size-3.5" />
                  </div>
                  <span>{COMPANY_CONTACT.phone}</span>
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm text-stone-300">
                <div className="mt-0.5 inline-flex items-center justify-center size-7 rounded-lg bg-blue-900/50 border border-blue-700/40 text-amber-400 shrink-0">
                  <MapPin className="size-3.5" />
                </div>
                <span>{COMPANY_CONTACT.address}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* ── CTA bande ── */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-[#0B1E3D] border border-blue-900 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
          <div className="flex items-start gap-3">
            <div className="mt-0.5 inline-flex items-center justify-center size-9 rounded-xl bg-amber-500/20 border border-amber-400/30 text-amber-400 shrink-0">
              <Sparkles className="size-4" />
            </div>
            <div>
              <p className="text-sm font-bold text-white">Démarrons ensemble</p>
              <p className="text-xs text-stone-300 mt-0.5">
                Transformez votre vision en impact réel avec nos équipes.
              </p>
            </div>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-amber-600 hover:bg-amber-700 text-white text-sm font-semibold shadow-xs transition-all hover:scale-[1.02] active:scale-[0.98] shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
          >
            Nous contacter
            <ArrowUpRight className="size-4" />
          </Link>
        </div>

        {/* ── Bottom bar ── */}
        <div className="mt-10 pt-6 border-t border-blue-950 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-stone-400">
          <p>© {year} FANI IMPACT LAB. Tous droits réservés.</p>
          <div className="flex items-center gap-4">
            <Link href="/politique-de-confidentialite" className="hover:text-stone-200 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 rounded">
              Confidentialité
            </Link>
            <span className="w-px h-3 bg-blue-950" />
            <Link href="/mentions-legales" className="hover:text-stone-200 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 rounded">
              Mentions légales
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}


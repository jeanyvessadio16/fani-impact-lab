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
import { NAV_LINKS, FOOTER_SERVICES_LINKS, COMPANY_CONTACT } from "@/data/navigation";



export default function Footer() {
  const pathname = usePathname();
  const year = new Date().getFullYear();

  if (pathname === "/contact") {
    return null;
  }

  return (
    <footer className="relative bg-stone-950 text-stone-400 overflow-hidden">
      {/* ── Ambient glow ── */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[300px] bg-orange-600/8 rounded-full blur-[140px] pointer-events-none" />
      {/* Top divider gradient */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-orange-500/30 to-transparent" />

      {/* ── Main content ── */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 pt-16 pb-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">

          {/* ── Column 1 : Brand ── */}
          <div className="flex flex-col gap-5 sm:col-span-2 lg:col-span-1">
            {/* Logo + nom */}
            <Link href="/" className="flex items-center gap-3 group w-fit">
              <div className="relative overflow-hidden rounded-lg p-1 bg-gradient-to-br from-orange-500/20 to-amber-500/10 border border-orange-500/25 group-hover:border-orange-400/50 transition-colors">
                <Image
                  src="/logo/FIL-LOGO.png"
                  alt="LOGO FANI IMPACT LAB"
                  width={40}
                  height={40}
                  className="object-contain transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <span className="font-extrabold text-white text-base tracking-tight">
                FANI <span className="text-orange-400">IMPACT LAB</span>
              </span>
            </Link>

            {/* Tagline */}
            <p className="text-sm leading-relaxed text-stone-400 max-w-xs">
              Transformer les idées en impact. Nous accompagnons entrepreneurs,
              institutions et organisations vers un avenir durable et innovant.
            </p>


          </div>

          {/* ── Column 2 : Navigation ── */}
          <div className="flex flex-col gap-4">
            <h3 className="text-xs font-semibold tracking-widest uppercase text-stone-500 flex items-center gap-2">
              <span className="inline-block w-4 h-px bg-orange-500/60 rounded-full" />
              Navigation
            </h3>
            <ul className="flex flex-col gap-2.5">
              {NAV_LINKS.map(({ id, label, href }) => (
                <li key={id}>
                  <Link
                    href={href}
                    className="group inline-flex items-center gap-1.5 text-sm text-stone-400 hover:text-white transition-colors duration-200"
                  >
                    <ArrowUpRight className="size-3.5 text-orange-500/50 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-orange-400" />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Column 3 : Services ── */}
          <div className="flex flex-col gap-4">
            <h3 className="text-xs font-semibold tracking-widest uppercase text-stone-500 flex items-center gap-2">
              <span className="inline-block w-4 h-px bg-orange-500/60 rounded-full" />
              Nos services
            </h3>
            <ul className="flex flex-col gap-2.5">
              {FOOTER_SERVICES_LINKS.map(({ id, label, href }) => (
                <li key={id}>
                  <Link
                    href={href}
                    className="group inline-flex items-center gap-1.5 text-sm text-stone-400 hover:text-white transition-colors duration-200"
                  >
                    <ArrowUpRight className="size-3.5 text-orange-500/50 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-orange-400" />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Column 4 : Contact ── */}
          <div className="flex flex-col gap-4">
            <h3 className="text-xs font-semibold tracking-widest uppercase text-stone-500 flex items-center gap-2">
              <span className="inline-block w-4 h-px bg-orange-500/60 rounded-full" />
              Contact
            </h3>
            <ul className="flex flex-col gap-3.5">
              <li>
                <a
                  href={`mailto:${COMPANY_CONTACT.email}`}
                  className="group flex items-start gap-3 text-sm text-stone-400 hover:text-white transition-colors duration-200"
                >
                  <div className="mt-0.5 inline-flex items-center justify-center size-7 rounded-lg bg-orange-500/10 border border-orange-500/20 text-orange-400 shrink-0 group-hover:bg-orange-500/20 transition-colors">
                    <Mail className="size-3.5" />
                  </div>
                  <span>{COMPANY_CONTACT.email}</span>
                </a>
              </li>
              <li>
                <a
                  href={`tel:${COMPANY_CONTACT.phone.replace(/\s+/g, '')}`}
                  className="group flex items-start gap-3 text-sm text-stone-400 hover:text-white transition-colors duration-200"
                >
                  <div className="mt-0.5 inline-flex items-center justify-center size-7 rounded-lg bg-orange-500/10 border border-orange-500/20 text-orange-400 shrink-0 group-hover:bg-orange-500/20 transition-colors">
                    <Phone className="size-3.5" />
                  </div>
                  <span>{COMPANY_CONTACT.phone}</span>
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm text-stone-400">
                <div className="mt-0.5 inline-flex items-center justify-center size-7 rounded-lg bg-orange-500/10 border border-orange-500/20 text-orange-400 shrink-0">
                  <MapPin className="size-3.5" />
                </div>
                <span>{COMPANY_CONTACT.address}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* ── CTA bande ── */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-orange-900/30 via-amber-900/20 to-orange-900/10 border border-orange-500/15 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
          <div className="flex items-start gap-3">
            <div className="mt-0.5 inline-flex items-center justify-center size-9 rounded-xl bg-orange-500/15 border border-orange-500/25 text-orange-400 shrink-0">
              <Sparkles className="size-4" />
            </div>
            <div>
              <p className="text-sm font-semibold text-white">Démarrons ensemble</p>
              <p className="text-xs text-stone-400 mt-0.5">
                Transformez votre vision en impact réel avec nos équipes.
              </p>
            </div>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-orange-700 to-amber-700 hover:from-orange-600 hover:to-amber-600 text-white text-sm font-semibold shadow-lg shadow-orange-950/50 transition-all hover:scale-[1.02] active:scale-[0.98] shrink-0"
          >
            Nous contacter
            <ArrowUpRight className="size-4" />
          </Link>
        </div>

        {/* ── Bottom bar ── */}
        <div className="mt-10 pt-6 border-t border-white/6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-stone-600">
          <p>© {year} FANI IMPACT LAB. Tous droits réservés.</p>
          <div className="flex items-center gap-4">
            <Link href="/politique-de-confidentialite" className="hover:text-stone-400 transition-colors">
              Confidentialité
            </Link>
            <span className="w-px h-3 bg-stone-700" />
            <Link href="/mentions-legales" className="hover:text-stone-400 transition-colors">
              Mentions légales
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

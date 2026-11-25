import Link from "next/link";
import Image from "next/image";
import {
  MapPin,
  Mail,
  Phone,
  ArrowUpRight,
} from "lucide-react";
import { NAV_LINKS, FOOTER_SERVICES_LINKS, FOOTER_LEGAL_LINKS, COMPANY_CONTACT, SOCIAL_LINKS } from "@/data/navigation";
import { SocialIcon } from "@/components/ui/SocialIcons";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative bg-[#061224] text-stone-200 border-t border-blue-950">
      {/* ── Main content ── */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 pt-16 pb-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">

          {/* ── Column 1 : Brand ── */}
          <div className="flex flex-col gap-5 sm:col-span-2 lg:col-span-1">
            <Link
              href="/"
              className="flex items-center gap-3 group w-fit focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#061224] rounded-xl"
            >
              <div className="relative overflow-hidden rounded-xl px-2.5 py-1.5 bg-white border border-blue-900 group-hover:border-amber-500/60 transition-colors">
                <Image
                  src="/logo/logo-fil.png"
                  alt="Logo FANI IMPACT LAB"
                  width={1673}
                  height={940}
                  sizes="140px"
                  className="h-11 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            </Link>

            <p className="text-sm leading-relaxed text-stone-300 max-w-xs">
              Transformer les idées en impact. Nous accompagnons les entrepreneurs, institutions et acteurs des écosystèmes vers un avenir durable et innovant.
            </p>

            <div className="flex flex-col gap-2 mt-1">
              <span className="text-xs font-semibold text-stone-300">Rejoignez notre réseau :</span>
              <div className="flex items-center gap-2 flex-wrap">
                {SOCIAL_LINKS.map(({ id, name, href, icon }) => (
                  <a
                    key={id}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={name}
                    title={name}
                    className="size-11 inline-flex items-center justify-center rounded-xl bg-blue-950/80 border border-blue-900/60 text-stone-300 hover:text-amber-400 hover:bg-blue-900/80 hover:border-amber-500/40 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#061224]"
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
                    className="group inline-flex items-center gap-1.5 text-sm text-stone-300 hover:text-white transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#061224] rounded"
                  >
                    <ArrowUpRight className="size-3.5 text-amber-400 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Column 3 : Nos Pôles d'Expertise ── */}
          <div className="flex flex-col gap-4">
            <h3 className="text-xs font-bold tracking-widest uppercase text-stone-300 flex items-center gap-2">
              <span className="inline-block w-4 h-px bg-amber-500 rounded-full" />
              Nos Pôles
            </h3>
            <ul className="flex flex-col gap-2.5">
              {FOOTER_SERVICES_LINKS.map(({ id, label, href }) => (
                <li key={id}>
                  <Link
                    href={href}
                    className="group inline-flex items-center gap-1.5 text-sm text-stone-300 hover:text-white transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#061224] rounded"
                  >
                    <ArrowUpRight className="size-3.5 text-amber-400 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Column 4 : Ancrage & Contact ── */}
          <div className="flex flex-col gap-4">
            <h3 className="text-xs font-bold tracking-widest uppercase text-stone-300 flex items-center gap-2">
              <span className="inline-block w-4 h-px bg-amber-500 rounded-full" />
              Contact & Ancrage
            </h3>
            <ul className="flex flex-col gap-3.5">
              <li>
                <a
                  href={`mailto:${COMPANY_CONTACT.email}`}
                  className="group flex items-start gap-3 text-sm text-stone-300 hover:text-white transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#061224] rounded"
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
                  className="group flex items-start gap-3 text-sm text-stone-300 hover:text-white transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#061224] rounded"
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
                <span>Santhiaba, Ziguinchor — Casamance, Sénégal</span>
              </li>
            </ul>
          </div>
        </div>

        {/* ── Bottom bar ── */}
        <div className="mt-12 pt-6 border-t border-blue-950 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-stone-300">
          <p>© {year} FANI IMPACT LAB (FIL). Tous droits réservés. Ziguinchor, Sénégal.</p>
          <div className="flex items-center gap-4">
            {FOOTER_LEGAL_LINKS.map((legalLink) => (
              <Link
                key={legalLink.id}
                href={legalLink.href}
                className="hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#061224] rounded"
              >
                {legalLink.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}



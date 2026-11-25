"use client";

import { X, Menu, ArrowRight } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { NAV_LINKS } from "@/data/navigation";
import { SocialIcon } from "@/components/ui/SocialIcons";

const PRIMARY_NAV_LINKS = NAV_LINKS.filter((link) => link.href !== "/contact");

export default function HeaderNavbar() {
    const pathname = usePathname();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const menuButtonRef = useRef<HTMLButtonElement>(null);
    const drawerRef = useRef<HTMLDivElement>(null);
    const wasMenuOpenRef = useRef(false);
    const isContactActive = pathname === "/contact";

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Verrouillage du scroll arrière-plan et restauration du focus à la fermeture
    useEffect(() => {
        if (isMenuOpen) {
            wasMenuOpenRef.current = true;
            const previousOverflow = document.body.style.overflow;
            document.body.style.overflow = "hidden";
            return () => {
                document.body.style.overflow = previousOverflow;
            };
        }
        if (wasMenuOpenRef.current) {
            wasMenuOpenRef.current = false;
            menuButtonRef.current?.focus();
        }
    }, [isMenuOpen]);

    // Fermeture avec Échap et piège de focus clavier dans le tiroir mobile
    useEffect(() => {
        if (!isMenuOpen) return;

        const drawerEl = drawerRef.current;
        const focusableSelector =
            'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])';

        const initialFocusables = drawerEl?.querySelectorAll<HTMLElement>(focusableSelector);
        if (initialFocusables && initialFocusables.length > 0) {
            initialFocusables[0].focus();
        }

        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") {
                setIsMenuOpen(false);
                return;
            }
            if (e.key === "Tab" && drawerEl) {
                const focusables = Array.from(
                    drawerEl.querySelectorAll<HTMLElement>(focusableSelector)
                );
                if (focusables.length === 0) return;
                const first = focusables[0];
                const last = focusables[focusables.length - 1];
                if (e.shiftKey && document.activeElement === first) {
                    e.preventDefault();
                    last.focus();
                } else if (!e.shiftKey && document.activeElement === last) {
                    e.preventDefault();
                    first.focus();
                }
            }
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [isMenuOpen]);

    return (
        <>
            <header
                className={`fixed top-0 left-0 right-0 w-full z-40 bg-white transition-all duration-300 ${scrolled
                    ? "border-b border-stone-200 shadow-xs py-2.5 px-6 md:px-12"
                    : "border-b border-stone-200/80 py-3 px-6 md:px-12"
                    }`}
            >
                <div className="max-w-7xl mx-auto flex justify-between items-center gap-4">
                    {/* Logo */}
                    <Link
                        href="/"
                        className="flex items-center gap-3 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-800 focus-visible:ring-offset-2 rounded-lg shrink-0"
                    >
                        <div className="relative overflow-hidden rounded-lg transition-colors">
                            <Image
                                src="/logo/logo-fil.png"
                                alt="Logo FANI IMPACT LAB"
                                width={1673}
                                height={940}
                                sizes="140px"
                                loading="eager"
                                className="h-10 sm:h-11 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                            />
                        </div>
                    </Link>

                    {/* Navigation Desktop */}
                    <nav className="hidden md:flex items-center gap-1 bg-white p-1 rounded-full" aria-label="Navigation principale">
                        {PRIMARY_NAV_LINKS.map((link) => {
                            const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));
                            return (
                                <Link
                                    key={link.id}
                                    href={link.href}
                                    aria-current={isActive ? "page" : undefined}
                                    className={`px-3.5 py-2 text-sm font-semibold rounded-full transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-800 focus-visible:ring-offset-2 ${isActive
                                        ? "bg-[#061224] text-white shadow-xs"
                                        : "text-stone-700 hover:text-blue-900 hover:bg-stone-100/80"
                                        }`}
                                >
                                    {link.label}
                                </Link>
                            );
                        })}
                    </nav>

                    {/* CTA Desktop */}
                    <div className="hidden md:flex items-center shrink-0">
                        <Link
                            href="/contact"
                            aria-current={isContactActive ? "page" : undefined}
                            className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-800 focus-visible:ring-offset-2 ${
                                isContactActive
                                    ? "bg-[#061224] text-white ring-2 ring-amber-400"
                                    : "bg-[#061224] hover:bg-[#0B1E3D] text-white shadow-xs"
                            }`}
                        >
                            <span>Parler de votre projet</span>
                            <ArrowRight className="size-4 text-amber-400" />
                        </Link>
                    </div>

                    {/* Mobile Toggle */}
                    <div className="md:hidden flex items-center">
                        <button
                            ref={menuButtonRef}
                            type="button"
                            className="p-2.5 text-stone-700 hover:text-blue-900 hover:bg-stone-100 rounded-xl transition-colors cursor-pointer min-h-[44px] min-w-[44px] flex items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-800 focus-visible:ring-offset-2"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            aria-expanded={isMenuOpen}
                            aria-controls="mobile-menu-drawer"
                            aria-label={isMenuOpen ? "Fermer le menu de navigation" : "Ouvrir le menu de navigation"}
                        >
                            {isMenuOpen ? <X className="size-6" /> : <Menu className="size-6" />}
                        </button>
                    </div>
                </div>
            </header>

            {/* Menu Mobile - Overlay & Drawer */}
            {isMenuOpen && (
                <div className="fixed inset-0 z-50 md:hidden flex justify-end bg-stone-950/50 backdrop-blur-xs animate-in fade-in duration-200">
                    <div
                        className="absolute inset-0"
                        onClick={() => setIsMenuOpen(false)}
                        aria-hidden="true"
                    />

                    <div
                        ref={drawerRef}
                        id="mobile-menu-drawer"
                        role="dialog"
                        aria-modal="true"
                        aria-label="Menu de navigation"
                        className="relative w-full max-w-xs h-full bg-white shadow-2xl flex flex-col p-6 overflow-y-auto z-10 animate-in slide-in-from-right duration-300"
                    >
                        <div className="flex items-center justify-between pb-5 border-b border-stone-100">
                            <Link
                                href="/"
                                onClick={() => setIsMenuOpen(false)}
                                className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-800 rounded-lg"
                            >
                                <Image
                                    src="/logo/logo-fil.png"
                                    alt="Logo FANI IMPACT LAB"
                                    width={1673}
                                    height={940}
                                    sizes="120px"
                                    className="h-9 w-auto object-contain"
                                />
                            </Link>
                            <button
                                type="button"
                                onClick={() => setIsMenuOpen(false)}
                                className="p-2 text-stone-600 hover:text-stone-950 rounded-lg hover:bg-stone-100 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-800 min-h-[44px] min-w-[44px] flex items-center justify-center"
                                aria-label="Fermer le menu"
                            >
                                <X className="size-5" />
                            </button>
                        </div>

                        <nav className="my-8 flex-1" aria-label="Navigation mobile">
                            <ul className="flex flex-col gap-2">
                                {PRIMARY_NAV_LINKS.map((link) => {
                                    const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));
                                    return (
                                        <li key={link.id}>
                                            <Link
                                                href={link.href}
                                                onClick={() => setIsMenuOpen(false)}
                                                aria-current={isActive ? "page" : undefined}
                                                className={`block px-4 py-3 text-base font-semibold rounded-xl transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-800 ${isActive
                                                    ? "bg-[#061224] text-white"
                                                    : "text-stone-800 hover:text-blue-900 hover:bg-blue-50/70"
                                                    }`}
                                            >
                                                {link.label}
                                            </Link>
                                        </li>
                                    );
                                })}
                            </ul>
                        </nav>

                        <div className="pt-5 border-t border-stone-100 flex flex-col gap-3">
                            <Link
                                href="/contact"
                                onClick={() => setIsMenuOpen(false)}
                                aria-current={isContactActive ? "page" : undefined}
                                className="w-full min-h-[48px] inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-[#061224] hover:bg-[#0B1E3D] text-white text-sm font-semibold shadow-xs transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-800 focus-visible:ring-offset-2"
                            >
                                <span>Parler de votre projet</span>
                                <ArrowRight className="size-4 text-amber-400" />
                            </Link>
                            <a
                                href="https://wa.me/221786032020"
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={() => setIsMenuOpen(false)}
                                className="w-full min-h-[44px] inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border border-stone-200 bg-stone-50 hover:bg-stone-100 text-stone-900 text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-800 focus-visible:ring-offset-2"
                            >
                                <SocialIcon name="whatsapp" className="size-4 text-emerald-700" />
                                <span>Écrire sur WhatsApp</span>
                            </a>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}


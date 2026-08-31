"use client";

import { X, Menu } from "lucide-react";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { NAV_LINKS } from "@/data/navigation";

export default function HeaderNavbar() {
    const pathname = usePathname();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Fermeture du menu mobile avec la touche Échap
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape" && isMenuOpen) {
                setIsMenuOpen(false);
            }
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [isMenuOpen]);

    if (pathname === "/contact") {
        return null;
    }

    return (
        <>
            <header
                className={`fixed top-0 left-0 right-0 w-full z-40 transition-all duration-300 ${scrolled
                    ? "bg-white/95 backdrop-blur-md border-b border-stone-200 shadow-xs py-3 px-6 md:px-12"
                    : "bg-white/90 backdrop-blur-sm border-b border-stone-200/80 py-4 px-6 md:px-12"
                    }`}
            >
                <div className="max-w-7xl mx-auto flex justify-between items-center gap-4">
                    {/* Logo */}
                    <Link
                        href="/"
                        className="flex items-center gap-3 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-600 rounded-lg"
                    >
                        <div className="relative overflow-hidden rounded-lg p-1 bg-orange-50/80 border border-orange-200/80 group-hover:border-orange-400 transition-colors">
                            <Image
                                src="/logo/FIL-LOGO.png"
                                alt="Logo FANI IMPACT LAB"
                                width={42}
                                height={42}
                                className="object-contain transition-transform duration-300 group-hover:scale-105"
                                priority
                            />
                        </div>
                        {/* <span className="font-extrabold text-stone-900 text-lg tracking-tight hidden sm:inline-block">
                            FANI <span className="text-orange-700">IMPACT LAB</span>
                        </span> */}
                    </Link>

                    {/* Navigation Desktop */}
                    <nav className="hidden md:flex items-center gap-1 bg-stone-100/90 p-1.5 rounded-full border border-stone-200/80" aria-label="Navigation principale">
                        {NAV_LINKS.map((link) => {
                            const isActive = pathname === link.href;
                            return (
                                <Link
                                    key={link.id}
                                    href={link.href}
                                    aria-current={isActive ? "page" : undefined}
                                    className={`px-4 py-2 text-sm font-semibold rounded-full transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-600 ${isActive
                                        ? "bg-white text-orange-800 shadow-xs border border-orange-200/60"
                                        : "text-stone-700 hover:text-orange-700 hover:bg-white/80"
                                        }`}
                                >
                                    {link.label}
                                </Link>
                            );
                        })}
                    </nav>

                    {/* Mobile Toggle */}
                    <div className="md:hidden flex items-center">
                        <button
                            type="button"
                            className="p-2.5 text-stone-700 hover:text-orange-700 hover:bg-stone-100 rounded-xl transition-colors cursor-pointer min-h-[44px] min-w-[44px] flex items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-600"
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
                        id="mobile-menu-drawer"
                        className="relative w-full max-w-xs h-full bg-white shadow-2xl flex flex-col p-6 overflow-y-auto z-10 animate-in slide-in-from-right duration-300"
                    >
                        <div className="flex items-center justify-between pb-5 border-b border-stone-100">
                            <div className="flex items-center gap-2">
                                <Image
                                    src="/logo/FIL-LOGO.png"
                                    alt="Logo FANI IMPACT LAB"
                                    width={36}
                                    height={36}
                                    className="object-contain"
                                />
                                <span className="font-bold text-stone-900 text-sm">FANI IMPACT LAB</span>
                            </div>
                            <button
                                type="button"
                                onClick={() => setIsMenuOpen(false)}
                                className="p-2 text-stone-500 hover:text-stone-900 rounded-lg hover:bg-stone-100 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-600 min-h-[44px] min-w-[44px] flex items-center justify-center"
                                aria-label="Fermer le menu"
                            >
                                <X className="size-5" />
                            </button>
                        </div>

                        <nav className="my-8 flex-1" aria-label="Navigation mobile">
                            <ul className="flex flex-col gap-2">
                                {NAV_LINKS.map((link) => {
                                    const isActive = pathname === link.href;
                                    return (
                                        <li key={link.id}>
                                            <Link
                                                href={link.href}
                                                onClick={() => setIsMenuOpen(false)}
                                                aria-current={isActive ? "page" : undefined}
                                                className={`block px-4 py-3 text-base font-semibold rounded-xl transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-600 ${isActive
                                                    ? "bg-orange-100/80 text-orange-900 border border-orange-200"
                                                    : "text-stone-800 hover:text-orange-700 hover:bg-orange-50/70"
                                                    }`}
                                            >
                                                {link.label}
                                            </Link>
                                        </li>
                                    );
                                })}
                            </ul>
                        </nav>
                    </div>
                </div>
            )}
        </>
    );
}

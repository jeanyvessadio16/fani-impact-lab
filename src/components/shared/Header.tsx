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

    if (pathname === "/contact") {
        return null;
    }

    return (
        <>
            <header
                className={`fixed top-0 left-0 right-0 w-full z-40 transition-all duration-300 ${scrolled
                    ? "bg-white/95 backdrop-blur-md border-b border-stone-200/80 shadow-sm py-3 px-6 md:px-12"
                    : "bg-white/85 backdrop-blur-sm border-b border-orange-950/10 py-4 px-6 md:px-12"
                    }`}
            >
                <div className="max-w-7xl mx-auto flex justify-between items-center gap-4">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-3 group">
                        <div className="relative overflow-hidden rounded-lg p-1 bg-gradient-to-br from-orange-50 to-amber-100/60 border border-orange-200/60 group-hover:border-orange-400 transition-colors">
                            <Image
                                src="/logo/FIL-LOGO.png"
                                alt="LOGO FANI IMPACT LAB"
                                width={42}
                                height={42}
                                className="object-contain transition-transform duration-300 group-hover:scale-105"
                                priority
                            />
                        </div>
                        <span className="font-extrabold text-stone-900 text-lg tracking-tight hidden sm:inline-block">
                            FANI <span className="text-orange-800">IMPACT LAB</span>
                        </span>
                    </Link>

                    {/* Navigation Desktop */}
                    <nav className="hidden md:flex items-center gap-1 bg-stone-100/80 p-1.5 rounded-full border border-stone-200/60">
                        {NAV_LINKS.map((link) => (
                            <Link
                                key={link.id}
                                href={link.href}
                                className="px-4 py-1.5 text-sm font-medium text-stone-700 hover:text-orange-800 rounded-full hover:bg-white transition-all duration-200"
                            >
                                {link.label}
                            </Link>
                        ))}
                    </nav>

                    {/* Action CTA & Mobile Toggle */}
                    <div className="flex items-center gap-3">
                        {/* <Link
                            href="/contact"
                            className="hidden sm:inline-flex items-center justify-center bg-orange-800 hover:bg-orange-700 text-white rounded-full px-5 py-2 text-sm font-semibold shadow-sm shadow-orange-900/20 transition-all hover:scale-[1.02] active:scale-[0.98]"
                        >
                            Prendre RDV
                        </Link> */}

                        <button
                            type="button"
                            className="md:hidden p-2 text-stone-700 hover:text-orange-800 hover:bg-stone-100 rounded-lg transition-colors cursor-pointer"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            aria-label="Menu de navigation"
                        >
                            {isMenuOpen ? <X className="size-6" /> : <Menu className="size-6" />}
                        </button>
                    </div>
                </div>
            </header>

            {/* Menu Mobile - Overlay & Drawer */}
            {isMenuOpen && (
                <div className="fixed inset-0 z-50 md:hidden flex justify-end bg-stone-950/60 backdrop-blur-sm animate-in fade-in duration-200">
                    <div
                        className="absolute inset-0"
                        onClick={() => setIsMenuOpen(false)}
                    />

                    <div className="relative w-full max-w-xs h-full bg-white shadow-2xl flex flex-col p-6 overflow-y-auto z-10 animate-in slide-in-from-right duration-300">
                        <div className="flex items-center justify-between pb-5 border-b border-stone-100">
                            <div className="flex items-center gap-2">
                                <Image
                                    src="/logo/FIL-LOGO.png"
                                    alt="LOGO FANI IMPACT LAB"
                                    width={36}
                                    height={36}
                                    className="object-contain"
                                />
                                <span className="font-bold text-stone-900 text-sm">FANI IMPACT LAB</span>
                            </div>
                            <button
                                type="button"
                                onClick={() => setIsMenuOpen(false)}
                                className="p-2 text-stone-500 hover:text-stone-900 rounded-lg hover:bg-stone-100 transition-colors"
                            >
                                <X className="size-5" />
                            </button>
                        </div>

                        <nav className="my-8 flex-1">
                            <ul className="flex flex-col gap-2">
                                {NAV_LINKS.map((link) => (
                                    <li key={link.id}>
                                        <Link
                                            href={link.href}
                                            onClick={() => setIsMenuOpen(false)}
                                            className="block px-4 py-3 text-base font-medium text-stone-800 hover:text-orange-800 hover:bg-orange-50 rounded-xl transition-colors"
                                        >
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </nav>

                        <div className="pt-6 border-t border-stone-100 flex flex-col gap-3">
                            <Link
                                href="/contact"
                                onClick={() => setIsMenuOpen(false)}
                                className="w-full text-center bg-orange-800 hover:bg-orange-700 text-white rounded-xl py-3 text-sm font-semibold shadow-md transition-colors"
                            >
                                Prendre RDV
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
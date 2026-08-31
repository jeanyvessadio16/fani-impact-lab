"use client";

import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Send, Sparkles } from "lucide-react";

export default function ContactPage() {
    return (
        <main className="relative flex-1 bg-stone-50/60 min-h-screen">
            {/* ============================================================ */}
            {/* HERO SECTION CONTACT                                         */}
            {/* ============================================================ */}
            <section className="relative min-h-[48vh] flex items-center justify-center overflow-hidden bg-stone-950 text-white border-b border-stone-800">
                {/* Arrière-plan avec Image claire et bien visible */}
                <div
                    className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-50 scale-105"
                    style={{ backgroundImage: "url('/images/contact-hero.png')" }}
                />

                {/* Masque de lisibilité sombre uni et net (sans dégradé parasite) */}
                <div className="absolute inset-0 z-0 bg-stone-950/80" />

                <div className="relative z-10 w-full px-6 md:px-12 pt-32 pb-16 md:pt-40 md:pb-20 max-w-4xl mx-auto text-center flex flex-col items-center gap-4">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/20 border border-orange-400/40 backdrop-blur-md text-orange-200 text-xs sm:text-sm font-bold tracking-wide">
                        <Sparkles className="size-4 text-orange-400 animate-pulse" />
                        <span>Prendre contact</span>
                    </div>

                    <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
                        Discutons de votre <span className="text-orange-400">projet</span>
                    </h1>

                    <p className="text-base sm:text-lg text-stone-200 font-medium leading-relaxed max-w-xl">
                        Une question, une idée ou un projet à fort impact ? Notre équipe est à votre écoute pour vous accompagner.
                    </p>
                </div>
            </section>

            {/* ============================================================ */}
            {/* FORMULAIRE                                                    */}
            {/* ============================================================ */}
            <section className="relative z-20 -mt-10 pb-20 px-4 sm:px-6 md:px-12 flex justify-center">
                <Card className="w-full max-w-2xl border-stone-200 bg-white shadow-xl rounded-2xl text-stone-950 p-3 sm:p-6">
                    <CardHeader className="gap-2">
                        <CardTitle className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight">
                            Contactez-nous
                        </CardTitle>
                        <CardDescription className="text-stone-700 text-sm font-medium">
                            Remplissez le formulaire ci-dessous pour nous envoyer un message.
                        </CardDescription>
                    </CardHeader>

                    <CardContent>
                        <form onSubmit={(e) => e.preventDefault()} className="py-4 flex flex-col gap-5">
                            {/* Row 1: Prénom & Nom */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="flex flex-col gap-2">
                                    <Label htmlFor="firstname" className="text-stone-900 font-bold text-sm">
                                        Prénom <span className="text-orange-700" aria-hidden="true">*</span>
                                    </Label>
                                    <Input
                                        id="firstname"
                                        type="text"
                                        required
                                        aria-required="true"
                                        placeholder="Votre prénom"
                                        className="bg-white border-stone-300 text-stone-950 placeholder:text-stone-500 focus-visible:border-orange-600 focus-visible:ring-2 focus-visible:ring-orange-600/30 font-medium h-11"
                                    />
                                </div>

                                <div className="flex flex-col gap-2">
                                    <Label htmlFor="lastname" className="text-stone-900 font-bold text-sm">
                                        Nom <span className="text-orange-700" aria-hidden="true">*</span>
                                    </Label>
                                    <Input
                                        id="lastname"
                                        type="text"
                                        required
                                        aria-required="true"
                                        placeholder="Votre nom"
                                        className="bg-white border-stone-300 text-stone-950 placeholder:text-stone-500 focus-visible:border-orange-600 focus-visible:ring-2 focus-visible:ring-orange-600/30 font-medium h-11"
                                    />
                                </div>
                            </div>

                            {/* Row 2: Téléphone & Email */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="flex flex-col gap-2">
                                    <Label htmlFor="phone" className="text-stone-900 font-bold text-sm">
                                        Téléphone <span className="text-orange-700" aria-hidden="true">*</span>
                                    </Label>
                                    <Input
                                        id="phone"
                                        type="tel"
                                        required
                                        aria-required="true"
                                        placeholder="+221 77 000 00 00"
                                        className="bg-white border-stone-300 text-stone-950 placeholder:text-stone-500 focus-visible:border-orange-600 focus-visible:ring-2 focus-visible:ring-orange-600/30 font-medium h-11"
                                    />
                                </div>

                                <div className="flex flex-col gap-2">
                                    <Label htmlFor="email" className="text-stone-900 font-bold text-sm">
                                        Email <span className="text-orange-700" aria-hidden="true">*</span>
                                    </Label>
                                    <Input
                                        id="email"
                                        type="email"
                                        required
                                        aria-required="true"
                                        placeholder="exemple@email.com"
                                        className="bg-white border-stone-300 text-stone-950 placeholder:text-stone-500 focus-visible:border-orange-600 focus-visible:ring-2 focus-visible:ring-orange-600/30 font-medium h-11"
                                    />
                                </div>
                            </div>

                            {/* Row 3: Message */}
                            <div className="flex flex-col gap-2">
                                <Label htmlFor="message" className="text-stone-900 font-bold text-sm">
                                    Message <span className="text-orange-700" aria-hidden="true">*</span>
                                </Label>
                                <Textarea
                                    id="message"
                                    required
                                    aria-required="true"
                                    placeholder="Votre message..."
                                    rows={5}
                                    className="bg-white border-stone-300 text-stone-950 placeholder:text-stone-500 focus-visible:border-orange-600 focus-visible:ring-2 focus-visible:ring-orange-600/30 font-medium"
                                />
                            </div>

                            {/* Submit Button */}
                            <CardFooter className="px-0 pt-3 pb-0 bg-transparent border-none">
                                <Button
                                    type="submit"
                                    variant="default"
                                    size="xl"
                                    className="w-full bg-orange-700 hover:bg-orange-800 text-white font-semibold text-base py-3.5 h-13 rounded-xl shadow-xs transition-all cursor-pointer flex items-center justify-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-600 focus-visible:ring-offset-2"
                                >
                                    <Send className="size-4" />
                                    Envoyer le message
                                </Button>
                            </CardFooter>
                        </form>
                    </CardContent>
                </Card>
            </section>
        </main>
    );
}
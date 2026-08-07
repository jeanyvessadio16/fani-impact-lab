"use client";

import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Send, Sparkles } from "lucide-react";

export default function ContactPage() {
    return (
        <main className="relative flex-1 bg-stone-50/50 min-h-screen">
            {/* ============================================================ */}
            {/* HERO SECTION CONTACT                                         */}
            {/* ============================================================ */}
            <section className="relative min-h-[48vh] flex items-center justify-center overflow-hidden bg-stone-950 text-white border-b border-stone-800">
                {/* Arrière-plan avec Image claire et bien visible */}
                <div
                    className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-60 scale-105"
                    style={{ backgroundImage: "url('/images/contact-hero.png')" }}
                />

                {/* Overlays de Fondu pour Lisibilité Maximale du Texte et de l'Image */}
                <div className="absolute inset-0 z-0 bg-gradient-to-r from-stone-950/90 via-stone-950/70 to-stone-950/40" />
                <div className="absolute inset-0 z-0 bg-gradient-to-t from-stone-950/80 via-transparent to-stone-950/50" />

                <div className="relative z-10 w-full px-6 md:px-12 pt-32 pb-16 md:pt-40 md:pb-20 max-w-4xl mx-auto text-center flex flex-col items-center gap-4">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/20 border border-orange-400/30 backdrop-blur-md text-orange-300 text-xs sm:text-sm font-semibold tracking-wide">
                        <Sparkles className="size-4 text-orange-400 animate-pulse" />
                        <span>Prendre contact</span>
                    </div>

                    <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
                        Discutons de votre <span className="text-orange-400">projet</span>
                    </h1>

                    <p className="text-base sm:text-lg text-stone-200 leading-relaxed max-w-xl">
                        Une question, une idée ou un projet à fort impact ? Notre équipe est à votre écoute pour vous accompagner.
                    </p>
                </div>
            </section>

            {/* ============================================================ */}
            {/* FORMULAIRE                                                    */}
            {/* ============================================================ */}
            <section className="relative z-20 -mt-10 pb-20 px-4 sm:px-6 md:px-12 flex justify-center">
                <Card className="w-full max-w-2xl border-stone-200/90 bg-white shadow-xl rounded-2xl text-stone-900 p-3 sm:p-6">
                    <CardHeader className="gap-2">
                        <CardTitle className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight">
                            Contactez-nous
                        </CardTitle>
                        <CardDescription className="text-stone-600 text-sm">
                            Remplissez le formulaire ci-dessous pour nous envoyer un message.
                        </CardDescription>
                    </CardHeader>

                    <CardContent>
                        <form onSubmit={(e) => e.preventDefault()} className="py-4 flex flex-col gap-5">
                            {/* Row 1: Prénom & Nom */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="flex flex-col gap-2">
                                    <Label htmlFor="firstname" className="text-stone-800 font-semibold">
                                        Prénom <span className="text-orange-700">*</span>
                                    </Label>
                                    <Input
                                        id="firstname"
                                        type="text"
                                        placeholder="Votre prénom"
                                        className="bg-white border-stone-300 text-stone-900 placeholder:text-stone-400 focus-visible:border-orange-600 focus-visible:ring-orange-600/20"
                                    />
                                </div>

                                <div className="flex flex-col gap-2">
                                    <Label htmlFor="lastname" className="text-stone-800 font-semibold">
                                        Nom <span className="text-orange-700">*</span>
                                    </Label>
                                    <Input
                                        id="lastname"
                                        type="text"
                                        placeholder="Votre nom"
                                        className="bg-white border-stone-300 text-stone-900 placeholder:text-stone-400 focus-visible:border-orange-600 focus-visible:ring-orange-600/20"
                                    />
                                </div>
                            </div>

                            {/* Row 2: Téléphone & Email */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="flex flex-col gap-2">
                                    <Label htmlFor="phone" className="text-stone-800 font-semibold">
                                        Téléphone <span className="text-orange-700">*</span>
                                    </Label>
                                    <Input
                                        id="phone"
                                        type="tel"
                                        placeholder="+221 77 000 00 00"
                                        className="bg-white border-stone-300 text-stone-900 placeholder:text-stone-400 focus-visible:border-orange-600 focus-visible:ring-orange-600/20"
                                    />
                                </div>

                                <div className="flex flex-col gap-2">
                                    <Label htmlFor="email" className="text-stone-800 font-semibold">
                                        Email <span className="text-orange-700">*</span>
                                    </Label>
                                    <Input
                                        id="email"
                                        type="email"
                                        placeholder="exemple@email.com"
                                        className="bg-white border-stone-300 text-stone-900 placeholder:text-stone-400 focus-visible:border-orange-600 focus-visible:ring-orange-600/20"
                                    />
                                </div>
                            </div>

                            {/* Row 3: Message */}
                            <div className="flex flex-col gap-2">
                                <Label htmlFor="message" className="text-stone-800 font-semibold">
                                    Message <span className="text-orange-700">*</span>
                                </Label>
                                <Textarea
                                    id="message"
                                    placeholder="Votre message..."
                                    rows={5}
                                    className="bg-white border-stone-300 text-stone-900 placeholder:text-stone-400 focus-visible:border-orange-600 focus-visible:ring-orange-600/20"
                                />
                            </div>

                            {/* Submit Button */}
                            <CardFooter className="px-0 pt-3 pb-0 bg-transparent border-none">
                                <Button
                                    type="submit"
                                    variant="default"
                                    size="xl"
                                    className="w-full bg-orange-700 hover:bg-orange-800 text-white font-semibold text-base py-3.5 rounded-xl shadow-xs transition-all cursor-pointer flex items-center justify-center gap-2"
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
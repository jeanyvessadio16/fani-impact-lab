"use client";

import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";

import { FadeIn } from "@/components/ui/animated";

export default function ContactForm() {
    return (
        <FadeIn direction="up" className="w-full max-w-2xl">
            <Card className="w-full border-stone-200 bg-white shadow-xl rounded-2xl text-stone-950 p-3 sm:p-6">
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
                                    Prénom <span className="text-amber-600" aria-hidden="true">*</span>
                                </Label>
                                <Input
                                    id="firstname"
                                    type="text"
                                    required
                                    aria-required="true"
                                    placeholder="Votre prénom"
                                    className="bg-white border-stone-300 text-stone-950 placeholder:text-stone-500 focus-visible:border-blue-900 focus-visible:ring-2 focus-visible:ring-blue-900/20 font-medium h-11"
                                />
                            </div>

                            <div className="flex flex-col gap-2">
                                <Label htmlFor="lastname" className="text-stone-900 font-bold text-sm">
                                    Nom <span className="text-amber-600" aria-hidden="true">*</span>
                                </Label>
                                <Input
                                    id="lastname"
                                    type="text"
                                    required
                                    aria-required="true"
                                    placeholder="Votre nom"
                                    className="bg-white border-stone-300 text-stone-950 placeholder:text-stone-500 focus-visible:border-blue-900 focus-visible:ring-2 focus-visible:ring-blue-900/20 font-medium h-11"
                                />
                            </div>
                        </div>

                        {/* Row 2: Téléphone & Email */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="flex flex-col gap-2">
                                <Label htmlFor="phone" className="text-stone-900 font-bold text-sm">
                                    Téléphone <span className="text-amber-600" aria-hidden="true">*</span>
                                </Label>
                                <Input
                                    id="phone"
                                    type="tel"
                                    required
                                    aria-required="true"
                                    placeholder="+221 78 603 20 20"
                                    className="bg-white border-stone-300 text-stone-950 placeholder:text-stone-500 focus-visible:border-blue-900 focus-visible:ring-2 focus-visible:ring-blue-900/20 font-medium h-11"
                                />
                            </div>

                            <div className="flex flex-col gap-2">
                                <Label htmlFor="email" className="text-stone-900 font-bold text-sm">
                                    Email <span className="text-amber-600" aria-hidden="true">*</span>
                                </Label>
                                <Input
                                    id="email"
                                    type="email"
                                    required
                                    aria-required="true"
                                    placeholder="exemple@email.com"
                                    className="bg-white border-stone-300 text-stone-950 placeholder:text-stone-500 focus-visible:border-blue-900 focus-visible:ring-2 focus-visible:ring-blue-900/20 font-medium h-11"
                                />
                            </div>
                        </div>

                        {/* Row 3: Message */}
                        <div className="flex flex-col gap-2">
                            <Label htmlFor="message" className="text-stone-900 font-bold text-sm">
                                Message <span className="text-amber-600" aria-hidden="true">*</span>
                            </Label>
                            <Textarea
                                id="message"
                                required
                                aria-required="true"
                                placeholder="Votre message..."
                                rows={5}
                                className="bg-white border-stone-300 text-stone-950 placeholder:text-stone-500 focus-visible:border-blue-900 focus-visible:ring-2 focus-visible:ring-blue-900/20 font-medium"
                            />
                        </div>

                        {/* Submit Button */}
                        <CardFooter className="px-0 pt-3 pb-0 bg-transparent border-none">
                            <Button
                                type="submit"
                                variant="default"
                                size="xl"
                                className="w-full bg-[#0B1E3D] hover:bg-[#122B52] text-white font-semibold text-base py-3.5 h-13 rounded-xl shadow-xs transition-all cursor-pointer flex items-center justify-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                            >
                                <Send className="size-4 text-amber-400" />
                                Envoyer le message
                            </Button>
                        </CardFooter>
                    </form>
                </CardContent>
            </Card>
        </FadeIn>
    );
}

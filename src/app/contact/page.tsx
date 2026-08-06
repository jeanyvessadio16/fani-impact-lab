"use client";

import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";

export default function ContactPage() {
    return (
        <div className="min-h-screen bg-stone-950 text-stone-100 flex items-center justify-center p-4 sm:p-6 md:p-10 relative overflow-hidden selection:bg-orange-500 selection:text-white">
            {/* Subtle background glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-orange-600/10 rounded-full blur-[140px] pointer-events-none" />

            <Card className="relative z-10 w-full max-w-2xl border-stone-800 bg-stone-900/90 backdrop-blur-xl shadow-2xl rounded-2xl text-stone-100 p-2 sm:p-4">
                <CardHeader className="gap-2">
                    <CardTitle className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                        Contactez-nous
                    </CardTitle>
                    <CardDescription className="text-stone-400 text-sm">
                        Remplissez le formulaire ci-dessous pour nous envoyer un message.
                    </CardDescription>
                </CardHeader>

                <CardContent>
                    <form onSubmit={(e) => e.preventDefault()} className=" py-5 flex flex-col gap-5">
                        {/* Row 1: Prénom & Nom */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="flex flex-col gap-2">
                                <Label htmlFor="firstname" className="text-stone-200 font-medium">
                                    Prénom <span className="text-orange-400">*</span>
                                </Label>
                                <Input
                                    id="firstname"
                                    type="text"
                                    placeholder="Votre prénom"
                                    className="bg-stone-950/80 border-stone-800 text-stone-100 placeholder:text-stone-500 focus-visible:border-orange-500"
                                />
                            </div>

                            <div className="flex flex-col gap-2">
                                <Label htmlFor="lastname" className="text-stone-200 font-medium">
                                    Nom <span className="text-orange-400">*</span>
                                </Label>
                                <Input
                                    id="lastname"
                                    type="text"
                                    placeholder="Votre nom"
                                    className="bg-stone-950/80 border-stone-800 text-stone-100 placeholder:text-stone-500 focus-visible:border-orange-500"
                                />
                            </div>
                        </div>

                        {/* Row 2: Téléphone & Email */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="flex flex-col gap-2">
                                <Label htmlFor="phone" className="text-stone-200 font-medium">
                                    Téléphone <span className="text-orange-400">*</span>
                                </Label>
                                <Input
                                    id="phone"
                                    type="tel"
                                    placeholder="+221 77 000 00 00"
                                    className="bg-stone-950/80 border-stone-800 text-stone-100 placeholder:text-stone-500 focus-visible:border-orange-500"
                                />
                            </div>

                            <div className="flex flex-col gap-2">
                                <Label htmlFor="email" className="text-stone-200 font-medium">
                                    Email <span className="text-orange-400">*</span>
                                </Label>
                                <Input
                                    id="email"
                                    type="email"
                                    placeholder="exemple@email.com"
                                    className="bg-stone-950/80 border-stone-800 text-stone-100 placeholder:text-stone-500 focus-visible:border-orange-500"
                                />
                            </div>
                        </div>

                        {/* Row 3: Message */}
                        <div className="flex flex-col gap-2">
                            <Label htmlFor="message" className="text-stone-200 font-medium">
                                Message <span className="text-orange-400">*</span>
                            </Label>
                            <Textarea
                                id="message"
                                placeholder="Votre message..."
                                rows={5}
                                className="bg-stone-950/80 border-stone-800 text-stone-100 placeholder:text-stone-500 focus-visible:border-orange-500"
                            />
                        </div>

                        {/* Submit Button */}
                        <CardFooter className="px-0 pt-3 pb-0 bg-transparent border-none">
                            <Button
                                type="submit"
                                variant="default"
                                size="xl"
                                className="w-full bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-500 hover:to-amber-500 text-white font-semibold text-base py-3.5 rounded-xl shadow-lg shadow-orange-950/50 hover:shadow-orange-900/40 transition-all cursor-pointer flex items-center justify-center gap-2"
                            >
                                <Send className="size-4" />
                                Envoyer le message
                            </Button>
                        </CardFooter>
                    </form>
                </CardContent>
            </Card>
        </div>
    );
}
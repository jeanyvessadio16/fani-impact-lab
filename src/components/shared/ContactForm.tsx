"use client";

import { useState } from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import { FadeIn } from "@/components/ui/animated";
import { contactSchema, type ContactFormData } from "@/validations/contact";

export default function ContactForm() {
    const [values, setValues] = useState<ContactFormData>({
        firstname: "",
        lastname: "",
        phone: "",
        email: "",
        message: "",
    });

    const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});
    const [submissionStatus, setSubmissionStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
    const [statusMessage, setStatusMessage] = useState<string>("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setValues((prev) => ({ ...prev, [name]: value }));

        // Effacer l'erreur du champ modifié dès la saisie
        if (errors[name as keyof ContactFormData]) {
            setErrors((prev) => ({ ...prev, [name]: undefined }));
        }
    };

    const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setSubmissionStatus("loading");
        setErrors({});
        setStatusMessage("");

        // Validation Zod des données du formulaire
        const validationResult = contactSchema.safeParse(values);

        if (!validationResult.success) {
            const fieldErrors: Partial<Record<keyof ContactFormData, string>> = {};
            validationResult.error.issues.forEach((issue) => {
                const fieldName = issue.path[0] as keyof ContactFormData;
                if (fieldName && !fieldErrors[fieldName]) {
                    fieldErrors[fieldName] = issue.message;
                }
            });

            setErrors(fieldErrors);
            setSubmissionStatus("error");
            setStatusMessage("Veuillez corriger les erreurs ci-dessous.");
            return;
        }

        const data = validationResult.data;

        try {
            const formData = new FormData();
            formData.append("access_key", process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || "41226145-1d46-436b-9075-683b536577cb");
            formData.append("subject", `Nouveau message de contact - ${data.firstname} ${data.lastname}`);
            formData.append("from_name", `${data.firstname} ${data.lastname}`);
            formData.append("firstname", data.firstname);
            formData.append("lastname", data.lastname);
            formData.append("phone", data.phone);
            formData.append("email", data.email);
            formData.append("message", data.message);

            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData,
            });

            const resData = await response.json();

            if (resData.success) {
                setSubmissionStatus("success");
                setStatusMessage("Votre message a bien été envoyé ! Notre équipe vous recontactera très rapidement.");
                setValues({
                    firstname: "",
                    lastname: "",
                    phone: "",
                    email: "",
                    message: "",
                });
            } else {
                setSubmissionStatus("error");
                setStatusMessage(resData.message || "Une erreur est survenue lors de l'envoi du message. Veuillez réessayer.");
            }
        } catch (error) {
            console.error("Erreur Web3Forms:", error);
            setSubmissionStatus("error");
            setStatusMessage("Erreur de connexion au serveur. Veuillez vérifier votre réseau et réessayer.");
        }
    };

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
                    {/* Alerte de statut (succès ou erreur globale) */}
                    {submissionStatus === "success" && (
                        <div className="mb-6 p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-900 flex items-start gap-3 text-sm font-medium animate-in fade-in duration-300">
                            <CheckCircle2 className="size-5 text-emerald-600 shrink-0 mt-0.5" />
                            <div>
                                <p className="font-bold text-emerald-950">Message envoyé avec succès</p>
                                <p className="mt-0.5">{statusMessage}</p>
                            </div>
                        </div>
                    )}

                    {submissionStatus === "error" && statusMessage && (
                        <div className="mb-6 p-4 rounded-xl bg-red-50 border border-red-200 text-red-900 flex items-start gap-3 text-sm font-medium animate-in fade-in duration-300">
                            <AlertCircle className="size-5 text-red-600 shrink-0 mt-0.5" />
                            <div>
                                <p className="font-bold text-red-950">Attention</p>
                                <p className="mt-0.5">{statusMessage}</p>
                            </div>
                        </div>
                    )}

                    <form onSubmit={onSubmit} className="py-2 flex flex-col gap-5" noValidate>
                        {/* Row 1: Prénom & Nom */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="flex flex-col gap-1.5">
                                <Label htmlFor="firstname" className="text-stone-900 font-bold text-sm">
                                    Prénom <span className="text-amber-600" aria-hidden="true">*</span>
                                </Label>
                                <Input
                                    id="firstname"
                                    name="firstname"
                                    type="text"
                                    value={values.firstname}
                                    onChange={handleChange}
                                    placeholder="Votre prénom"
                                    aria-invalid={!!errors.firstname}
                                    className={`bg-white text-stone-950 placeholder:text-stone-400 font-medium h-11 transition-colors ${
                                        errors.firstname
                                            ? "border-red-500 focus-visible:border-red-500 focus-visible:ring-red-500/20"
                                            : "border-stone-300 focus-visible:border-blue-900 focus-visible:ring-2 focus-visible:ring-blue-900/20"
                                    }`}
                                />
                                {errors.firstname && (
                                    <p className="text-xs text-red-600 font-semibold">{errors.firstname}</p>
                                )}
                            </div>

                            <div className="flex flex-col gap-1.5">
                                <Label htmlFor="lastname" className="text-stone-900 font-bold text-sm">
                                    Nom <span className="text-amber-600" aria-hidden="true">*</span>
                                </Label>
                                <Input
                                    id="lastname"
                                    name="lastname"
                                    type="text"
                                    value={values.lastname}
                                    onChange={handleChange}
                                    placeholder="Votre nom"
                                    aria-invalid={!!errors.lastname}
                                    className={`bg-white text-stone-950 placeholder:text-stone-400 font-medium h-11 transition-colors ${
                                        errors.lastname
                                            ? "border-red-500 focus-visible:border-red-500 focus-visible:ring-red-500/20"
                                            : "border-stone-300 focus-visible:border-blue-900 focus-visible:ring-2 focus-visible:ring-blue-900/20"
                                    }`}
                                />
                                {errors.lastname && (
                                    <p className="text-xs text-red-600 font-semibold">{errors.lastname}</p>
                                )}
                            </div>
                        </div>

                        {/* Row 2: Téléphone & Email */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="flex flex-col gap-1.5">
                                <Label htmlFor="phone" className="text-stone-900 font-bold text-sm">
                                    Téléphone <span className="text-amber-600" aria-hidden="true">*</span>
                                </Label>
                                <Input
                                    id="phone"
                                    name="phone"
                                    type="tel"
                                    value={values.phone}
                                    onChange={handleChange}
                                    placeholder="+221 78 603 20 20"
                                    aria-invalid={!!errors.phone}
                                    className={`bg-white text-stone-950 placeholder:text-stone-400 font-medium h-11 transition-colors ${
                                        errors.phone
                                            ? "border-red-500 focus-visible:border-red-500 focus-visible:ring-red-500/20"
                                            : "border-stone-300 focus-visible:border-blue-900 focus-visible:ring-2 focus-visible:ring-blue-900/20"
                                    }`}
                                />
                                {errors.phone && (
                                    <p className="text-xs text-red-600 font-semibold">{errors.phone}</p>
                                )}
                            </div>

                            <div className="flex flex-col gap-1.5">
                                <Label htmlFor="email" className="text-stone-900 font-bold text-sm">
                                    Email <span className="text-amber-600" aria-hidden="true">*</span>
                                </Label>
                                <Input
                                    id="email"
                                    name="email"
                                    type="email"
                                    value={values.email}
                                    onChange={handleChange}
                                    placeholder="exemple@email.com"
                                    aria-invalid={!!errors.email}
                                    className={`bg-white text-stone-950 placeholder:text-stone-400 font-medium h-11 transition-colors ${
                                        errors.email
                                            ? "border-red-500 focus-visible:border-red-500 focus-visible:ring-red-500/20"
                                            : "border-stone-300 focus-visible:border-blue-900 focus-visible:ring-2 focus-visible:ring-blue-900/20"
                                    }`}
                                />
                                {errors.email && (
                                    <p className="text-xs text-red-600 font-semibold">{errors.email}</p>
                                )}
                            </div>
                        </div>

                        {/* Row 3: Message */}
                        <div className="flex flex-col gap-1.5">
                            <Label htmlFor="message" className="text-stone-900 font-bold text-sm">
                                Message <span className="text-amber-600" aria-hidden="true">*</span>
                            </Label>
                            <Textarea
                                id="message"
                                name="message"
                                value={values.message}
                                onChange={handleChange}
                                placeholder="Votre message..."
                                rows={5}
                                aria-invalid={!!errors.message}
                                className={`bg-white text-stone-950 placeholder:text-stone-400 font-medium transition-colors ${
                                    errors.message
                                        ? "border-red-500 focus-visible:border-red-500 focus-visible:ring-red-500/20"
                                        : "border-stone-300 focus-visible:border-blue-900 focus-visible:ring-2 focus-visible:ring-blue-900/20"
                                }`}
                            />
                            {errors.message && (
                                <p className="text-xs text-red-600 font-semibold">{errors.message}</p>
                            )}
                        </div>

                        {/* Submit Button */}
                        <CardFooter className="px-0 pt-3 pb-0 bg-transparent border-none">
                            <Button
                                type="submit"
                                variant="default"
                                size="xl"
                                disabled={submissionStatus === "loading"}
                                className="w-full bg-[#0B1E3D] hover:bg-[#122B52] text-white font-semibold text-base py-3.5 h-13 rounded-xl shadow-xs transition-all cursor-pointer flex items-center justify-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:opacity-70 disabled:cursor-not-allowed"
                            >
                                {submissionStatus === "loading" ? (
                                    <>
                                        <Loader2 className="size-4 text-amber-400 animate-spin" />
                                        Envoi en cours...
                                    </>
                                ) : (
                                    <>
                                        <Send className="size-4 text-amber-400" />
                                        Envoyer le message
                                    </>
                                )}
                            </Button>
                        </CardFooter>
                    </form>
                </CardContent>
            </Card>
        </FadeIn>
    );
}


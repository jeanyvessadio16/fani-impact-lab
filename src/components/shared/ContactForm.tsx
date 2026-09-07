"use client";

import { useState } from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Send, CheckCircle2, AlertCircle, Loader2, Building2, UserCheck } from "lucide-react";
import { FadeIn } from "@/components/ui/animated";
import { contactSchema, TYPE_BESOIN_OPTIONS, type ContactFormData } from "@/validations/contact";

export default function ContactForm() {
    const [values, setValues] = useState<ContactFormData>({
        firstname: "",
        lastname: "",
        organisation: "",
        fonction: "",
        phone: "",
        email: "",
        typeBesoin: "Conseil stratégique",
        message: "",
    });

    const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});
    const [submissionStatus, setSubmissionStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
    const [statusMessage, setStatusMessage] = useState<string>("");

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
        const { name, value } = e.target;
        setValues((prev) => ({ ...prev, [name]: value }));

        if (errors[name as keyof ContactFormData]) {
            setErrors((prev) => ({ ...prev, [name]: undefined }));
        }
    };

    const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setSubmissionStatus("loading");
        setErrors({});
        setStatusMessage("");

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
            formData.append("subject", `Demande de contact [${data.typeBesoin}] - ${data.firstname} ${data.lastname}`);
            formData.append("from_name", `${data.firstname} ${data.lastname}`);
            formData.append("firstname", data.firstname);
            formData.append("lastname", data.lastname);
            formData.append("organisation", data.organisation);
            formData.append("fonction", data.fonction);
            formData.append("phone", data.phone);
            formData.append("email", data.email);
            formData.append("typeBesoin", data.typeBesoin);
            formData.append("message", data.message);

            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData,
            });

            const resData = await response.json();

            if (resData.success) {
                setSubmissionStatus("success");
                setStatusMessage("Votre demande a bien été envoyée ! Notre équipe vous recontactera sous 24 à 48 heures.");
                setValues({
                    firstname: "",
                    lastname: "",
                    organisation: "",
                    fonction: "",
                    phone: "",
                    email: "",
                    typeBesoin: "Conseil stratégique",
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
            <Card className="w-full border-stone-200 bg-white shadow-xl rounded-2xl text-stone-950 p-4 sm:p-6">
                <CardHeader className="gap-2 pb-4">
                    <CardTitle className="text-2xl sm:text-3xl font-extrabold text-[#061224] tracking-tight">
                        Construisons le prochain impact.
                    </CardTitle>
                    <CardDescription className="text-stone-700 text-sm font-medium leading-relaxed">
                        Vous avez un projet, une problématique stratégique ou une initiative à développer ? Échangeons sur la manière dont FIL peut vous accompagner.
                    </CardDescription>
                </CardHeader>

                <CardContent>
                    {/* Statut */}
                    {submissionStatus === "success" && (
                        <div className="mb-6 p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-900 flex items-start gap-3 text-sm font-medium animate-in fade-in duration-300">
                            <CheckCircle2 className="size-5 text-emerald-600 shrink-0 mt-0.5" />
                            <div>
                                <p className="font-bold text-emerald-950">Demande envoyée avec succès</p>
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
                        {/* Nom & Prénom */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
                        </div>

                        {/* Organisation & Fonction */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="flex flex-col gap-1.5">
                                <Label htmlFor="organisation" className="text-stone-900 font-bold text-sm">
                                    Organisation <span className="text-amber-600" aria-hidden="true">*</span>
                                </Label>
                                <Input
                                    id="organisation"
                                    name="organisation"
                                    type="text"
                                    value={values.organisation}
                                    onChange={handleChange}
                                    placeholder="Nom de votre entreprise / institution"
                                    aria-invalid={!!errors.organisation}
                                    className={`bg-white text-stone-950 placeholder:text-stone-400 font-medium h-11 transition-colors ${
                                        errors.organisation
                                            ? "border-red-500 focus-visible:border-red-500 focus-visible:ring-red-500/20"
                                            : "border-stone-300 focus-visible:border-blue-900 focus-visible:ring-2 focus-visible:ring-blue-900/20"
                                    }`}
                                />
                                {errors.organisation && (
                                    <p className="text-xs text-red-600 font-semibold">{errors.organisation}</p>
                                )}
                            </div>

                            <div className="flex flex-col gap-1.5">
                                <Label htmlFor="fonction" className="text-stone-900 font-bold text-sm">
                                    Fonction <span className="text-amber-600" aria-hidden="true">*</span>
                                </Label>
                                <Input
                                    id="fonction"
                                    name="fonction"
                                    type="text"
                                    value={values.fonction}
                                    onChange={handleChange}
                                    placeholder="Ex: Fondateur, Directeur, Responsable..."
                                    aria-invalid={!!errors.fonction}
                                    className={`bg-white text-stone-950 placeholder:text-stone-400 font-medium h-11 transition-colors ${
                                        errors.fonction
                                            ? "border-red-500 focus-visible:border-red-500 focus-visible:ring-red-500/20"
                                            : "border-stone-300 focus-visible:border-blue-900 focus-visible:ring-2 focus-visible:ring-blue-900/20"
                                    }`}
                                />
                                {errors.fonction && (
                                    <p className="text-xs text-red-600 font-semibold">{errors.fonction}</p>
                                )}
                            </div>
                        </div>

                        {/* Email & Téléphone */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="flex flex-col gap-1.5">
                                <Label htmlFor="email" className="text-stone-900 font-bold text-sm">
                                    Email professionnel <span className="text-amber-600" aria-hidden="true">*</span>
                                </Label>
                                <Input
                                    id="email"
                                    name="email"
                                    type="email"
                                    value={values.email}
                                    onChange={handleChange}
                                    placeholder="exemple@organisation.com"
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

                            <div className="flex flex-col gap-1.5">
                                <Label htmlFor="phone" className="text-stone-900 font-bold text-sm">
                                    Téléphone / WhatsApp <span className="text-amber-600" aria-hidden="true">*</span>
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
                        </div>

                        {/* Type de besoin */}
                        <div className="flex flex-col gap-1.5">
                            <Label htmlFor="typeBesoin" className="text-stone-900 font-bold text-sm">
                                Type de besoin principal <span className="text-amber-600" aria-hidden="true">*</span>
                            </Label>
                            <select
                                id="typeBesoin"
                                name="typeBesoin"
                                value={values.typeBesoin}
                                onChange={handleChange}
                                aria-invalid={!!errors.typeBesoin}
                                className="w-full bg-white text-stone-950 font-medium h-11 px-3.5 rounded-md border border-stone-300 focus-visible:border-blue-900 focus-visible:ring-2 focus-visible:ring-blue-900/20 transition-colors cursor-pointer"
                            >
                                {TYPE_BESOIN_OPTIONS.map((option) => (
                                    <option key={option} value={option}>
                                        {option}
                                    </option>
                                ))}
                            </select>
                            {errors.typeBesoin && (
                                <p className="text-xs text-red-600 font-semibold">{errors.typeBesoin}</p>
                            )}
                        </div>

                        {/* Message */}
                        <div className="flex flex-col gap-1.5">
                            <Label htmlFor="message" className="text-stone-900 font-bold text-sm">
                                Précisions sur votre projet ou besoin <span className="text-amber-600" aria-hidden="true">*</span>
                            </Label>
                            <Textarea
                                id="message"
                                name="message"
                                value={values.message}
                                onChange={handleChange}
                                placeholder="Décrivez succinctement votre projet, vos attentes et vos délais..."
                                rows={4}
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
                                        Envoyer ma demande
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



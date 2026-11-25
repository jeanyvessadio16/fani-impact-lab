"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Send, CheckCircle2, AlertCircle, Loader2, ChevronDown } from "lucide-react";
import { FadeIn } from "@/components/ui/animated";
import { contactSchema, TYPE_BESOIN_OPTIONS, resolveNeedType, type ContactFormData } from "@/validations/contact";

export default function ContactForm() {
    const searchParams = useSearchParams();
    const typeParam = searchParams.get("type");
    const [prevTypeParam, setPrevTypeParam] = useState<string | null>(typeParam);
    const formRef = useRef<HTMLFormElement>(null);

    const [values, setValues] = useState<ContactFormData>(() => ({
        firstname: "",
        lastname: "",
        organisation: "",
        fonction: "",
        phone: "",
        email: "",
        typeBesoin: resolveNeedType(typeParam),
        message: "",
    }));

    const [botcheck, setBotcheck] = useState(false);
    const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});
    const [submissionStatus, setSubmissionStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
    const [statusMessage, setStatusMessage] = useState<string>("");

    if (typeParam !== prevTypeParam) {
        setPrevTypeParam(typeParam);
        if (typeParam) {
            setValues((prev) => ({
                ...prev,
                typeBesoin: resolveNeedType(typeParam),
            }));
        }
    }

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

        if (botcheck) {
            setSubmissionStatus("success");
            setStatusMessage("Votre demande a bien été envoyée ! Notre équipe vous recontactera sous 24 à 48 heures.");
            return;
        }

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

            const firstInvalidField = Object.keys(fieldErrors)[0];
            if (firstInvalidField) {
                const invalidElement = formRef.current?.querySelector<HTMLElement>(
                    `[name="${firstInvalidField}"]`
                );
                invalidElement?.focus();
            }
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
            formData.append("organisation", data.organisation || "Non renseigné");
            formData.append("fonction", data.fonction || "Non renseigné");
            formData.append("phone", data.phone || "Non renseigné");
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
                    typeBesoin: resolveNeedType(typeParam),
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
        <FadeIn direction="up" className="w-full">
            <Card className="w-full border-stone-200 bg-white shadow-xl rounded-2xl text-stone-950 p-4 sm:p-6">
                <CardHeader className="gap-2 pb-4">
                    <CardTitle className="text-2xl sm:text-3xl font-extrabold text-[#061224] tracking-tight">
                        Construisons le prochain impact.
                    </CardTitle>
                    <CardDescription className="text-stone-700 text-sm font-medium leading-relaxed">
                        Vous avez un projet, une problématique stratégique ou une initiative à développer ? Échangeons sur la manière dont FIL peut vous accompagner.
                    </CardDescription>
                    <p className="text-xs text-stone-600 pt-1">
                        Les champs marqués d&apos;un <span className="text-amber-700 font-bold">*</span> sont obligatoires.
                    </p>
                </CardHeader>

                <CardContent>
                    {/* Statut */}
                    {submissionStatus === "success" && (
                        <div
                            role="status"
                            aria-live="polite"
                            className="mb-6 p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-900 flex items-start gap-3 text-sm font-medium animate-in fade-in duration-300"
                        >
                            <CheckCircle2 className="size-5 text-emerald-700 shrink-0 mt-0.5" />
                            <div>
                                <p className="font-bold text-emerald-950">Demande envoyée avec succès</p>
                                <p className="mt-0.5">{statusMessage}</p>
                            </div>
                        </div>
                    )}

                    {submissionStatus === "error" && statusMessage && (
                        <div
                            role="alert"
                            className="mb-6 p-4 rounded-xl bg-red-50 border border-red-200 text-red-900 flex items-start gap-3 text-sm font-medium animate-in fade-in duration-300"
                        >
                            <AlertCircle className="size-5 text-red-600 shrink-0 mt-0.5" />
                            <div>
                                <p className="font-bold text-red-950">Attention</p>
                                <p className="mt-0.5">{statusMessage}</p>
                            </div>
                        </div>
                    )}

                    <form ref={formRef} onSubmit={onSubmit} className="py-2 flex flex-col gap-5" noValidate>
                        {/* Honeypot anti-spam */}
                        <input
                            type="checkbox"
                            name="botcheck"
                            checked={botcheck}
                            onChange={(e) => setBotcheck(e.target.checked)}
                            tabIndex={-1}
                            aria-hidden="true"
                            className="hidden"
                        />

                        {/* Nom & Prénom */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="flex flex-col gap-1.5">
                                <Label htmlFor="lastname" className="text-stone-900 font-bold text-sm">
                                    Nom <span className="text-amber-700" aria-hidden="true">*</span>
                                </Label>
                                <Input
                                    id="lastname"
                                    name="lastname"
                                    type="text"
                                    required
                                    autoComplete="family-name"
                                    value={values.lastname}
                                    onChange={handleChange}
                                    placeholder="Votre nom"
                                    aria-invalid={!!errors.lastname}
                                    aria-describedby={errors.lastname ? "lastname-error" : undefined}
                                    className={`bg-white text-stone-950 placeholder:text-stone-500 font-medium h-11 transition-colors ${
                                        errors.lastname
                                            ? "border-red-500 focus-visible:border-red-500 focus-visible:ring-red-500/20"
                                            : "border-stone-300 focus-visible:border-blue-900 focus-visible:ring-2 focus-visible:ring-blue-900/20"
                                    }`}
                                />
                                {errors.lastname && (
                                    <p id="lastname-error" className="text-xs text-red-700 font-semibold">{errors.lastname}</p>
                                )}
                            </div>

                            <div className="flex flex-col gap-1.5">
                                <Label htmlFor="firstname" className="text-stone-900 font-bold text-sm">
                                    Prénom <span className="text-amber-700" aria-hidden="true">*</span>
                                </Label>
                                <Input
                                    id="firstname"
                                    name="firstname"
                                    type="text"
                                    required
                                    autoComplete="given-name"
                                    value={values.firstname}
                                    onChange={handleChange}
                                    placeholder="Votre prénom"
                                    aria-invalid={!!errors.firstname}
                                    aria-describedby={errors.firstname ? "firstname-error" : undefined}
                                    className={`bg-white text-stone-950 placeholder:text-stone-500 font-medium h-11 transition-colors ${
                                        errors.firstname
                                            ? "border-red-500 focus-visible:border-red-500 focus-visible:ring-red-500/20"
                                            : "border-stone-300 focus-visible:border-blue-900 focus-visible:ring-2 focus-visible:ring-blue-900/20"
                                    }`}
                                />
                                {errors.firstname && (
                                    <p id="firstname-error" className="text-xs text-red-700 font-semibold">{errors.firstname}</p>
                                )}
                            </div>
                        </div>

                        {/* Organisation & Fonction (facultatifs) */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="flex flex-col gap-1.5">
                                <Label htmlFor="organisation" className="text-stone-900 font-bold text-sm">
                                    Organisation <span className="text-xs font-normal text-stone-600">(facultatif)</span>
                                </Label>
                                <Input
                                    id="organisation"
                                    name="organisation"
                                    type="text"
                                    autoComplete="organization"
                                    value={values.organisation}
                                    onChange={handleChange}
                                    placeholder="Nom de votre entreprise / institution"
                                    aria-invalid={!!errors.organisation}
                                    aria-describedby={errors.organisation ? "organisation-error" : undefined}
                                    className={`bg-white text-stone-950 placeholder:text-stone-500 font-medium h-11 transition-colors ${
                                        errors.organisation
                                            ? "border-red-500 focus-visible:border-red-500 focus-visible:ring-red-500/20"
                                            : "border-stone-300 focus-visible:border-blue-900 focus-visible:ring-2 focus-visible:ring-blue-900/20"
                                    }`}
                                />
                                {errors.organisation && (
                                    <p id="organisation-error" className="text-xs text-red-700 font-semibold">{errors.organisation}</p>
                                )}
                            </div>

                            <div className="flex flex-col gap-1.5">
                                <Label htmlFor="fonction" className="text-stone-900 font-bold text-sm">
                                    Fonction <span className="text-xs font-normal text-stone-600">(facultatif)</span>
                                </Label>
                                <Input
                                    id="fonction"
                                    name="fonction"
                                    type="text"
                                    autoComplete="organization-title"
                                    value={values.fonction}
                                    onChange={handleChange}
                                    placeholder="Ex: Fondateur, Directeur, Responsable..."
                                    aria-invalid={!!errors.fonction}
                                    aria-describedby={errors.fonction ? "fonction-error" : undefined}
                                    className={`bg-white text-stone-950 placeholder:text-stone-500 font-medium h-11 transition-colors ${
                                        errors.fonction
                                            ? "border-red-500 focus-visible:border-red-500 focus-visible:ring-red-500/20"
                                            : "border-stone-300 focus-visible:border-blue-900 focus-visible:ring-2 focus-visible:ring-blue-900/20"
                                    }`}
                                />
                                {errors.fonction && (
                                    <p id="fonction-error" className="text-xs text-red-700 font-semibold">{errors.fonction}</p>
                                )}
                            </div>
                        </div>

                        {/* Email & Téléphone */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="flex flex-col gap-1.5">
                                <Label htmlFor="email" className="text-stone-900 font-bold text-sm">
                                    Email professionnel <span className="text-amber-700" aria-hidden="true">*</span>
                                </Label>
                                <Input
                                    id="email"
                                    name="email"
                                    type="email"
                                    required
                                    autoComplete="email"
                                    value={values.email}
                                    onChange={handleChange}
                                    placeholder="exemple@organisation.com"
                                    aria-invalid={!!errors.email}
                                    aria-describedby={errors.email ? "email-error" : undefined}
                                    className={`bg-white text-stone-950 placeholder:text-stone-500 font-medium h-11 transition-colors ${
                                        errors.email
                                            ? "border-red-500 focus-visible:border-red-500 focus-visible:ring-red-500/20"
                                            : "border-stone-300 focus-visible:border-blue-900 focus-visible:ring-2 focus-visible:ring-blue-900/20"
                                    }`}
                                />
                                {errors.email && (
                                    <p id="email-error" className="text-xs text-red-700 font-semibold">{errors.email}</p>
                                )}
                            </div>

                            <div className="flex flex-col gap-1.5">
                                <Label htmlFor="phone" className="text-stone-900 font-bold text-sm">
                                    Téléphone / WhatsApp <span className="text-xs font-normal text-stone-600">(facultatif)</span>
                                </Label>
                                <Input
                                    id="phone"
                                    name="phone"
                                    type="tel"
                                    autoComplete="tel"
                                    value={values.phone}
                                    onChange={handleChange}
                                    placeholder="+221 78 603 20 20"
                                    aria-invalid={!!errors.phone}
                                    aria-describedby={errors.phone ? "phone-error" : undefined}
                                    className={`bg-white text-stone-950 placeholder:text-stone-500 font-medium h-11 transition-colors ${
                                        errors.phone
                                            ? "border-red-500 focus-visible:border-red-500 focus-visible:ring-red-500/20"
                                            : "border-stone-300 focus-visible:border-blue-900 focus-visible:ring-2 focus-visible:ring-blue-900/20"
                                    }`}
                                />
                                {errors.phone && (
                                    <p id="phone-error" className="text-xs text-red-700 font-semibold">{errors.phone}</p>
                                )}
                            </div>
                        </div>

                        {/* Type de besoin */}
                        <div className="flex flex-col gap-1.5">
                            <Label htmlFor="typeBesoin" className="text-stone-900 font-bold text-sm">
                                Type de besoin principal <span className="text-amber-700" aria-hidden="true">*</span>
                            </Label>
                            <div className="relative">
                                <select
                                    id="typeBesoin"
                                    name="typeBesoin"
                                    value={values.typeBesoin}
                                    onChange={handleChange}
                                    aria-invalid={!!errors.typeBesoin}
                                    aria-describedby={errors.typeBesoin ? "typeBesoin-error" : undefined}
                                    className={`w-full appearance-none bg-white text-stone-950 font-medium h-11 pl-3.5 pr-10 rounded-xl border transition-colors cursor-pointer focus-visible:outline-none ${
                                        errors.typeBesoin
                                            ? "border-red-500 focus-visible:border-red-500 focus-visible:ring-2 focus-visible:ring-red-500/20"
                                            : "border-stone-300 focus-visible:border-blue-900 focus-visible:ring-2 focus-visible:ring-blue-900/20"
                                    }`}
                                >
                                    {TYPE_BESOIN_OPTIONS.map((option) => (
                                        <option key={option} value={option}>
                                            {option}
                                        </option>
                                    ))}
                                </select>
                                <ChevronDown
                                    aria-hidden="true"
                                    className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 size-4 text-stone-600"
                                />
                            </div>
                            {errors.typeBesoin && (
                                <p id="typeBesoin-error" className="text-xs text-red-700 font-semibold">{errors.typeBesoin}</p>
                            )}
                        </div>

                        {/* Message */}
                        <div className="flex flex-col gap-1.5">
                            <Label htmlFor="message" className="text-stone-900 font-bold text-sm">
                                Précisions sur votre projet ou besoin <span className="text-amber-700" aria-hidden="true">*</span>
                            </Label>
                            <Textarea
                                id="message"
                                name="message"
                                required
                                value={values.message}
                                onChange={handleChange}
                                placeholder="Décrivez succinctement votre projet, vos attentes et vos délais..."
                                rows={4}
                                aria-invalid={!!errors.message}
                                aria-describedby={errors.message ? "message-error message-counter" : "message-counter"}
                                className={`bg-white text-stone-950 placeholder:text-stone-500 font-medium transition-colors ${
                                    errors.message
                                        ? "border-red-500 focus-visible:border-red-500 focus-visible:ring-red-500/20"
                                        : "border-stone-300 focus-visible:border-blue-900 focus-visible:ring-2 focus-visible:ring-blue-900/20"
                                }`}
                            />
                            <div className="flex items-start justify-between gap-3">
                                {errors.message ? (
                                    <p id="message-error" className="text-xs text-red-700 font-semibold">{errors.message}</p>
                                ) : (
                                    <span />
                                )}
                                <span
                                    id="message-counter"
                                    className={`text-xs tabular-nums shrink-0 ${
                                        values.message.length > 1000 ? "text-red-700 font-semibold" : "text-stone-600"
                                    }`}
                                >
                                    {values.message.length} / 1000
                                </span>
                            </div>
                        </div>

                        {/* Submit Button */}
                        <CardFooter className="px-0 pt-3 pb-0 bg-transparent border-none flex flex-col gap-3">
                            <Button
                                type="submit"
                                variant="navy"
                                size="xl"
                                disabled={submissionStatus === "loading"}
                                className="w-full min-h-[48px] text-base py-3.5 shadow-xs transition-all cursor-pointer flex items-center justify-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-800 focus-visible:ring-offset-2 disabled:opacity-70 disabled:cursor-not-allowed"
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

                            <p className="text-xs text-stone-600 text-center leading-relaxed">
                                Vos données sont utilisées uniquement pour répondre à votre demande.{" "}
                                <Link
                                    href="/politique-de-confidentialite"
                                    className="text-blue-900 font-semibold underline underline-offset-2 hover:text-blue-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-800 rounded"
                                >
                                    Politique de confidentialité
                                </Link>
                                .
                            </p>
                        </CardFooter>
                    </form>
                </CardContent>
            </Card>
        </FadeIn>
    );
}



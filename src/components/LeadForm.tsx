"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { leadFormSchema, type LeadFormData } from "@/lib/validation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Download, Loader2, CheckCircle2 } from "lucide-react";

export function LeadForm() {
  const [state, setState] = useState<"form" | "success">("form");
  const [downloadUrl, setDownloadUrl] = useState<string | null>(null);
  const [serverError, setServerError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LeadFormData>({
    resolver: zodResolver(leadFormSchema),
  });

  const onSubmit = async (data: LeadFormData) => {
    setServerError(null);
    try {
      const response = await fetch("/api/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        setServerError(result.error || "Error al enviar el formulario");
        return;
      }

      setDownloadUrl(result.downloadUrl);
      setState("success");
    } catch {
      setServerError("Error de conexión. Intentá nuevamente.");
    }
  };

  if (state === "success") {
    return (
      <Card className="w-full max-w-md mx-auto bg-gray-100/80 border-gray-200">
        <CardHeader className="text-center">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
            <CheckCircle2 className="h-8 w-8 text-primary" />
          </div>
          <CardTitle className="text-2xl">
            ¡Gracias por tu interés!
          </CardTitle>
          <CardDescription className="text-base">
            Tu catálogo está listo para descargar
          </CardDescription>
        </CardHeader>
        <CardContent className="flex justify-center">
          <Button size="lg" className="gap-2 text-base" asChild>
            <a href={downloadUrl!} download target="_blank" rel="noopener noreferrer">
              <Download className="h-5 w-5" />
              Descargar Catálogo
            </a>
          </Button>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="w-full max-w-md mx-auto bg-gray-100/80 border-gray-200">
      <CardHeader>
        <CardTitle className="text-2xl">Solicitá nuestro catálogo</CardTitle>
        <CardDescription className="text-base">
          Completá el formulario para descargar el catálogo de productos
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="companyName">Nombre de la empresa *</Label>
            <Input
              id="companyName"
              placeholder="Ej: Alimentos del Sur S.A."
              {...register("companyName")}
              aria-invalid={!!errors.companyName}
            />
            {errors.companyName && (
              <p className="text-sm text-destructive">
                {errors.companyName.message}
              </p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email *</Label>
            <Input
              id="email"
              type="email"
              placeholder="contacto@empresa.com"
              {...register("email")}
              aria-invalid={!!errors.email}
            />
            {errors.email && (
              <p className="text-sm text-destructive">
                {errors.email.message}
              </p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="contactName">Nombre de contacto *</Label>
            <Input
              id="contactName"
              placeholder="Nombre y apellido"
              {...register("contactName")}
              aria-invalid={!!errors.contactName}
            />
            {errors.contactName && (
              <p className="text-sm text-destructive">
                {errors.contactName.message}
              </p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone">Teléfono *</Label>
            <Input
              id="phone"
              type="tel"
              placeholder="+54 11 1234-5678"
              {...register("phone")}
              aria-invalid={!!errors.phone}
            />
            {errors.phone && (
              <p className="text-sm text-destructive">
                {errors.phone.message}
              </p>
            )}
          </div>

          {serverError && (
            <div className="rounded-md bg-destructive/10 p-3 text-sm text-destructive">
              {serverError}
            </div>
          )}

          <Button
            type="submit"
            className="w-full text-base"
            size="lg"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" />
                Enviando...
              </>
            ) : (
              "Solicitar catálogo"
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}

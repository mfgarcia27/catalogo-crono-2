"use client";

import { useState, useRef } from "react";
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
import { Upload, Loader2, CheckCircle2, FileUp } from "lucide-react";

export function UploadForm() {
  const [status, setStatus] = useState<"idle" | "uploading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");
  const [fileName, setFileName] = useState<string | null>(null);
  const fileRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    setFileName(file ? file.name : null);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("uploading");
    setMessage("");

    const formData = new FormData(e.currentTarget);

    try {
      const response = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();

      if (!response.ok) {
        setStatus("error");
        setMessage(result.error || "Error al subir el archivo");
        return;
      }

      setStatus("success");
      setMessage("Catálogo actualizado correctamente");
      if (fileRef.current) fileRef.current.value = "";
      setFileName(null);
    } catch {
      setStatus("error");
      setMessage("Error de conexión. Intentá nuevamente.");
    }
  };

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl flex items-center gap-2">
          <Upload className="h-6 w-6 text-primary" />
          Subir catálogo
        </CardTitle>
        <CardDescription className="text-base">
          Subí o reemplazá el archivo PDF del catálogo
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="password">Contraseña de administrador</Label>
            <Input
              id="password"
              name="password"
              type="password"
              placeholder="Ingresá la contraseña"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="file">Archivo PDF</Label>
            <div className="relative">
              <Input
                id="file"
                name="file"
                type="file"
                accept=".pdf,application/pdf"
                required
                ref={fileRef}
                onChange={handleFileChange}
                className="hidden"
              />
              <Button
                type="button"
                variant="outline"
                className="w-full justify-start gap-2 text-muted-foreground"
                onClick={() => fileRef.current?.click()}
              >
                <FileUp className="h-4 w-4" />
                {fileName || "Seleccionar archivo PDF..."}
              </Button>
            </div>
          </div>

          {message && (
            <div
              className={`rounded-md p-3 text-sm ${
                status === "success"
                  ? "bg-primary/10 text-primary"
                  : "bg-destructive/10 text-destructive"
              }`}
            >
              {status === "success" && (
                <CheckCircle2 className="inline h-4 w-4 mr-1" />
              )}
              {message}
            </div>
          )}

          <Button
            type="submit"
            className="w-full text-base"
            size="lg"
            disabled={status === "uploading"}
          >
            {status === "uploading" ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" />
                Subiendo...
              </>
            ) : (
              "Subir catálogo"
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}

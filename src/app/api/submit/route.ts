import { NextRequest, NextResponse } from "next/server";
import { leadFormSchema } from "@/lib/validation";
import { createLeadRecord } from "@/lib/airtable";
import { getCatalogUrl } from "@/lib/blob";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const result = leadFormSchema.safeParse(body);
    if (!result.success) {
      return NextResponse.json(
        { error: "Datos inválidos", details: result.error.flatten() },
        { status: 400 }
      );
    }

    await createLeadRecord(result.data);

    const catalogUrl = await getCatalogUrl();
    if (!catalogUrl) {
      return NextResponse.json(
        { error: "El catálogo aún no está disponible" },
        { status: 503 }
      );
    }

    return NextResponse.json({ downloadUrl: catalogUrl });
  } catch (error) {
    console.error("Error en submit:", error);
    return NextResponse.json(
      { error: "Error interno del servidor" },
      { status: 500 }
    );
  }
}

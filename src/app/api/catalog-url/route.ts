import { NextResponse } from "next/server";
import { getCatalogUrl } from "@/lib/blob";

export async function GET() {
  try {
    const url = await getCatalogUrl();
    if (!url) {
      return NextResponse.json(
        { error: "Catálogo no disponible" },
        { status: 404 }
      );
    }
    return NextResponse.json({ url });
  } catch (error) {
    console.error("Error en catalog-url:", error);
    return NextResponse.json(
      { error: "Error interno del servidor" },
      { status: 500 }
    );
  }
}

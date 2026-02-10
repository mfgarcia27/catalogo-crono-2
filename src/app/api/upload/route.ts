import { NextRequest, NextResponse } from "next/server";
import { uploadCatalog } from "@/lib/blob";

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const password = formData.get("password") as string;

    if (password !== process.env.ADMIN_PASSWORD) {
      return NextResponse.json(
        { error: "No autorizado" },
        { status: 401 }
      );
    }

    const file = formData.get("file") as File;
    if (!file || file.type !== "application/pdf") {
      return NextResponse.json(
        { error: "Se requiere un archivo PDF" },
        { status: 400 }
      );
    }

    const url = await uploadCatalog(file);
    return NextResponse.json({ url });
  } catch (error) {
    console.error("Error en upload:", error);
    return NextResponse.json(
      { error: "Error interno del servidor" },
      { status: 500 }
    );
  }
}

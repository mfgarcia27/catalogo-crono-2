import { put, list } from "@vercel/blob";

const CATALOG_FILENAME = "catalogo-crono.pdf";

export async function uploadCatalog(file: File): Promise<string> {
  const blob = await put(CATALOG_FILENAME, file, {
    access: "public",
    addRandomSuffix: false,
  });
  return blob.url;
}

export async function getCatalogUrl(): Promise<string | null> {
  const { blobs } = await list({ prefix: CATALOG_FILENAME });
  return blobs.length > 0 ? blobs[0].url : null;
}

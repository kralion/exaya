/**
 * Cloudinary image upload (unsigned preset, client-side).
 * Used with Ant Design Upload — no upload widget script.
 */

export const EXAYA_CLOUDINARY_FOLDER = "exaya";
export const CLOUDINARY_UPLOAD_PRESET = "ml_default";
export const MAX_CLOUDINARY_IMAGE_BYTES = 5_000_000;

interface UploadToCloudinaryOptions {
  base64Image: string;
  mimeType: string;
  folder: string;
  publicId?: string;
  uploadPreset?: string;
}

interface CloudinaryResponse {
  secure_url: string;
  public_id: string;
  format: string;
  width: number;
  height: number;
}

function readFileAsBase64(file: File): Promise<{ base64: string; mimeType: string }> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      const result = reader.result;
      if (typeof result !== "string") {
        reject(new Error("No se pudo leer el archivo"));
        return;
      }
      const match = /^data:([^;]+);base64,(.+)$/.exec(result);
      if (!match?.[1] || !match[2]) {
        reject(new Error("No se pudo codificar la imagen"));
        return;
      }
      resolve({ mimeType: match[1], base64: match[2] });
    };
    reader.onerror = () => reject(reader.error ?? new Error("Error al leer el archivo"));
    reader.readAsDataURL(file);
  });
}

/**
 * Upload image to Cloudinary (raw base64 payload + MIME type).
 */
export async function uploadToCloudinary({
  base64Image,
  mimeType,
  folder,
  publicId,
  uploadPreset = CLOUDINARY_UPLOAD_PRESET,
}: UploadToCloudinaryOptions): Promise<string> {
  const cloudName = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;
  if (!cloudName) {
    throw new Error("VITE_CLOUDINARY_CLOUD_NAME no está configurado");
  }

  const formData = new FormData();
  formData.append("file", `data:${mimeType};base64,${base64Image}`);
  formData.append("upload_preset", uploadPreset);
  formData.append("folder", folder);

  if (publicId) {
    formData.append("public_id", publicId);
  }

  const response = await fetch(
    `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
    {
      method: "POST",
      body: formData,
    }
  );

  if (!response.ok) {
    const errorText = await response.text();
    console.error("Cloudinary API Error:", {
      status: response.status,
      statusText: response.statusText,
      body: errorText,
    });
    throw new Error(
      `Error al subir la imagen (${response.status}). Intenta de nuevo.`
    );
  }

  const data = (await response.json()) as CloudinaryResponse;

  if (!data.secure_url) {
    throw new Error("Cloudinary no devolvió una URL válida");
  }

  return data.secure_url;
}

export interface UploadFileToCloudinaryOptions {
  folder?: string;
  publicId?: string;
  uploadPreset?: string;
}

/**
 * Upload a browser File (e.g. from Ant Design Upload) to Cloudinary.
 */
export async function uploadFileToCloudinary(
  file: File,
  options: UploadFileToCloudinaryOptions = {}
): Promise<string> {
  if (!file.type.startsWith("image/")) {
    throw new Error("Solo se permiten imágenes");
  }
  if (file.size > MAX_CLOUDINARY_IMAGE_BYTES) {
    throw new Error("La imagen no debe superar 5 MB");
  }

  const { base64, mimeType } = await readFileAsBase64(file);

  return uploadToCloudinary({
    base64Image: base64,
    mimeType,
    folder: options.folder ?? EXAYA_CLOUDINARY_FOLDER,
    publicId: options.publicId,
    uploadPreset: options.uploadPreset ?? CLOUDINARY_UPLOAD_PRESET,
  });
}

/**
 * Fetch a blob URL or same-origin URL, convert to base64, then upload.
 */
export async function uploadImageFromUri(
  imageUri: string,
  folder: string,
  publicId?: string
): Promise<string> {
  const response = await fetch(imageUri);
  const blob = await response.blob();
  const mimeType = blob.type || "image/jpeg";
  const file = new File([blob], "upload", { type: mimeType });
  return uploadFileToCloudinary(file, { folder, publicId });
}

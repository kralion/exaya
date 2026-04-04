/// <reference types="vite/client" />

declare module "*.png" {
  const src: string;
  export default src;
}

declare module "aos";

interface ImportMetaEnv {
  readonly VITE_APP_URL: string;
  readonly VITE_CLOUDINARY_CLOUD_NAME: string;
  readonly VITE_CLOUDINARY_API_KEY: string;
}

/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation.
 * This is especially useful for Docker builds.
 */
!process.env.SKIP_ENV_VALIDATION && (await import("./src/env.mjs"));

/** @type {import("next").NextConfig} */
const config = {
  reactStrictMode: true,

  /**
   * If you have the "experimental: { appDir: true }" setting enabled, then you
   * must comment the below `i18n` config out.
   *
   * @see https://github.com/vercel/next.js/issues/41980
   */
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
  compiler : {
   removeConsole: process.env.NODE_ENV === "production" 
  },
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "img.icons8.com" },
      { protocol: "https", hostname: "icons8.com" },
      { protocol: "https", hostname: "images.pexels.com" },
      { protocol: "https", hostname: "randomuser.me" },
      { protocol: "https", hostname: "upload.wikimedia.org" },
      { protocol: "https", hostname: "videos.pexels.com" },
      { protocol: "https", hostname: "image.shutterstock.com" },
      { protocol: "https", hostname: "imgur.com" },
      { protocol: "https", hostname: "media.istockphoto.com" },
      { protocol: "https", hostname: "ouch-cdn2.icons8.com" },
      { protocol: "https", hostname: "mighty.tools" },
      { protocol: "https", hostname: "o.remove.bg" },
      { protocol: "https", hostname: "fpdl.in" },
      { protocol: "https", hostname: "cdn-icons-png.flaticon.com" },
      { protocol: "https", hostname: "img.freepik.com" },
      { protocol: "https", hostname: "as2.ftcdn.net" },
      { protocol: "https", hostname: "logowik.com" },
      { protocol: "https", hostname: "cdn.worldvectorlogo.com" },
      { protocol: "https", hostname: "logodix.com" },
      { protocol: "https", hostname: "res.cloudinary.com" },
      { protocol: "https", hostname: "as1.ftcdn.net" },
    ],
  },
};

export default config;

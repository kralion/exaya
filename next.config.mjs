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
  images: {
    domains: [
      "img.icons8.com",
      "icons8.com",
      "images.pexels.com",
      "upload.wikimedia.org",
      "image.shutterstock.com",
      "i.imgur.com",
      "media.istockphoto.com",
      "images.pexels.com",
      "ouch-cdn2.icons8.com",
      "o.remove.bg",
      "fpdl.in",
      "ouch-cdn2.icons8.com",
      "cdn-icons-png.flaticon.com",
      "img.freepik.com",
      "as2.ftcdn.net",
      "as1.ftcdn.net",
    ],
  },
};

export default config;

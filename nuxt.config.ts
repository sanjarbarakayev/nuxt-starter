// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,
  css: ["~/assets/styles/main.css", "~/assets/icomoon/style.css"],
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@pinia/nuxt", "@nuxtjs/i18n"],

  i18n: {
    defaultLocale: "en",
    locales: [
      { code: "ru", file: "ru.json" },
      { code: "en", file: "en.json" }
    ],
    lazy: true,
    strategy: "no_prefix",
  },

  compatibilityDate: "2025-01-23",
});
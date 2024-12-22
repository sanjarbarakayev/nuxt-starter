// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,
  css: ["~/assets/styles/index.css", "~/assets/icomoon/style.css"],
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@pinia/nuxt", "@nuxtjs/i18n"],

  i18n: {
    defaultLocale: "uz",
    locales: [{ code: "uz", file: "uz.json" }],
    lazy: true,
    strategy: "no_prefix",
  },
});

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    pageTransition: { name: "page", mode: "out-in" },
    head: {
      charset: "utf-8",
      viewport: "width=500, initial-scale=1.0",
      title: process.env.WEBSITE_NAME_EN,
      meta: [{ name: "description", content: process.env.WEBSITE_NAME_EN }],
      // script: [
      //   {
      //     src: "/setTheme.js",
      //   },
      // ],
    },
  },

  devtools: { enabled: true },

  css: ["~/assets/styles/config.scss", "~/assets/styles/classes.scss"],

  modules: [
    "@nuxtjs/tailwindcss",
    "@pinia/nuxt",
    "@vueuse/nuxt",
    "@nuxtjs/i18n",
    "@nuxt/image",
    "nuxt-icon",
  ],

  runtimeConfig: {
    public: {
      WEBSITE_NAME_EN: process.env.WEBSITE_NAME_EN,
      WEBSITE_NAME_FA: process.env.WEBSITE_NAME_FA,
      WEBSITE_ADDRESS: process.env.WEBSITE_ADDRESS,
      API_BASE_URL: process.env.API_BASE_URL,
    },
  },

  // Tailwind options
  tailwindcss: {
    cssPath: ["~/assets/styles/tailwind.scss", { injectPosition: "first" }],
    configPath: "tailwind.config",
    exposeConfig: false,
    exposeLevel: 2,
    config: {},
    viewer: true,
  },
  // I18n options
  i18n: {
    vueI18n: "./utilities/i18n.config.ts",
    defaultLocale: "en",
    locales: [
      { code: "en", name: "English", dir: "ltr" },
      { code: "fa", name: "Farsi", dir: "rtl" },
    ],
  },

  // Image options
  image: {},
});

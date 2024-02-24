import svgLoader from "vite-svg-loader";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    pageTransition: { name: "page", mode: "out-in" },
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1, shrink-to-fit=no",
      title: process.env.WEBSITE_NAME_EN,
      meta: [{ name: "description", content: process.env.WEBSITE_NAME_EN }],
      script: [
        {
          src: "/styleConfig.js",
        },
      ],
    },
  },

  devtools: { enabled: true },

  css: ["~/assets/styles/config.scss", "~/assets/styles/classes.scss"],

  modules: [
    "@nuxtjs/tailwindcss",
    "@vueuse/nuxt",
    "@nuxtjs/i18n",
    "@nuxt/image",
  ],

  runtimeConfig: {
    public: {
      WEBSITE_NAME_EN: process.env.WEBSITE_NAME_EN,
      WEBSITE_NAME_FA: process.env.WEBSITE_NAME_FA,
      WEBSITE_ADDRESS: process.env.WEBSITE_ADDRESS,
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
    detectBrowserLanguage: false,
    strategy: "prefix_except_default",
    locales: [
      { code: "en", iso: "en-US", name: "English", dir: "ltr" },
      { code: "fa", iso: "fa-IR", name: "Farsi", dir: "rtl" },
    ],
  },

  // Image options
  image: {},

  build: {
    transpile: ["vue-toastification"],
  },

  // Vite config

  vite: {
    plugins: [svgLoader()],
  },
});

import en from "./locales/en.json";
import fa from "./locales/fa.json";

export default defineI18nConfig(() => ({
  fallbackLocale: "en",
  availableLocales: ["en", "fa"],
  locale: "en",
  legacy: false,
  messages: {
    en: en.messages,
    fa: fa.messages,
  },
}));

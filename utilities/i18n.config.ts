import en from "./locales/en.json";
import fa from "./locales/fa.json";

type MessageSchema = typeof en.messages;

export default defineI18nConfig(() => ({
  legacy: false,
  messages: {
    en: en.messages as MessageSchema,
    fa: fa.messages as MessageSchema,
  },
}));

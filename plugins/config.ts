import type { AvailableLanguageCodes } from "~/utilities/types";

export default defineNuxtPlugin((nuxtApp: any) => {
  console.log("config plugin!");

  if (process.client) {
    const currentLocale: AvailableLanguageCodes = nuxtApp.$i18n.locale.value;

    onChangeFontFamily(currentLocale);
  }
});

import type { AvailableLanguageCodes } from "~/utilities/types";

export const onChangeFontFamily = (language: AvailableLanguageCodes) => {
  const root = document.documentElement;

  switch (language) {
    case "en":
      root.style.setProperty("--font-family", "inter");
      break;

    case "fa":
      root.style.setProperty("--font-family", "vazir");
      break;
  }
};

import type { AvailableLanguageCodes, ThemeVariants } from "~/utilities/types";

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

export const changeColorScheme = (theme: ThemeVariants) => {
  if (theme === "auto") {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      document.documentElement.style.setProperty("color-scheme", "dark");
    } else if (window.matchMedia("(prefers-color-scheme: light)").matches) {
      document.documentElement.style.setProperty("color-scheme", "light");
    }
    return;
  } else if (theme === "dark") {
    document.documentElement.style.setProperty("color-scheme", "dark");
  } else {
    document.documentElement.style.setProperty("color-scheme", "light");
  }
};

export const isEven = (value: number) => {
  return value % 2 === 0;
};

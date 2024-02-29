import { useToast } from "vue-toastification";
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
  } else if (theme === "dark") {
    document.documentElement.style.setProperty("color-scheme", "dark");
  } else {
    document.documentElement.style.setProperty("color-scheme", "light");
  }
};
export const getHtmlRootTheme = (): "dark" | "light" => {
  let rootTheme: "dark" | "light" = "light";
  let theme = document.documentElement.style.getPropertyValue("color-scheme");

  if (useThemeState().value?.value === "auto") {
    if (theme === "dark") {
      rootTheme = "dark";
    } else if (theme === "light") {
      rootTheme = "light";
    }
  } else if (useThemeState().value?.value === "dark") {
    rootTheme = "dark";
  } else {
    rootTheme = "light";
  }

  return rootTheme;
};
export const isEven = (value: number) => {
  return value % 2 === 0;
};
export const makeNuxtElementOverflowHidden = () => {
  const nuxtElement = document.querySelector("#__nuxt");

  nuxtElement?.classList.add(...["overflow-hidden"]);
};
export const makeNuxtElementOverflowVisible = () => {
  const nuxtElement = document.querySelector("#__nuxt");

  nuxtElement?.classList.remove(...["overflow-hidden"]);
};
export const useToastMsg = (
  message: string,
  type: "error" | "success" | "info" | "warning"
): any => {
  const toast = useToast();
  return toast[type](message);
};

export const reduceString = (text: string, length: number): string => {
  if (text.length < length) {
    return text;
  }
  return text.substring(0, length) + "...";
};
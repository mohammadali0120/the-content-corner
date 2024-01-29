import { useIndex } from "~/store";
import type { Theme, ThemeVariants } from "~/utilities/types";

export const changeColorScheme = (theme: ThemeVariants) => {
  if (theme === "auto") {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      document.documentElement.style.setProperty("color-scheme", "dark");
    } else if (window.matchMedia("(prefers-color-scheme: light)").matches) {
      document.documentElement.style.setProperty("color-scheme", "light");
    }
    return
  } else if (theme === "dark") {
    document.documentElement.style.setProperty("color-scheme", "dark");
  } else {
    document.documentElement.style.setProperty("color-scheme", "light");
  }
};

export default () => {
  const selectedTheme = useColorMode();
  const { tm } = useI18n();
  const useIndexStore = useIndex();

  const getCurrentTheme = computed((): Theme => {
    const localStorageColorScheme = localStorage.getItem("vueuse-color-scheme");
    const themes = tm("other.themes") as Theme[];

    const foundedTheme = themes.find((theme: Theme) => {
      return theme.value === localStorageColorScheme;
    });

    return foundedTheme as Theme;
  });

  const onChangeTheme = (theme: ThemeVariants) => {
    useIndexStore.changeTheme(theme);
    selectedTheme.value = theme;
    changeColorScheme(theme);
  };

  return {
    // computed properties
    getCurrentTheme,
    // methods
    onChangeTheme,
  };
};

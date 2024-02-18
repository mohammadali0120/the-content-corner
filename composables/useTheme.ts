import { useIndex } from "~/store";
import type { Theme, ThemeVariants } from "~/utilities/types";

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

    return foundedTheme!;
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

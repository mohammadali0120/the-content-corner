import type { Theme } from "~/utilities/types";

export const useCurrentThemeState = () => useState<Theme | null>("currentTheme", () => null);

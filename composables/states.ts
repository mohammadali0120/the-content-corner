import type { Theme } from "~/utilities/types";

export const LoadingDuration = 1000;

export const useCurrentThemeState = () => useState<Theme | null>("currentTheme", () => null);

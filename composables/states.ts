import type { Theme, User } from "~/utilities/types";

export const LoadingDuration = 1000;
export const ToastDuration = 4000;
export const TokenMaxAge = 60 * 60 * 24 * 180; // 6 month

export const useThemeState = () => useState<Theme | null>("theme", () => null);
export const useLoadingState = () => useState<boolean>("loading", () => true);
export const useAuthState = () => useState<User | null>("user", () => null);

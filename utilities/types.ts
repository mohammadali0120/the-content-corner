// Types
export type AvailableLanguageCodes = "en" | "fa";
export type ThemeVariants = "dark" | "light" | "auto";
// Enums

// Interfaces
export interface Link {
  text: string;
  link: string;
}
export interface Language {
  text: string;
  value: string;
  link: string;
  imgSrc?: string;
  dir?: "rtl" | "ltr";
}
export interface Icon {
  prefix: string;
  value: string;
}
export interface Theme {
  text: string;
  value: ThemeVariants;
  icon?: Icon;
}

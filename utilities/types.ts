// Types
export type AvailableLanguageCodes = "en" | "fa";
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

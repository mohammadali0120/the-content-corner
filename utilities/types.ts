// Types
export type AvailableLanguageCodes = "en" | "fa";
export type ThemeVariants = "dark" | "light" | "auto";
export type ToastPosition =
  | "topRight"
  | "topLeft"
  | "center"
  | "bottomRight"
  | "bottomLeft";
export type ToastType = "danger" | "success" | "warning";
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
export interface Podcast {
  id: number;
  title: string;
  image: null | string;
  description: string;
  link: string;
}
export interface Video {
  id: number;
  title: string;
  image: null | string;
  description: string;
  link: string;
}

export interface Post {
  id: number;
  title: string;
  description: string;
}

import { defineStore } from "pinia";
import type { ThemeVariants } from "~/utilities/types";

interface State {
  theme: ThemeVariants;
  loading: boolean;
}

export const useIndex = defineStore("index", {
  state: (): State => ({
    theme: "auto",
    loading: true,
  }),
  getters: {
    // sidebarMenu: (state: State) => state.sidebarMenu,
    getTheme: (state: State) => state.theme,
    getLoading: (state: State) => state.loading,
  },
  actions: {
    changeTheme(value: ThemeVariants) {
      this.theme = value;
    },
    changeLoading(value: boolean) {
      this.loading = value;
    },
  },
});

import { defineStore } from "pinia";
import type { ThemeVariants } from "~/utilities/types";

interface State {
  // sidebarMenu: boolean;
  theme: ThemeVariants;
  // loading: boolean;
}

export const useIndex = defineStore("index", {
  state: (): State => ({
    // sidebarMenu: false,
    theme: "auto",
    // loading: true,
  }),
  getters: {
    // sidebarMenu: (state: State) => state.sidebarMenu,
    getTheme: (state: State) => state.theme,
    // getLoading: (state: State) => state.loading,
  },
  actions: {
    // changeSidebarMenuByType(type: "open" | "close") {
    //   if (type === "open") {
    //     this.sidebarMenu = true;
    //   } else {
    //     this.sidebarMenu = false;
    //   }
    // },
    changeTheme(value: ThemeVariants) {
      this.theme = value;
    },
    // changeLoading(value: boolean) {
    //   this.loading = value;
    // },
  },
});

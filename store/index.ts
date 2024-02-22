import { defineStore } from "pinia";

interface State {
  loading: boolean;
}

export const useIndex = defineStore("index", {
  state: (): State => ({
    loading: true,
  }),
  getters: {
    // sidebarMenu: (state: State) => state.sidebarMenu,
    getLoading: (state: State) => state.loading,
  },
  actions: {
    changeLoading(value: boolean) {
      this.loading = value;
    },
  },
});

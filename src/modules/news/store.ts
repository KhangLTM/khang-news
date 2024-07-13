import { defineStore, acceptHMRUpdate } from "pinia";
import type { News } from "./userType";

export const useUserStore = defineStore("userStore", {
  state: (): { news: News[] } => ({
    news: [],
  }),
  getters: {},
  actions: {
    setNews(news: News[]) {
      this.news = news ?? [];
    },
  },
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useUserStore, import.meta.hot));
}

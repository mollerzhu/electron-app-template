import { defineStore } from "pinia"
export const mainStore = defineStore("main", {
  // state: () => ({ count: 0 }),
  state: () => {
    return {
      locale: "zhCn",
    }
  },
  getters: {},
  actions: {},
})

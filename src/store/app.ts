// store/modules/app

import { defineStore } from "pinia"
import i18n from "@/locales"

export const settingStore = defineStore("app", {
  state: () => {
    return {
      locale: localStorage.getItem("lang") || "zhCn",
    }
  },
  actions: {
    SET_LOCALE(locale: any) {
      //语言切换
      this.locale = locale
      localStorage.setItem("lang", locale)
      i18n.global.locale.value = locale
    },
  },
})

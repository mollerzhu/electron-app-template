/* import { createI18n } from "vue-i18n"
import zhCn from "./zh-cn"
import en from "./en"

// 创建 i18n
const i18n = createI18n({
  legacy: false,
  globalInjection: true,
  locale: localStorage.getItem("lang") || "zhCn",
  messages: {
    zhCn,
    en,
  },
})

export default i18n */

import { createI18n } from "vue-i18n"
// import 可以直接到导入 json 文件并使用
import zhCn from "./zh-cn.json"
import en from "./en.json"

const i18n = createI18n({
  legacy: false,
  globalInjection: true,
  locale: localStorage.getItem("lang") || "zhCn",
  messages: {
    zhCn,
    en,
  },
})
export default i18n // 安装后导出到 main.js 中在容器的 Vue 容器实例中进行使用 new Vue({i18n})

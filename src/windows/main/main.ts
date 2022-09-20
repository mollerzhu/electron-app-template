import { createApp } from "vue"
import App from "./App.vue"
import i18n from "@/locales"
import { router } from "@/router"
import { createPinia } from "pinia"
const pinia = createPinia()
import ElementPlus from "element-plus"
import "element-plus/dist/index.css"
import "element-plus/theme-chalk/dark/css-vars.css"
import "@/assets/icons/iconfont.css"
import "@/styles/dark.scss"
import "@/styles/index.scss"

const app = createApp(App)
app.use(i18n)
app.use(router)
app.use(pinia)
app.use(ElementPlus)
router.isReady().then(() => {
  app.mount("#app").$nextTick(() => {
    postMessage({ payload: "removeLoading" }, "*")
  })
})

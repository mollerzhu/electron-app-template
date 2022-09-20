import { createApp } from "vue"
import App from "./App.vue"
import ElementPlus from "element-plus"
import "element-plus/dist/index.css"
import "element-plus/theme-chalk/dark/css-vars.css"
import "@/assets/icons/iconfont.css"
import "@/styles/dark.scss"
import "@/styles/index.scss"

const app = createApp(App)
app.use(ElementPlus)

app.mount("#app").$nextTick(() => {
  postMessage({ payload: "removeLoading" }, "*")
})

import { join } from "path"
export const mainWindowConfig = {
  width: 1200,
  height: 800,
  show: false,
  frame: false,
  webPreferences: {
    preload: join(__dirname, "../preload/index.js"),
    contextIsolation: false,
    nodeIntegration: true,
    webSecurity: false,
    devTools: process.env.NODE_ENV === "development",
    scrollBounce: process.platform === "darwin",
  },
}

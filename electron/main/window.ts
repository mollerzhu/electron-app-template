import { app, shell, BrowserWindow } from "electron"
import { join } from "path"
import { mainWindowConfig } from "./config"
export function createWindow(name: string) {
  let window = new BrowserWindow({
    ...Object.assign(mainWindowConfig, {}),
  })
  const ROOT_PATH = {
    // /dist
    dist: join(__dirname, "../.."),
    // /dist or /public
    public: join(__dirname, app.isPackaged ? "../.." : "../../../public"),
  }
  const indexHtml = join(ROOT_PATH.dist, `${name}.html`)
  if (app.isPackaged) {
    window.loadFile(indexHtml)
  } else {
    window.loadURL(
      `http://${process.env["VITE_DEV_SERVER_HOST"]}:${process.env["VITE_DEV_SERVER_PORT"]}/${name}.html`
    )
    window.webContents.openDevTools({ mode: "detach" })
  }

  window.webContents.setWindowOpenHandler(({ url }) => {
    if (url.startsWith("https:")) shell.openExternal(url)
    return { action: "deny" }
  })
  window.once("ready-to-show", () => {
    window.show()
  })
  return window
}

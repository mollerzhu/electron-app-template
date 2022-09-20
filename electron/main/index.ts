import { app, BrowserWindow, ipcMain } from "electron"
import { release } from "os"
import { createWindow } from "./window"
import { upgradeHandle } from "./updater"
import "./ipc"

if (release().startsWith("6.1")) app.disableHardwareAcceleration()
if (process.platform === "win32") app.setAppUserModelId(app.getName())

if (!app.requestSingleInstanceLock()) {
  app.quit()
  process.exit(0)
}

//Close electron security warnings.
process.env["ELECTRON_DISABLE_SECURITY_WARNINGS"] = "true"

let win: BrowserWindow | null

app.whenReady().then(() => {
  win = createWindow("index")
  //upgradeHandle(win)
})

app.on("window-all-closed", () => {
  win = null
  if (process.platform !== "darwin") app.quit()
})

app.on("activate", () => {
  const allWindows = BrowserWindow.getAllWindows()
  if (allWindows.length) {
    allWindows[0].focus()
  } else {
    win = createWindow("index")
  }
})
ipcMain.handle("check-update", () => {
  console.log("check-update")
  upgradeHandle(win)
})

import { app, BrowserWindow, ipcMain, webContents } from "electron"
import { createWindow } from "./window"
ipcMain.handle("win-min", (event, args) => {
  BrowserWindow.fromWebContents(event.sender)?.minimize()
})
ipcMain.handle("win-max", async (event, args) => {
  if (BrowserWindow.fromWebContents(event.sender)?.isMaximized()) {
    BrowserWindow.fromWebContents(event.sender)?.restore()
  } else {
    BrowserWindow.fromWebContents(event.sender)?.maximize()
  }
})
ipcMain.handle("win-close", (event, args) => {
  BrowserWindow.fromWebContents(event.sender)?.close()
})
ipcMain.handle("app-close", (event, args) => {
  app.quit()
})
ipcMain.handle("win-change-theme", (event, args) => {
  webContents.getAllWebContents().forEach((event) => {
    event.send("changeThemeNow")
  })
})
ipcMain.handle("child-window", (event, arg) => {
  createWindow("child")
})

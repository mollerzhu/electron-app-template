# electron-app-template

🥳 `Electron` + `Vue` + `Vite` template with several functions.

![GitHub stars](https://img.shields.io/github/stars/mollerzhu/electron-app-template?color=fa6470&style=flat)
![GitHub forks](https://img.shields.io/github/forks/mollerzhu/electron-app-template?style=flat)

## Features

📦 Base on [electron-vue-vite](https://github.com/electron-vite/electron-vite-vue)  
🎯 Build-in Element-plus UI modules  
🌱 SQLite3 support  
🌞 Light/Dark mode change  
🔩 Update function  
🖥 Child window management  
🎱 Internationalization support

## Directory

```diff
+ ├─┬ electron
+ │ ├─┬ main
+ │ │ ├── index.ts    entry of Electron-main
+ │ │ ├── config.ts    default window config
+ │ │ ├── ipc.ts    window controller ipc event
+ │ │ ├── window.ts    window controller
+ │ │ └── updater.ts    updater function
+ │ └─┬ preload
+ │   └── index.ts    entry of Electron-preload
  ├─┬ src
  │ └─┬─ windows
  │   └─┬─ main
  │     └─── main.ts       entry of Electron-renderer
  ├── index.html
  ├── package.json
  └── vite.config.ts
```

## 🥳 `npmRebuild`

** In electron-builder.json5, here is a setting `npmRebuild`, if you want to rebuild some modules like sqlite3, set it to `true`.

## 🚨 `dependencies` vs `devDependencies`

**Put Node.js packages in `dependencies`**

**e.g.** `electron-store` `sqlite3` `serilaport` `mongodb` ...others

**Put Web packages in `devDependencies`**

**e.g.** `vue` `vue-router` `vuex` `pinia` `element-plus` `ant-design-vue` `axios` ...others

See more 👉 [dependencies vs devDependencies](https://github.com/electron-vite/vite-plugin-electron-renderer#dependencies-vs-devdependencies)

## 🚨 ESM packages

**e.g.** `node-fetch` `execa` `got` ...others

1. `npm i vite-plugin-esmodule -D`
2. Configure in vite.config.ts

```ts
import esmodule from 'vite-plugin-esmodule'
export default {
  plugins: [
    esmodule(['got', 'execa', 'node-fetch']),
  ],
}
```

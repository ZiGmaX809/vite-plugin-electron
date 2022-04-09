# vite-plugin-electron

Integrate Vite and Electron

[![NPM version](https://img.shields.io/npm/v/vite-plugin-electron.svg?style=flat)](https://npmjs.org/package/vite-plugin-electron)
[![NPM Downloads](https://img.shields.io/npm/dm/vite-plugin-electron.svg?style=flat)](https://npmjs.org/package/vite-plugin-electron)

Example 👉 [vite-plugin-electron-quick-start](https://github.com/caoxiemeihao/vite-plugin-electron-quick-start)

## Usage

vite.config.ts

```js
import { defineConfig } from 'vite'
import electron from 'vite-plugin-electron'
import electronConfig from './vite-electron.config'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    electron(electronConfig),
  ],
})
```

vite-electron.config.ts

```js
import { defineConfig } from 'vite-plugin-electron'

export default defineConfig({
  main: {
    entry: 'electron-main.ts',
  },
})
```

---

If you only need to build the Renderer-process, you can just use the `vite-plugin-electron/renderer` plugin

Example 👉 [electron-vite-vue](https://github.com/electron-vite/electron-vite-vue)
![GitHub stars](https://img.shields.io/github/stars/caoxiemeihao/electron-vite-vue?color=fa6470)

renderer/vite.config.ts

```js
import electronRenderer from 'vite-plugin-electron/renderer'

export default {
  plugins: [
    electronRenderer(),
  ],
}
```

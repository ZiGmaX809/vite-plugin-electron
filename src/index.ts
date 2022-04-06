import type { Configuration } from './types'
import type { Plugin } from 'vite'
import renderer from '../renderer'
import { bootstrap } from './serve'
import { build } from './build'

export { Configuration }

export function defineConfig(config: Configuration) {
  return config
}

export default function electron(config: Configuration): Plugin[] {
  const name = 'vite-plugin-electron'

  return [
    {
      name: `${name}:serve`,
      apply: 'serve',
      configureServer(server) {
        const printUrls = server.printUrls
        server.printUrls = function () {
          printUrls()
          bootstrap(config, server)
        }
      },
    },
    {
      name: `${name}:build`,
      apply: 'build',
      async configResolved(viteConfig) {
        await build(config, viteConfig)
      },
    },
    ...(config.main.nodeIntegration ? renderer() : []),
  ]
}
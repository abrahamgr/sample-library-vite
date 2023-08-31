import { resolve } from 'node:path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dts from 'vite-plugin-dts'
import * as localPackage from './package.json'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    dts({
      exclude: [
        'src/App.tsx',
        'src/main.tsx'
      ]
    })
  ],
  server: {
    port: 8080,
  },
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'CustomLibrary',
      formats: [ 'es' ],
      fileName: (format) => `custom-library-${format}.js`
    },
    rollupOptions: {
      external: [
        ...Object.keys(localPackage.peerDependencies)
      ]
    }
  },
})

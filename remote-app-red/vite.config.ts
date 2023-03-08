// Plugins
import vue from '@vitejs/plugin-vue'
import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'
import federation from "@originjs/vite-plugin-federation"
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js'

// Utilities
import { defineConfig } from 'vite'
import { fileURLToPath, URL } from 'node:url'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({ 
      template: { transformAssetUrls }
    }),
    // https://github.com/vuetifyjs/vuetify-loader/tree/next/packages/vite-plugin
    vuetify({
      autoImport: true,
      styles: {
        configFile: 'src/styles/settings.scss',
      },
    }),
    cssInjectedByJsPlugin(),
    federation({
      name: 'remote-app-red',
      filename: 'remoteEntry.js',
      exposes: {
          './RedView': './src/views/Home.vue',
      },
      shared: ['vue', 'pinia', 'vuetify']
    }),
  ],
  define: { 'process.env': {} },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
    extensions: [
      '.js',
      '.json',
      '.jsx',
      '.mjs',
      '.ts',
      '.tsx',
      '.vue',
    ],
  },
  base: 'http://localhost:3002',
  server: {
    port: 3002,
  },
  build: {
    target: ["chrome89", "edge89", "firefox89", "safari15"]
 }
})

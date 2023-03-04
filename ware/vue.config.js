import { defineConfig } from 'vite'

import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  transpileDependencies: true,
  lintOnSave: false,
  server: {
    open:true,
    https: false,
    host: "localhost",
    port: 9000,
    proxy: 'http://localhost:8000'
  }
})

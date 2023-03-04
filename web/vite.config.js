import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    open:true,
    https: false,
    host: "localhost",
    port: 9000,
    proxy: 'http://localhost:8000'
  },
  resolve:{
    alias:{
      '@':path.resolve(__dirname,'src')
    }
  }
})

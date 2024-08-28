import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default () => {
  // const base = process.env.NODE_ENV === "development" ? '' : '/rapira-blog/';
  
  return defineConfig({
    plugins: [
      vue(),
    ],
    // base: base,
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
      },
    },
  })
}
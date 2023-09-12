import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 3001,
    watch: {
      usePolling: true,
    },
    hmr: {
      host: 'localhost',
    }
  },
  plugins: [react()],
})

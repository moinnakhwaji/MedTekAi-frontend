import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),tailwindcss()],
  server: {
    // host: '0.0.0.0',  // Exposes the app to the local network
    // port: 5173,        // You can change this if needed
    proxy: {
      '/api': {
          target: 'http://127.0.0.1:8000', // Your backend server
          changeOrigin: true,
          secure: false,
      },
  },
  }
})

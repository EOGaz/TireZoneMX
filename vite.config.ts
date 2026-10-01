import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  base: './',
  plugins: [react(), tailwindcss()],
  // three.js (~680 kB) is lazy-loaded by the 3D tire in the stats section.
  build: { chunkSizeWarningLimit: 800 },
})

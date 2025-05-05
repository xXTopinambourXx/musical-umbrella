import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react()
  ],
  css: {
    postcss: './postcss.config.js', // Spécifie explicitement le fichier de configuration PostCSS
  },
  server: {
    port: 3000, // Port local
    host: '0.0.0.0', // Écoute sur toutes les interfaces réseau
  },
})

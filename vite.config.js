import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: "/PortafolioMarcoIslas/",
  plugins: [react()],
  // Necesario para GitHub Pages si el sitio está en https://usuario.github.io/mi-portafolio/
  // Si tu repo se llama distinto, cambia 'mi-portafolio' por el nombre del repo
})

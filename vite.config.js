import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from "@tailwindcss/vite"

export default defineConfig({
  base: "/Macbook_Landing_Page_Clone/",
  plugins: [react(), tailwindcss()],
})

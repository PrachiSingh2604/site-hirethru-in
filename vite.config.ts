import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/site-hirethru-in/', // 👈 This must match your repo name exactly
  plugins: [react()],
})

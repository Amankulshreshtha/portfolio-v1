import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  // dev only: lets any Cloudflare quick-tunnel host reach the dev server
  // .impeccable/ holds design-tool caches that otherwise trigger full page reloads in dev
  server: { allowedHosts: ['.trycloudflare.com'], watch: { ignored: ['**/.impeccable/**'] } },
})

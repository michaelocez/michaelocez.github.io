import react from '@vitejs/plugin-react'
import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // shadcn/ObsidianUI-style `@/` imports resolve to `src/`.
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  // `base` intentionally left as the default `/`: correct for a
  // `<user>.github.io` user site and portable to Vercel.
})

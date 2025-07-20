import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [
    react({
      eslint: {
        // Disable ESLint entirely
        enabled: false,
      },
    }),
  ],
})

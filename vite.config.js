import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"
import vitePrerender from "vite-plugin-prerender"

export default defineConfig({
  plugins: [
    react(),
    vitePrerender({
      staticDir: path.join(__dirname, 'dist'),
      routes: [
        '/', 
        '/jurisdictions',
        '/jurisdictions/mauritius',
        '/jurisdictions/cayman-islands',
        '/jurisdictions/switzerland'
      ],
    })
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('framer-motion')) {
              return 'vendor-framer';
            }
            if (id.includes('react') || id.includes('react-dom') || id.includes('react-router-dom')) {
              return 'vendor-react';
            }
            return 'vendor';
          }
        },
      },
    },
  },
})

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'
import { fileURLToPath } from 'url'

// Get __dirname equivalent in ESM
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// Build target: 'local' for dist/, 'voilaco' for Laravel integration
const buildTarget = process.env.BUILD_TARGET || 'local'

// Client slug for multi-tenant deployment (default: core)
const clientSlug = process.env.CLIENT_SLUG || 'core'

// Determine output directory based on build target
const getOutDir = () => {
  if (buildTarget === 'voilaco') {
    return path.resolve(__dirname, `../voilaco/public/websites/${clientSlug}`)
  }
  return 'dist'
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },

  // Base path for assets - uses /websites/{slug}/ when deployed to voilaco
  base: buildTarget === 'voilaco' ? `/websites/${clientSlug}/` : '/',

  server: {
    port: 5173,
    host: true,
    // Proxy API requests to Laravel during development
    proxy: {
      '/api': {
        target: 'http://core.voilaco.test',
        changeOrigin: true,
        secure: false,
      },
    },
  },
  build: {
    outDir: getOutDir(),
    sourcemap: buildTarget !== 'voilaco', // No sourcemaps in production
    assetsDir: 'assets',
    emptyOutDir: true,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          uikit: ['@voilajsx/uikit']
        },
        assetFileNames: (assetInfo) => {
          // Keep font files in assets/files/ to match expected paths
          if (assetInfo.name && /\.(woff2?|eot|ttf|otf)$/i.test(assetInfo.name)) {
            return 'assets/files/[name].[ext]';
          }
          return 'assets/[name]-[hash].[ext]';
        }
      }
    }
  }
})
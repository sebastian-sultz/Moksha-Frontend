import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('react')) {
              return id.includes('react-dom') 
                ? 'vendor-react-dom' 
                : 'vendor-react';
            }
            if (id.includes('framer-motion')) return 'vendor-framer-motion';
            if (id.includes('lodash')) return 'vendor-lodash';
            return 'vendor-other';
          }
        }
      }
    },
    chunkSizeWarningLimit: 1000 // Optional: Increase if needed
  }
});


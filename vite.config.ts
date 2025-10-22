// This is a Next.js project, not a Vite project
// The build system should use 'next build' instead of 'vite build'
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    outDir: 'frontend/.next',
  },
  // Redirect to indicate this is misconfigured
  server: {
    proxy: {
      '/': 'http://localhost:3000'
    }
  }
});

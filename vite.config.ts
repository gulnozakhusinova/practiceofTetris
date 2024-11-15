import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    open: true, // opens the browser when the server starts
  },
  build: {
    outDir: 'dist',
  },
});
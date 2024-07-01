import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist', // Ensure this matches your publish directory
    rollupOptions: {
      input: '/src/main.jsx', // Adjust this path to match your project structure
    },
  },
});

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    headers: {
      // Add editor.unlayer.com to the allowed sources
      'Permissions-Policy': 'unload=(self "https://editor.unlayer.com" "https://unlayer.com")',
    },
  },
});

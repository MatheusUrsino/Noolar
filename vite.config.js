import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      external: ['boxicons'], // Se você tem dependências externas
      resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],  // Certifique-se de que as extensões corretas estão aqui
        alias: {
          '@src': path.resolve(__dirname, 'src'),
        },
      },
    },
  },
});

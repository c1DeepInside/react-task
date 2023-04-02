/// <reference types="vitest" />
/// <reference types="vite/client" />

import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    coverage: {
      provider: 'c8',
      all: true,
      skipFull: false,
      reporter: 'text',
      include: ['**/src/**'],
      exclude: ['**/interfaces/**', '**/tests/**', 'src/vite-env.d.ts'],
    },
  },
});

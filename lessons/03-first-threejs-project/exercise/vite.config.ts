import { defineConfig } from "vite";

// @ts-ignore
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig(async () => ({
  plugins: [],

  resolve: {
    alias: {
      // @ts-ignore
      '@': path.resolve(__dirname, './src'),
    },
  },

  server: {
    port: 5173,
    host: true
  }

}));

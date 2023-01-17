import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import checker from 'vite-plugin-checker';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    checker({
      typescript: true,
      vueTsc: true,
      eslint: {
        lintCommand: 'eslint "./src/**/*.{ts,tsx,vue}"', // for example, lint .ts & .tsx
      },
      stylelint: {
        // for example, lint .css and .vue
        lintCommand: 'stylelint ./src/**/*.{scss,vue}',
      },
    }),
  ],
});

import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Optional: Set base if deploying to GitHub Pages subdirectory
  // base: '/samvrit.github.io/',
});

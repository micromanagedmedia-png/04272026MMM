import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';
import node from '@astrojs/node';
import netlify from '@astrojs/netlify';

export default defineConfig({
  output: 'static',
  adapter: process.env.NETLIFY ? netlify() : node({
    mode: 'standalone'
  }),
  vite: {
    plugins: [tailwindcss()]
  },
  server: {
    host: '0.0.0.0',
    port: 3000
  },
  integrations: [react()]
});
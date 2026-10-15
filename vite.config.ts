import { defineConfig, type Plugin } from 'vite';
import react from '@vitejs/plugin-react';

// CSP برای حالت production (GitHub Pages هدر سفارشی ندارد، پس از meta استفاده می‌کنیم).
// اگر API جداگانه دارید، origin آن را به connect-src اضافه کنید.
const csp = [
  "default-src 'self'",
  "script-src 'self'",
  "style-src 'self'",
  "img-src 'self' data: https:",
  "font-src 'self'",
  "frame-src https://www.youtube-nocookie.com https://discord.com",
  "connect-src 'self'",
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self'",
].join('; ');

const cspPlugin = (): Plugin => ({
  name: 'inject-csp',
  apply: 'build',
  transformIndexHtml: () => [
    {
      tag: 'meta',
      attrs: { 'http-equiv': 'Content-Security-Policy', content: csp },
      injectTo: 'head-prepend',
    },
  ],
});

export default defineConfig({
  // برای GitHub Pages: VITE_BASE=/نام-مخزن/
  base: process.env.VITE_BASE ?? '/',
  plugins: [react(), cspPlugin()],
});

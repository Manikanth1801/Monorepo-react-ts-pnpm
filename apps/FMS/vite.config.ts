import { defineConfig } from "vite";
import federation from "@originjs/vite-plugin-federation";
import dns from "dns";
import react from "@vitejs/plugin-react";

dns.setDefaultResultOrder("verbatim");

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "@hx-apps/fms",
      shared: ["react"],
    }),
  ],
  server: {
    port: 3002 
  },
  build: {
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
  resolve: {
    alias: {
      '@shared': '../../shared', 
    },
  },
});

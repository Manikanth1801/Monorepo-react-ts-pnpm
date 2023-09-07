import { defineConfig } from "vite";
import federation from "@originjs/vite-plugin-federation";
import dns from "dns";
import react from "@vitejs/plugin-react";

dns.setDefaultResultOrder("verbatim");

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "@hx-apps/hrms",
      shared: ["react"],
    }),
  ],
  server: {
    port: 3001,
  },
  build: {
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
  resolve: {
    alias: {
      "@shared": "../../shared",
    },
  },
});

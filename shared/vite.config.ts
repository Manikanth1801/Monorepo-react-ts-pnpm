import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";
import dns from "dns";
dns.setDefaultResultOrder("verbatim");

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "@hx-apps/shared",
      shared: ["react"],
    }),
  ],
  server: {
    port: 3000,
  },

  build: {
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
});

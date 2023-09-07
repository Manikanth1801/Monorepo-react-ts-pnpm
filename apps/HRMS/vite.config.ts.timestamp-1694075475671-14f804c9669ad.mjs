// vite.config.ts
import { defineConfig } from "file:///E:/Companies/Humblx/x/UI/hx-apps/node_modules/.pnpm/vite@4.4.5_@types+node@20.5.9/node_modules/vite/dist/node/index.js";
import federation from "file:///E:/Companies/Humblx/x/UI/hx-apps/node_modules/.pnpm/@originjs+vite-plugin-federation@1.1.10/node_modules/@originjs/vite-plugin-federation/dist/index.js";
import dns from "dns";
import react from "file:///E:/Companies/Humblx/x/UI/hx-apps/node_modules/.pnpm/@vitejs+plugin-react@4.0.3_vite@4.4.5/node_modules/@vitejs/plugin-react/dist/index.mjs";
dns.setDefaultResultOrder("verbatim");
var vite_config_default = defineConfig({
  plugins: [
    react(),
    federation({
      name: "@hx-apps/hrms",
      //   remotes: {
      //     shared: "http://localhost:5002/assets/shared.js",
      //   },
      shared: ["react"]
    })
  ],
  // preview: {
  //   host: "localhost",
  //   port: 5001,
  //   open: true,
  //   cors: true,
  // },
  build: {
    target: "esnext",
    minify: false,
    cssCodeSplit: false
  },
  resolve: {
    alias: {
      "@shared": "../../shared"
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJFOlxcXFxDb21wYW5pZXNcXFxcSHVtYmx4XFxcXHhcXFxcVUlcXFxcaHgtYXBwc1xcXFxhcHBzXFxcXEhSTVNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkU6XFxcXENvbXBhbmllc1xcXFxIdW1ibHhcXFxceFxcXFxVSVxcXFxoeC1hcHBzXFxcXGFwcHNcXFxcSFJNU1xcXFx2aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRTovQ29tcGFuaWVzL0h1bWJseC94L1VJL2h4LWFwcHMvYXBwcy9IUk1TL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSBcInZpdGVcIjtcbmltcG9ydCBmZWRlcmF0aW9uIGZyb20gXCJAb3JpZ2luanMvdml0ZS1wbHVnaW4tZmVkZXJhdGlvblwiO1xuaW1wb3J0IGRucyBmcm9tIFwiZG5zXCI7XG5pbXBvcnQgcmVhY3QgZnJvbSBcIkB2aXRlanMvcGx1Z2luLXJlYWN0XCI7XG5cbmRucy5zZXREZWZhdWx0UmVzdWx0T3JkZXIoXCJ2ZXJiYXRpbVwiKTtcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcbiAgcGx1Z2luczogW1xuICAgIHJlYWN0KCksXG4gICAgZmVkZXJhdGlvbih7XG4gICAgICBuYW1lOiBcIkBoeC1hcHBzL2hybXNcIixcbiAgICAvLyAgIHJlbW90ZXM6IHtcbiAgICAvLyAgICAgc2hhcmVkOiBcImh0dHA6Ly9sb2NhbGhvc3Q6NTAwMi9hc3NldHMvc2hhcmVkLmpzXCIsXG4gICAgLy8gICB9LFxuICAgICAgc2hhcmVkOiBbXCJyZWFjdFwiXSxcbiAgICB9KSxcbiAgXSxcbiAgLy8gcHJldmlldzoge1xuICAvLyAgIGhvc3Q6IFwibG9jYWxob3N0XCIsXG4gIC8vICAgcG9ydDogNTAwMSxcbiAgLy8gICBvcGVuOiB0cnVlLFxuICAvLyAgIGNvcnM6IHRydWUsXG4gIC8vIH0sXG4gIGJ1aWxkOiB7XG4gICAgdGFyZ2V0OiBcImVzbmV4dFwiLFxuICAgIG1pbmlmeTogZmFsc2UsXG4gICAgY3NzQ29kZVNwbGl0OiBmYWxzZSxcbiAgfSxcbiAgcmVzb2x2ZToge1xuICAgIGFsaWFzOiB7XG4gICAgICAnQHNoYXJlZCc6ICcuLi8uLi9zaGFyZWQnLFxuICAgIH0sXG4gIH0sXG59KTtcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBZ1UsU0FBUyxvQkFBb0I7QUFDN1YsT0FBTyxnQkFBZ0I7QUFDdkIsT0FBTyxTQUFTO0FBQ2hCLE9BQU8sV0FBVztBQUVsQixJQUFJLHNCQUFzQixVQUFVO0FBRXBDLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLFNBQVM7QUFBQSxJQUNQLE1BQU07QUFBQSxJQUNOLFdBQVc7QUFBQSxNQUNULE1BQU07QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUlOLFFBQVEsQ0FBQyxPQUFPO0FBQUEsSUFDbEIsQ0FBQztBQUFBLEVBQ0g7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQU9BLE9BQU87QUFBQSxJQUNMLFFBQVE7QUFBQSxJQUNSLFFBQVE7QUFBQSxJQUNSLGNBQWM7QUFBQSxFQUNoQjtBQUFBLEVBQ0EsU0FBUztBQUFBLElBQ1AsT0FBTztBQUFBLE1BQ0wsV0FBVztBQUFBLElBQ2I7QUFBQSxFQUNGO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K

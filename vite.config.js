// vite.config.js
import { defineConfig } from "vite";
import path from "path";

export default defineConfig({
  base: "/newOjjo",
  server: {
    port: 3000,
  },
  resolve: {
    alias: {
      "@src": path.resolve(__dirname, "src"),
      "@images": path.resolve(__dirname, "src/public/images"),
    },
  },
  build: {
    outDir: "dist", // Папка, куда будут сохраняться собранные файлы
  },
});

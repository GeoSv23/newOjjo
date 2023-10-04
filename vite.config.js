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
      // Добавьте другие алиасы по мере необходимости
    },
  },
  build: {
    outDir: "dist", // Папка, куда будут сохраняться собранные файлы
    minify: true, // Минификация JS, CSS, HTML и JSON файлов
    sourcemap: false, // Отключение генерации sourcemaps для продакшн сборки
  },
});

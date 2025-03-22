import { defineConfig } from "vite";

export default defineConfig({
  base: "./",
  server: {
    watch: {
      usePolling: true, // Usa polling para detectar cambios
    }
  } // Usa rutas relativas en los enlaces generados en el HTML
});

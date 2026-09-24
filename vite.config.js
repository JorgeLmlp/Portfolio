import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { fileURLToPath } from "node:url";
import tailwindcss from "@tailwindcss/vite";

const currentDirectory = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: "/Portfolio/",
  resolve: {
    alias: {
      "@": path.resolve(currentDirectory, "./src"),
    },
  },
});

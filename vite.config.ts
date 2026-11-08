import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// GitHub Pages project site: https://teassty.github.io/estetika-zdorovya/
export default defineConfig({
  plugins: [react()],
  base: "/estetika-zdorovya/",
});

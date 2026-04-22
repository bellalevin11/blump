import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

const site = process.env.SITE_URL ?? "https://blumpmusic.com";
const base = process.env.BASE_PATH ?? "/";

export default defineConfig({
  site,
  base,
  output: "static",
  vite: {
    plugins: [tailwindcss()]
  }
});

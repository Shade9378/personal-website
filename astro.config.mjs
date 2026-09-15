import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://shade9378.github.io",
  base:
    process.env.NODE_ENV === "production"
      ? "/personal-website"
      : "/",
});
// @ts-check

import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import { defineConfig } from "astro/config";

import netlify from "@astrojs/netlify";

/*const site = (
  process.env.PUBLIC_SITE_URL || "https://lexlociabogados.com"
).replace(/\/+$/, "");*/

// https://astro.build/config
export default defineConfig({
  //site,
  trailingSlash: "never",
  integrations: [mdx(), sitemap()],
  adapter: netlify(),
});

import type { APIRoute } from "astro";
import { SITE_URL } from "../consts";

export const GET: APIRoute = ({ site }) => {
  const baseUrl = (site?.origin || SITE_URL).replace(/\/+$/, "");

  const body = [
    "User-agent: *",
    "Allow: /",
    "Disallow: /api/",
    "",
    `Sitemap: ${baseUrl}/sitemap-index.xml`,
  ].join("\n");

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
};

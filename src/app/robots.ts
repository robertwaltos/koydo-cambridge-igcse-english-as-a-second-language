import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/", disallow: ["/api/", "/account/"] }],
    sitemap: "https://cambridge-igcse-english-as-a-second-language.koydo.app/sitemap.xml",
    host: "https://cambridge-igcse-english-as-a-second-language.koydo.app",
  };
}

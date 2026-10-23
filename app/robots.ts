import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
      // Explicitly allowing Answer Engines and AI Bots for AEO
      {
        userAgent: [
          "GPTBot", 
          "ChatGPT-User", 
          "Google-Extended", 
          "Anthropic-ai", 
          "PerplexityBot",
          "ClaudeBot"
        ],
        allow: "/",
      }
    ],
    sitemap: "https://www.steelrack.co/sitemap.xml",
  };
}

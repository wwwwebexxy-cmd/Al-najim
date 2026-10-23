import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const imageUrls = Array.from({ length: 87 }, (_, index) =>
    `https://www.steelrack.co/media/image-${String(index + 1).padStart(3, "0")}.webp`
  );

  return [
    {
      url: "https://www.steelrack.co/",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
      images: [
        "https://www.steelrack.co/hero-attractive.png",
        ...imageUrls,
      ],
    },
  ];
}

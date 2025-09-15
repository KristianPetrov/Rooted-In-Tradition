import type { MetadataRoute } from "next";

export default function sitemap (): MetadataRoute.Sitemap
{
    const baseUrl = "https://rootedintradition.org";
    const now = new Date().toISOString();

    return [
        {
            url: `${baseUrl}/`,
            lastModified: now,
            changeFrequency: "monthly",
            priority: 1,
        },
    ];
}



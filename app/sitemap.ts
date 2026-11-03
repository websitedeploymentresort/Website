
import type { MetadataRoute } from "next";
import { rooms } from "../lib/data"; 
const BASE_URL = "https://www.damairesorts.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/luxury-rooms-in-chikmagalur`,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/dining`,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/chikmagalur-resort-gallery`,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/about-la-damai-resorts`,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/contact`,
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ];

  const roomPages: MetadataRoute.Sitemap = rooms.map((room) => ({
    url: `${BASE_URL}/luxury-rooms-in-chikmagalur/${room.id}`,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [...staticPages, ...roomPages];
}

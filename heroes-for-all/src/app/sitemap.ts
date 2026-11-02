import type { MetadataRoute } from "next";
import { programs } from "@/data/content";
import { newsArticles } from "@/data/content";
import { campaigns } from "@/data/content";

const baseUrl = "https://heroesforall.org";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: "/", lastModified: now, changeFrequency: "weekly", priority: 1.0 },
    { url: "/about/our-story", lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: "/about/strategic-direction", lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: "/about/our-team", lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: "/about/board-members", lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: "/about/our-partners", lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: "/about/annual-reports", lastModified: now, changeFrequency: "yearly", priority: 0.7 },
    { url: "/programs", lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: "/news", lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: "/news/press-releases", lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: "/news/video-gallery", lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: "/get-involved", lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: "/get-involved/student-membership", lastModified: now, changeFrequency: "yearly", priority: 0.8 },
    { url: "/get-involved/peer-mentorship", lastModified: now, changeFrequency: "yearly", priority: 0.8 },
    { url: "/get-involved/corporate-partnership", lastModified: now, changeFrequency: "yearly", priority: 0.8 },
    { url: "/get-involved/volunteer", lastModified: now, changeFrequency: "yearly", priority: 0.8 },
    { url: "/donate", lastModified: now, changeFrequency: "weekly", priority: 1.0 },
    { url: "/contact", lastModified: now, changeFrequency: "yearly", priority: 0.7 },
    { url: "/faq", lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: "/events", lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: "/privacy-policy", lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: "/terms", lastModified: now, changeFrequency: "yearly", priority: 0.3 },
  ];

  const programRoutes: MetadataRoute.Sitemap = programs.map((p) => ({
    url: `/programs/${p.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const newsRoutes: MetadataRoute.Sitemap = newsArticles.map((a) => ({
    url: `/news/${a.slug}`,
    lastModified: new Date(a.date),
    changeFrequency: "yearly",
    priority: 0.6,
  }));

  const campaignRoutes: MetadataRoute.Sitemap = campaigns.map((c) => ({
    url: `/donate/${c.slug}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.9,
  }));

  return [...staticRoutes, ...programRoutes, ...newsRoutes, ...campaignRoutes];
}

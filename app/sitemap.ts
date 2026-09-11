import type { MetadataRoute } from "next";
import { brandSlugs, modelPageParams } from "@/lib/repairData";

/* Produktiv-Domain. Bei einem Domainwechsel NEXT_PUBLIC_SITE_URL setzen. */
const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://b-repair.ch").replace(/\/$/, "");

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    { path: "/", priority: 1.0 },
    { path: "/leistungen", priority: 0.8 },
    { path: "/preisliste", priority: 0.8 },
    { path: "/preisrechner", priority: 0.8 },
    { path: "/kontakt", priority: 0.7 },
    { path: "/impressum", priority: 0.3 },
    { path: "/datenschutz", priority: 0.3 },
  ];

  return [
    ...staticPages.map((p) => ({
      url: `${SITE_URL}${p.path}`,
      changeFrequency: "monthly" as const,
      priority: p.priority,
    })),
    ...brandSlugs.map((brand) => ({
      url: `${SITE_URL}/reparatur/${brand}`,
      changeFrequency: "monthly" as const,
      priority: 0.9,
    })),
    ...modelPageParams().map(({ brand, model }) => ({
      url: `${SITE_URL}/reparatur/${brand}/${model}`,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}

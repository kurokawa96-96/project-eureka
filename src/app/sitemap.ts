import type { MetadataRoute } from "next";
import { projects } from "@/content/projects";
import { site } from "@/content/site";
import { getAllPosts } from "@/lib/journal";

// 静的書き出し(output: "export")では、この指定が必要。
export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  // サイトのURLが未設定の間は、出力しない(相対URLのsitemapは無効なため)。
  if (!site.url) return [];

  const pages = ["", "/about", "/projects", "/journal", "/contact"];

  return [
    ...pages.map((path) => ({ url: `${site.url}${path}` })),
    ...projects.map((p) => ({ url: `${site.url}/projects/${p.slug}` })),
    ...getAllPosts().map((post) => ({
      url: `${site.url}/journal/${post.slug}`,
      lastModified: post.date,
    })),
  ];
}

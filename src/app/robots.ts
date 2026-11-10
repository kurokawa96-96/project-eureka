import type { MetadataRoute } from "next";
import { site } from "@/content/site";

// 静的書き出し(output: "export")では、この指定が必要。
export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    ...(site.url ? { sitemap: `${site.url}/sitemap.xml` } : {}),
  };
}

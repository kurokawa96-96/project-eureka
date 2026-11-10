// JOURNAL記事の読み込み(ビルド時にだけ実行される)。
// 記事は src/content/journal/ に Markdown ファイルを追加するだけで増やせる。
// ファイル名(拡張子を除く)がそのままURLになる。

import fs from "node:fs";
import path from "node:path";
import { projects } from "@/content/projects";
import {
  journalCategories,
  type JournalCategory,
  type JournalListItem,
  type JournalPost,
} from "@/lib/journal-types";

const journalDir = path.join(process.cwd(), "src", "content", "journal");

function parsePost(raw: string, slug: string): JournalPost & { draft: boolean } {
  const match = raw
    .replace(/\r\n/g, "\n")
    .match(/^---\n([\s\S]*?)\n---\n?([\s\S]*)$/);
  if (!match) {
    throw new Error(`[journal] ${slug}.md の先頭に --- で囲んだ情報欄がありません`);
  }

  const meta: Record<string, string> = {};
  for (const line of match[1].split("\n")) {
    const i = line.indexOf(":");
    if (i === -1) continue;
    const key = line.slice(0, i).trim();
    const value = line
      .slice(i + 1)
      .trim()
      .replace(/^["']|["']$/g, "");
    meta[key] = value;
  }

  const title = meta.title;
  const date = meta.date;
  if (!title) throw new Error(`[journal] ${slug}.md に title がありません`);
  if (!date || !/^\d{4}-\d{2}-\d{2}$/.test(date)) {
    throw new Error(`[journal] ${slug}.md の date は YYYY-MM-DD の形式にしてください`);
  }

  const category = meta.category as JournalCategory;
  if (!journalCategories.includes(category)) {
    throw new Error(
      `[journal] ${slug}.md の category が不正です(使えるもの: ${journalCategories.join(" / ")})`,
    );
  }

  const projectSlugs = meta.projects
    ? meta.projects
        .split(",")
        .map((s) => s.trim())
        .filter(Boolean)
    : [];
  for (const s of projectSlugs) {
    if (!projects.some((p) => p.slug === s)) {
      throw new Error(`[journal] ${slug}.md の projects に未知のslug「${s}」があります`);
    }
  }

  return {
    slug,
    title,
    date,
    category,
    projects: projectSlugs,
    summary: meta.summary ?? "",
    body: match[2].trim(),
    draft: meta.draft === "true",
  };
}

// 全記事(新しい順)。draft: true の記事は含めない。
export function getAllPosts(): JournalPost[] {
  if (!fs.existsSync(journalDir)) return [];
  return fs
    .readdirSync(journalDir)
    .filter((f) => f.endsWith(".md"))
    .map((f) => {
      const slug = f.replace(/\.md$/, "");
      return parsePost(fs.readFileSync(path.join(journalDir, f), "utf8"), slug);
    })
    .filter((p) => !p.draft)
    .sort((a, b) => (a.date < b.date ? 1 : a.date > b.date ? -1 : 0))
    .map(({ draft: _draft, ...post }) => post);
}

export function getPost(slug: string): JournalPost | undefined {
  return getAllPosts().find((p) => p.slug === slug);
}

export function toListItem({ body: _body, ...item }: JournalPost): JournalListItem {
  return item;
}

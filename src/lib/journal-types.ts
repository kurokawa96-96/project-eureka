// JOURNALの型と定数。サーバー・クライアントのどちらからも読み込める(fsを使わない)。

export const journalCategories = [
  "NEWS",
  "DEVELOPMENT",
  "RESEARCH",
  "ESSAY",
  "PROJECT UPDATE",
] as const;

export type JournalCategory = (typeof journalCategories)[number];

// 一覧表示用(本文を含まない)
export type JournalListItem = {
  slug: string;
  title: string;
  date: string; // YYYY-MM-DD
  category: JournalCategory;
  projects: string[]; // プロジェクトのslug
  summary: string;
};

export type JournalPost = JournalListItem & { body: string };

// 2026-11-09 → 2026.11.09
export function formatDate(date: string): string {
  return date.replaceAll("-", ".");
}

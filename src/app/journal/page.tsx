import type { Metadata } from "next";
import JournalList from "@/components/JournalList";
import { getAllPosts, toListItem } from "@/lib/journal";

export const metadata: Metadata = {
  title: "JOURNAL",
  description:
    "PROJECT EUREKA全体の活動記録・研究・開発・考察を掲載します。カテゴリーやプロジェクトで絞り込めます。",
};

export default function JournalPage() {
  const posts = getAllPosts().map(toListItem);

  return (
    <div className="mx-auto max-w-page px-5 py-20 md:px-8 md:py-28">
      <p className="text-xs tracking-[0.25em] text-gold-deep">JOURNAL</p>
      <h1 className="mt-3 text-4xl md:text-6xl">活動記録</h1>
      <p className="mt-6 max-w-2xl">
        PROJECT EUREKA全体の活動記録・研究・開発・考察を、ここに集めていきます。
      </p>

      <JournalList posts={posts} withFilters />
    </div>
  );
}

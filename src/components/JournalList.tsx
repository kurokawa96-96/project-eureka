"use client";

import Link from "next/link";
import { useMemo, useState, type ReactNode } from "react";
import { projects } from "@/content/projects";
import {
  formatDate,
  journalCategories,
  type JournalCategory,
  type JournalListItem,
} from "@/lib/journal-types";

type Props = {
  posts: JournalListItem[];
  withFilters?: boolean;
};

function Chip({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: ReactNode;
}) {
  return (
    <button
      type="button"
      aria-pressed={active}
      onClick={onClick}
      className={`border px-3 py-1.5 text-[0.7rem] tracking-[0.15em] transition-colors ${
        active
          ? "border-navy bg-navy text-ivory"
          : "border-navy/30 text-navy hover:border-navy"
      }`}
    >
      {children}
    </button>
  );
}

export default function JournalList({ posts, withFilters = false }: Props) {
  const [category, setCategory] = useState<JournalCategory | null>(null);
  const [projectSlug, setProjectSlug] = useState<string | null>(null);

  // 実際に記事がある絞り込み項目だけを出す
  const usedCategories = journalCategories.filter((c) =>
    posts.some((p) => p.category === c),
  );
  const usedProjects = projects.filter((pr) =>
    posts.some((p) => p.projects.includes(pr.slug)),
  );

  const visible = useMemo(
    () =>
      posts.filter(
        (p) =>
          (!category || p.category === category) &&
          (!projectSlug || p.projects.includes(projectSlug)),
      ),
    [posts, category, projectSlug],
  );

  if (posts.length === 0) {
    return <p className="mt-10 text-charcoal/70">記事は、まだありません。</p>;
  }

  return (
    <div>
      {withFilters && (usedCategories.length > 1 || usedProjects.length > 0) && (
        <div className="mt-8 space-y-4">
          {usedCategories.length > 1 && (
            <div className="flex flex-wrap items-center gap-2">
              <span className="mr-2 text-[0.7rem] tracking-[0.2em] text-charcoal/70">
                CATEGORY
              </span>
              <Chip active={category === null} onClick={() => setCategory(null)}>
                ALL
              </Chip>
              {usedCategories.map((c) => (
                <Chip
                  key={c}
                  active={category === c}
                  onClick={() => setCategory(category === c ? null : c)}
                >
                  {c}
                </Chip>
              ))}
            </div>
          )}
          {usedProjects.length > 0 && (
            <div className="flex flex-wrap items-center gap-2">
              <span className="mr-2 text-[0.7rem] tracking-[0.2em] text-charcoal/70">
                PROJECT
              </span>
              <Chip active={projectSlug === null} onClick={() => setProjectSlug(null)}>
                ALL
              </Chip>
              {usedProjects.map((pr) => (
                <Chip
                  key={pr.slug}
                  active={projectSlug === pr.slug}
                  onClick={() => setProjectSlug(projectSlug === pr.slug ? null : pr.slug)}
                >
                  {pr.name}
                </Chip>
              ))}
            </div>
          )}
        </div>
      )}

      {visible.length === 0 ? (
        <p className="mt-10 text-charcoal/70">条件に合う記事は、ありません。</p>
      ) : (
        <ul className="mt-8 border-t border-navy/15">
          {visible.map((post) => (
            <li key={post.slug} className="border-b border-navy/15">
              <Link
                href={`/journal/${post.slug}`}
                className="group grid gap-2 py-6 md:grid-cols-[9rem_1fr] md:gap-8"
              >
                <div className="flex items-center gap-3 md:block">
                  <time
                    dateTime={post.date}
                    className="text-sm tracking-[0.1em] text-charcoal/70"
                  >
                    {formatDate(post.date)}
                  </time>
                  <p className="text-[0.68rem] tracking-[0.18em] text-gold-deep md:mt-2">
                    {post.category}
                  </p>
                </div>
                <div>
                  <h3 className="font-sans text-lg font-medium text-navy transition-colors group-hover:text-gold-deep">
                    {post.title}
                  </h3>
                  {post.summary && (
                    <p className="mt-2 text-sm text-charcoal/80">{post.summary}</p>
                  )}
                </div>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

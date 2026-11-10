import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Markdown from "@/components/Markdown";
import { getProject } from "@/content/projects";
import { getAllPosts, getPost } from "@/lib/journal";
import { formatDate } from "@/lib/journal-types";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return { title: post.title, description: post.summary || undefined };
}

export default async function JournalPostPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const relatedProjects = post.projects
    .map((s) => getProject(s))
    .filter((p): p is NonNullable<typeof p> => Boolean(p));

  return (
    <article className="mx-auto max-w-3xl px-5 py-16 md:px-8 md:py-24">
      <Link
        href="/journal"
        className="text-xs tracking-[0.2em] text-navy transition-colors hover:text-gold-deep"
      >
        ← JOURNAL
      </Link>

      <header className="mt-10 border-b border-navy/15 pb-8">
        <div className="flex items-center gap-4 text-xs tracking-[0.18em]">
          <time dateTime={post.date} className="text-charcoal/70">
            {formatDate(post.date)}
          </time>
          <span className="text-gold-deep">{post.category}</span>
        </div>
        <h1 className="mt-5 font-sans text-3xl font-medium leading-snug text-navy md:text-4xl">
          {post.title}
        </h1>
        {relatedProjects.length > 0 && (
          <ul className="mt-6 flex flex-wrap gap-2">
            {relatedProjects.map((p) => (
              <li key={p.slug}>
                <Link
                  href={`/projects/${p.slug}`}
                  className="inline-flex items-center gap-2 border border-navy/30 px-3 py-1 text-[0.7rem] tracking-[0.12em] text-navy transition-colors hover:border-navy"
                >
                  <span
                    aria-hidden="true"
                    className="h-1.5 w-1.5 rounded-full"
                    style={{ backgroundColor: p.color }}
                  />
                  {p.name}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </header>

      <div className="-mt-2">
        <Markdown source={post.body} />
      </div>
    </article>
  );
}

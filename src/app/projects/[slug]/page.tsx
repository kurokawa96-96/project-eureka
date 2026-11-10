import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import JournalList from "@/components/JournalList";
import ProjectIcon from "@/components/ProjectIcon";
import SectionHeader from "@/components/SectionHeader";
import StatusBadge from "@/components/StatusBadge";
import { getProject, projects } from "@/content/projects";
import { getAllPosts, toListItem } from "@/lib/journal";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return { title: project.name, description: project.summary };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const related = getAllPosts()
    .filter((p) => p.projects.includes(project.slug))
    .map(toListItem);

  // 情報がまだ少ないプロジェクトは、無理に文章を増やさず、その旨を正直に示す。
  const hasDetail = Boolean(project.purpose) || (project.activities?.length ?? 0) > 0;

  return (
    <div className="mx-auto max-w-page px-5 py-16 md:px-8 md:py-24">
      <Link
        href="/projects"
        className="text-xs tracking-[0.2em] text-navy transition-colors hover:text-gold-deep"
      >
        ← PROJECTS
      </Link>

      <header className="mt-10 flex flex-col gap-8 md:flex-row md:items-end">
        <ProjectIcon project={project} size={128} />
        <div>
          <StatusBadge project={project} />
          <h1 className="mt-5 font-sans text-4xl font-medium text-navy md:text-5xl">
            {project.name}
          </h1>
          {project.nameEn && (
            <p className="mt-2 text-xs tracking-[0.2em] text-charcoal/70">
              {project.nameEn}
            </p>
          )}
        </div>
      </header>

      <section className="mt-16">
        <SectionHeader label="OVERVIEW" title="概要" />
        <p className="mt-8 max-w-3xl">{project.summary}</p>
      </section>

      {project.purpose && (
        <section className="mt-16">
          <SectionHeader label="PURPOSE" title="目的・理念" />
          <p className="mt-8 max-w-3xl">{project.purpose}</p>
        </section>
      )}

      {project.activities && project.activities.length > 0 && (
        <section className="mt-16">
          <SectionHeader label="ACTIVITIES" title="主な活動内容" />
          <ul className="mt-8 max-w-3xl list-disc space-y-2 pl-6 marker:text-gold">
            {project.activities.map((a) => (
              <li key={a}>{a}</li>
            ))}
          </ul>
        </section>
      )}

      {!hasDetail && (
        <p className="mt-16 max-w-3xl border-l-2 border-gold pl-5 text-charcoal/80">
          このプロジェクトについての情報は、まだ多くありません。形になりしだい、ここに書き加えていきます。
        </p>
      )}

      {project.externalUrl && (
        <section className="mt-16">
          <SectionHeader label="LINK" title="外部サイト" />
          <a
            href={project.externalUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-block border border-navy px-8 py-3 text-xs tracking-[0.2em] text-navy transition-colors hover:bg-navy hover:text-ivory"
          >
            VISIT SITE ↗
          </a>
        </section>
      )}

      <section className="mt-16">
        <SectionHeader label="JOURNAL" title="関連する記事" />
        {related.length > 0 ? (
          <JournalList posts={related} />
        ) : (
          <p className="mt-8 text-charcoal/70">関連する記事は、まだありません。</p>
        )}
      </section>
    </div>
  );
}

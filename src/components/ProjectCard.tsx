import Link from "next/link";
import ProjectIcon from "@/components/ProjectIcon";
import StatusBadge from "@/components/StatusBadge";
import { hasDetailPage, projectHref, type Project } from "@/content/projects";

const cardClass =
  "group flex h-full flex-col border border-navy/15 bg-white/60 p-6 transition-colors hover:border-navy md:p-7";

export default function ProjectCard({ project }: { project: Project }) {
  // 個別ページを持たないプロジェクト(noteなど)は、外部サイトへ直接移動する。
  const external = !hasDetailPage(project);

  const content = (
    <>
      <div className="flex items-start justify-between gap-4">
        <ProjectIcon project={project} size={72} />
        <StatusBadge project={project} />
      </div>

      <h3 className="mt-8 font-sans text-xl font-medium text-navy">
        {project.name}
      </h3>
      {project.nameEn && (
        <p className="mt-1 text-[0.68rem] tracking-[0.18em] text-charcoal/70">
          {project.nameEn}
        </p>
      )}
      <p className="mt-4 flex-1 text-sm leading-relaxed text-charcoal/80">
        {project.summary}
      </p>

      <span className="mt-6 text-xs tracking-[0.2em] text-navy transition-colors group-hover:text-gold-deep">
        {external ? "OPEN ↗" : "VIEW →"}
        {external && (
          <span className="sr-only">(外部サイト。新しいタブで開きます)</span>
        )}
      </span>
    </>
  );

  if (external) {
    return (
      <a
        href={projectHref(project)}
        target="_blank"
        rel="noopener noreferrer"
        className={cardClass}
      >
        {content}
      </a>
    );
  }

  return (
    <Link href={projectHref(project)} className={cardClass}>
      {content}
    </Link>
  );
}

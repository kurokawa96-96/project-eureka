import Link from "next/link";
import ProjectIcon from "@/components/ProjectIcon";
import StatusBadge from "@/components/StatusBadge";
import type { Project } from "@/content/projects";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group flex h-full flex-col border border-navy/15 bg-white/60 p-6 transition-colors hover:border-navy md:p-7"
    >
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
        VIEW →
      </span>
    </Link>
  );
}

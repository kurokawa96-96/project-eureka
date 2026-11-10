import { statusLabel, type Project } from "@/content/projects";

export default function StatusBadge({ project }: { project: Project }) {
  return (
    <span className="inline-flex items-center gap-2 border border-navy/30 px-2.5 py-1 text-[0.68rem] tracking-[0.18em] text-navy">
      <span
        aria-hidden="true"
        className="h-1.5 w-1.5 rounded-full"
        style={{ backgroundColor: project.color }}
      />
      <span className="sr-only">ステータス: </span>
      {statusLabel(project)}
    </span>
  );
}

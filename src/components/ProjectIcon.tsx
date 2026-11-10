import type { Project } from "@/content/projects";

type Props = {
  project: Project;
  size?: number;
  className?: string;
};

// プロジェクトのアイコン枠。テーマカラーの単色の面に、専用アイコン(白)を置く。
// iconSrc が未設定の間は、色の面だけを表示する(アイコンの形は作らない)。
// 隣に必ずプロジェクト名が並ぶため、装飾として扱う。
export default function ProjectIcon({ project, size = 64, className = "" }: Props) {
  return (
    <div
      aria-hidden="true"
      className={`flex shrink-0 items-center justify-center ${className}`}
      style={{ width: size, height: size, backgroundColor: project.color }}
    >
      {project.iconSrc && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={project.iconSrc}
          alt=""
          className="h-full w-full object-contain"
        />
      )}
    </div>
  );
}

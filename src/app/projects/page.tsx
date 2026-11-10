import type { Metadata } from "next";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/content/projects";

export const metadata: Metadata = {
  title: "PROJECTS",
  description:
    "PROJECT EUREKAに属するプロジェクトの一覧です。それぞれの概要と、現在のステータスをご覧いただけます。",
};

export default function ProjectsPage() {
  return (
    <div className="mx-auto max-w-page px-5 py-20 md:px-8 md:py-28">
      <p className="text-xs tracking-[0.25em] text-gold-deep">PROJECTS</p>
      <h1 className="mt-3 text-4xl md:text-6xl">プロジェクト</h1>
      <p className="mt-6 max-w-2xl">
        それぞれが独自の目的と個性を持ち、PROJECT EUREKAという共通の基盤のもとで進んでいます。形になっているものも、まだ構想のものも、ありのままの段階でご紹介します。
      </p>

      <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => (
          <li key={p.slug}>
            <ProjectCard project={p} />
          </li>
        ))}
      </ul>
    </div>
  );
}

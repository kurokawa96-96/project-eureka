import Link from "next/link";
import JournalList from "@/components/JournalList";
import Logo from "@/components/Logo";
import ProjectCard from "@/components/ProjectCard";
import SectionHeader from "@/components/SectionHeader";
import { projects } from "@/content/projects";
import { site } from "@/content/site";
import { getAllPosts, toListItem } from "@/lib/journal";

export default function HomePage() {
  const latest = getAllPosts().slice(0, 3).map(toListItem);
  const snsLinks = [
    { label: "X", href: site.sns.x },
    { label: "Instagram", href: site.sns.instagram },
  ].filter((s) => s.href);

  return (
    <>
      {/* HERO */}
      <section className="mx-auto grid max-w-page items-center gap-12 px-5 py-16 md:grid-cols-[1.3fr_1fr] md:gap-16 md:px-8 md:py-28">
        <div className="order-last md:order-first">
          <h1 className="text-4xl italic md:text-6xl">{site.tagline}</h1>
          <p className="mt-6 max-w-xl text-base md:text-lg">{site.subTagline}</p>
          <Link
            href="/projects"
            className="mt-10 inline-block border border-navy px-8 py-3 text-xs tracking-[0.2em] text-navy transition-colors hover:bg-navy hover:text-ivory"
          >
            PROJECTS
          </Link>
        </div>
        <div className="flex md:justify-end">
          <Logo heightClass="h-44 md:h-64" />
        </div>
      </section>

      {/* ABOUT */}
      <section className="mx-auto max-w-page px-5 py-16 md:px-8 md:py-24">
        <SectionHeader label="ABOUT" title="PROJECT EUREKAとは" href="/about" linkLabel="MORE" />
        <div className="mt-10 grid gap-8 md:grid-cols-2 md:gap-16">
          <p className="font-serif text-2xl italic leading-snug text-navy md:text-3xl">
            Turn Curiosity
            <br />
            into Value.
          </p>
          <div>
            <p>
              PROJECT EUREKAは、分野や既存の枠組みにとらわれず、多様なプロジェクトを企画・推進する独立した活動体です。複数の構想を育て、それぞれのプロジェクトとして形にしていくための共通基盤です。
            </p>
            <p className="mt-4">面白いことを、真面目にやる。ないから作る。知らないなら学ぶ。やりながら学ぶ。</p>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section className="mx-auto max-w-page px-5 py-16 md:px-8 md:py-24">
        <SectionHeader label="PROJECTS" title="プロジェクト" href="/projects" />
        <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <li key={p.slug}>
              <ProjectCard project={p} />
            </li>
          ))}
        </ul>
      </section>

      {/* JOURNAL */}
      <section className="mx-auto max-w-page px-5 py-16 md:px-8 md:py-24">
        <SectionHeader label="JOURNAL" title="活動記録" href="/journal" />
        <JournalList posts={latest} />
      </section>

      {/* CONTACT / SNS */}
      <section className="bg-navy text-ivory">
        <div className="mx-auto max-w-page px-5 py-16 md:px-8 md:py-24">
          <SectionHeader label="CONTACT" title="お問い合わせ" href="/contact" linkLabel="CONTACT" tone="dark" />
          <div className="mt-10 grid gap-8 md:grid-cols-2 md:gap-16">
            <p className="text-ivory/80">
              PROJECT EUREKA全体への問い合わせ窓口です。各プロジェクトへのご連絡も、こちらから承ります。
            </p>
            <div>
              <p className="text-xs tracking-[0.25em] text-gold">OFFICIAL SNS</p>
              {snsLinks.length > 0 ? (
                <ul className="mt-4 flex gap-6">
                  {snsLinks.map((s) => (
                    <li key={s.label}>
                      <a
                        href={s.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm underline decoration-gold underline-offset-4 transition-colors hover:text-gold"
                      >
                        {s.label}
                      </a>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="mt-4 text-sm text-ivory/60">準備中</p>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

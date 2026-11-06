import Link from "next/link";
import Logo from "@/components/Logo";
import { site } from "@/content/site";

export default function HomePage() {
  return (
    <section className="mx-auto max-w-page px-5 py-24 md:px-8 md:py-36">
      <div className="mb-10">
        <Logo className="!text-2xl" />
      </div>
      <h1 className="text-4xl italic md:text-6xl">{site.tagline}</h1>
      <p className="mt-6 max-w-xl text-base md:text-lg">{site.subTagline}</p>
      <Link
        href="/projects"
        className="mt-10 inline-block border border-navy px-8 py-3 text-xs tracking-[0.2em] text-navy transition-colors hover:bg-navy hover:text-ivory"
      >
        PROJECTS
      </Link>
    </section>
  );
}

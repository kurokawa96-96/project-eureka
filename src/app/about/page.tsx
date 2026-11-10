import type { Metadata } from "next";

export const metadata: Metadata = { title: "ABOUT" };

export default function AboutPage() {
  return (
    <section className="mx-auto max-w-page px-5 py-20 md:px-8 md:py-28">
      <h1 className="text-4xl md:text-5xl">ABOUT</h1>
      <p className="mt-6 text-charcoal/70">準備中です。(PHASE 2 で作成します)</p>
    </section>
  );
}


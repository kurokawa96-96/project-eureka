import type { Metadata } from "next";
import SectionHeader from "@/components/SectionHeader";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "CONTACT",
  description: "PROJECT EUREKA全体への問い合わせ窓口と、公式SNSのご案内です。",
};

export default function ContactPage() {
  const snsLinks = [
    { label: "X", href: site.sns.x },
    { label: "Instagram", href: site.sns.instagram },
  ].filter((s) => s.href);

  return (
    <div className="mx-auto max-w-page px-5 py-20 md:px-8 md:py-28">
      <p className="text-xs tracking-[0.25em] text-gold-deep">CONTACT</p>
      <h1 className="mt-3 text-4xl md:text-6xl">お問い合わせ</h1>
      <p className="mt-6 max-w-2xl">
        PROJECT EUREKA全体の問い合わせ窓口です。各プロジェクトについてのご連絡も、こちらからお送りください。
      </p>

      <section className="mt-16">
        <SectionHeader label="FORM" title="問い合わせフォーム" />
        <div className="mt-8">
          {site.contactFormUrl ? (
            <a
              href={site.contactFormUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block border border-navy px-8 py-3 text-xs tracking-[0.2em] text-navy transition-colors hover:bg-navy hover:text-ivory"
            >
              フォームを開く ↗
            </a>
          ) : (
            <p className="text-charcoal/70">準備中です。</p>
          )}
        </div>
      </section>

      <section className="mt-16">
        <SectionHeader label="SNS" title="公式SNS" />
        <div className="mt-8">
          {snsLinks.length > 0 ? (
            <ul className="flex gap-8">
              {snsLinks.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline decoration-gold decoration-1 underline-offset-4 transition-colors hover:text-gold-deep"
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-charcoal/70">準備中です。</p>
          )}
        </div>
      </section>
    </div>
  );
}

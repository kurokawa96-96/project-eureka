import type { Metadata } from "next";
import SectionHeader from "@/components/SectionHeader";

export const metadata: Metadata = {
  title: "ABOUT",
  description:
    "PROJECT EUREKAの理念、活動方針、基本姿勢をご紹介します。好奇心を出発点に、構想を育て、価値へとつなぐ。",
};

const principles = [
  { en: "CURIOSITY", ja: "好奇心を出発点にする。" },
  { en: "LEARN", ja: "知らないことは学べばいい。" },
  { en: "EXPLORE", ja: "探求し、試し、可能性を検証する。" },
  { en: "CREATE", ja: "ないなら、自分たちで作る。" },
  { en: "CONTRIBUTE", ja: "活動を通じて社会に価値を届ける。" },
];

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-page px-5 py-20 md:px-8 md:py-28">
      <p className="text-xs tracking-[0.25em] text-gold-deep">ABOUT</p>
      <h1 className="mt-3 text-4xl italic md:text-6xl">Where Ideas Find Their Form.</h1>
      <p className="mt-6 max-w-2xl text-lg">構想を生み出し、育て、形にする。</p>

      {/* INTRODUCTION */}
      <section className="mt-20 md:mt-28">
        <SectionHeader label="INTRODUCTION" title="PROJECT EUREKAとは" />
        <div className="mt-10 max-w-3xl space-y-6">
          <p>
            PROJECT EUREKAは、分野や既存の枠組みにとらわれず、多様なプロジェクトを企画・推進する独立した活動体です。
          </p>
          <p>
            単一の事業を展開するためのブランドではなく、複数の構想を育て、それぞれのプロジェクトとして形にしていくための共通基盤です。
          </p>
          <p>
            各プロジェクトは、独自の名称・目的・アイデンティティを持ちます。PROJECT EUREKAは、それらを束ねるマスターブランドであり、外部に対する共通の窓口です。
          </p>
        </div>
      </section>

      {/* PHILOSOPHY */}
      <section className="mt-20 md:mt-28">
        <SectionHeader label="PHILOSOPHY" title="基本理念" />
        <div className="mt-10 max-w-3xl space-y-6">
          <p className="font-serif text-3xl italic text-navy md:text-4xl">
            Turn Curiosity into Value.
          </p>
          <p className="text-xl text-navy">好奇心を、価値にする。</p>
          <p>
            好奇心を出発点とし、研究・探求・創造・実践を通じて、アイデアを具体的な形にします。そして、その活動から知的・文化的・社会的・経済的な価値を生み出すことを目指します。
          </p>
          <p>面白いことを、真面目にやる。</p>
        </div>
      </section>

      {/* PRINCIPLES */}
      <section className="mt-20 md:mt-28">
        <SectionHeader label="PRINCIPLES" title="5つの原則" />
        <ol className="mt-10 border-t border-navy/15">
          {principles.map((p, i) => (
            <li
              key={p.en}
              className="grid gap-2 border-b border-navy/15 py-6 md:grid-cols-[4rem_14rem_1fr] md:items-baseline md:gap-6"
            >
              <span className="text-sm tracking-[0.1em] text-gold-deep">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="font-serif text-2xl text-navy">{p.en}</span>
              <span>{p.ja}</span>
            </li>
          ))}
        </ol>
      </section>

      {/* APPROACH */}
      <section className="mt-20 md:mt-28">
        <SectionHeader label="APPROACH" title="進め方" />
        <div className="mt-10 max-w-3xl space-y-6">
          <p className="text-xl text-navy">
            ないから作る。知らないなら学ぶ。やりながら学ぶ。
          </p>
          <p>
            ただし、無計画な実行を推奨するものではありません。必要な調査や検証を行い、責任を持って実践する姿勢を大切にします。
          </p>
        </div>
      </section>
    </div>
  );
}

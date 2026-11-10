import type { ReactNode } from "react";

// 記事用の簡易Markdown描画。対応する書き方:
//   ## 見出し / ### 小見出し / - 箇条書き / 空行で段落 / **太字** / [文字](URL)
// 外部ライブラリを増やさないための、必要最小限の実装。

function renderInline(text: string): ReactNode[] {
  const nodes: ReactNode[] = [];
  const pattern = /\*\*(.+?)\*\*|\[(.+?)\]\((https?:\/\/[^)\s]+|\/[^)\s]*)\)/g;
  let last = 0;
  let key = 0;
  let m: RegExpExecArray | null;
  while ((m = pattern.exec(text)) !== null) {
    if (m.index > last) nodes.push(text.slice(last, m.index));
    if (m[1] !== undefined) {
      nodes.push(<strong key={key++}>{m[1]}</strong>);
    } else {
      const external = m[3].startsWith("http");
      nodes.push(
        <a
          key={key++}
          href={m[3]}
          {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
          className="underline decoration-gold decoration-1 underline-offset-4 transition-colors hover:text-gold-deep"
        >
          {m[2]}
        </a>,
      );
    }
    last = pattern.lastIndex;
  }
  if (last < text.length) nodes.push(text.slice(last));
  return nodes;
}

export default function Markdown({ source }: { source: string }) {
  const lines = source.replace(/\r\n/g, "\n").split("\n");
  const blocks: ReactNode[] = [];
  let paragraph: string[] = [];
  let list: string[] = [];
  let key = 0;

  const flushParagraph = () => {
    if (paragraph.length === 0) return;
    blocks.push(
      <p key={key++} className="mt-6 leading-[2]">
        {renderInline(paragraph.join(" "))}
      </p>,
    );
    paragraph = [];
  };
  const flushList = () => {
    if (list.length === 0) return;
    blocks.push(
      <ul key={key++} className="mt-6 list-disc space-y-2 pl-6 leading-[2] marker:text-gold">
        {list.map((item, i) => (
          <li key={i}>{renderInline(item)}</li>
        ))}
      </ul>,
    );
    list = [];
  };

  for (const line of lines) {
    if (line.trim() === "") {
      flushParagraph();
      flushList();
    } else if (line.startsWith("### ")) {
      flushParagraph();
      flushList();
      blocks.push(
        <h3 key={key++} className="mt-10 text-xl">
          {renderInline(line.slice(4))}
        </h3>,
      );
    } else if (line.startsWith("## ")) {
      flushParagraph();
      flushList();
      blocks.push(
        <h2 key={key++} className="mt-14 border-t border-navy/15 pt-6 text-2xl">
          {renderInline(line.slice(3))}
        </h2>,
      );
    } else if (line.startsWith("- ")) {
      flushParagraph();
      list.push(line.slice(2));
    } else {
      flushList();
      paragraph.push(line.trim());
    }
  }
  flushParagraph();
  flushList();

  return <div>{blocks}</div>;
}

import Link from "next/link";

type Props = {
  label: string; // 例: "PROJECTS"
  title: string; // 見出し
  href?: string;
  linkLabel?: string;
  tone?: "light" | "dark";
};

export default function SectionHeader({
  label,
  title,
  href,
  linkLabel = "VIEW ALL",
  tone = "light",
}: Props) {
  const dark = tone === "dark";
  return (
    <div
      className={`flex items-end justify-between gap-6 border-b pb-5 ${
        dark ? "border-ivory/20" : "border-navy/15"
      }`}
    >
      <div>
        <p
          className={`text-xs tracking-[0.25em] ${
            dark ? "text-gold" : "text-gold-deep"
          }`}
        >
          {label}
        </p>
        <h2 className={`mt-3 text-3xl md:text-4xl ${dark ? "text-ivory" : ""}`}>
          {title}
        </h2>
      </div>
      {href && (
        <Link
          href={href}
          className={`shrink-0 text-xs tracking-[0.2em] transition-colors ${
            dark ? "text-ivory hover:text-gold" : "text-navy hover:text-gold-deep"
          }`}
        >
          {linkLabel} →
        </Link>
      )}
    </div>
  );
}

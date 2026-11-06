import { site } from "@/content/site";

type Props = {
  variant?: "dark" | "light"; // dark: 暗い背景の上、light: 明るい背景の上
  className?: string;
};

// マスターロゴ。素材が未設定の間は文字のプレースホルダーを出す。
// ロゴの形状・比率・書体は変更しない(画像をそのまま表示する)。
export default function Logo({ variant = "light", className = "" }: Props) {
  if (site.logoSrc) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={site.logoSrc}
        alt={site.name}
        className={`h-10 w-auto ${className}`}
      />
    );
  }

  const color = variant === "dark" ? "text-ivory" : "text-navy";
  return (
    <span
      className={`font-serif text-lg tracking-[0.2em] ${color} ${className}`}
      aria-label={site.name}
    >
      {site.name}
    </span>
  );
}

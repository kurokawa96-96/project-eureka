import { site } from "@/content/site";

type Props = {
  variant?: "dark" | "light"; // dark: 暗い背景の上、light: 明るい背景の上
  heightClass?: string; // 高さは Tailwind のクラスで指定する(幅は比率どおり自動)
};

// マスターロゴ。画像をそのまま表示し、形状・比率・書体には手を加えない。
// 素材が未設定(logoSrc が null)の間は、文字のプレースホルダーを出す。
export default function Logo({ variant = "light", heightClass = "h-12" }: Props) {
  if (site.logoSrc) {
    const src = variant === "dark" ? site.logoLightSrc : site.logoSrc;
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={src}
        alt={site.name}
        width={site.logoSize.width}
        height={site.logoSize.height}
        className={`${heightClass} w-auto`}
      />
    );
  }

  const color = variant === "dark" ? "text-ivory" : "text-navy";
  return (
    <span
      className={`font-serif text-lg tracking-[0.2em] ${color}`}
      aria-label={site.name}
    >
      {site.name}
    </span>
  );
}

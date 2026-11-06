// サイト全体の設定。ロゴ・SNS・問い合わせ先はここだけを書き換えれば反映される。

export const site = {
  name: "PROJECT EUREKA",
  tagline: "Where Ideas Find Their Form.",
  subTagline: "好奇心を出発点に、構想を育て、価値へとつなぐ。",
  description:
    "PROJECT EUREKAは、分野にとらわれず多様なプロジェクトを企画・推進する独立した活動体です。",

  // マスターロゴの参照先(一か所に集約)。
  // ロゴ素材を public/brand/ に置いたら、ここにパスを入れる。例: "/brand/master-logo.svg"
  // null の間は、文字によるプレースホルダーを表示する。ロゴの再デザインは行わない。
  logoSrc: null as string | null,

  // 公式SNS。URLが決まったら入れる(空文字の間はリンクを表示しない)。
  sns: {
    x: "",
    instagram: "",
  },

  // 問い合わせ先(外部フォームサービスのURLを想定)。決まったら入れる。
  contactFormUrl: "",
} as const;

export const nav = [
  { label: "HOME", href: "/" },
  { label: "ABOUT", href: "/about" },
  { label: "PROJECTS", href: "/projects" },
  { label: "JOURNAL", href: "/journal" },
  { label: "CONTACT", href: "/contact" },
] as const;

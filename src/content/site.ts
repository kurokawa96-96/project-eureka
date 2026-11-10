// サイト全体の設定。ロゴ・SNS・問い合わせ先はここだけを書き換えれば反映される。

export const site = {
  name: "PROJECT EUREKA",
  tagline: "Where Ideas Find Their Form.",
  subTagline: "好奇心を出発点に、構想を育て、価値へとつなぐ。",
  description:
    "PROJECT EUREKAは、分野にとらわれず多様なプロジェクトを企画・推進する独立した活動体です。",

  // 公開するサイトのURL(例: "https://example.com")。ドメインが決まったら入れる。
  // OGP画像のURLを正しく組み立てるために使う。末尾のスラッシュは付けない。
  url: "https://project-eureka-nine.vercel.app",

  // マスターロゴの参照先(一か所に集約)。ロゴの再デザインは行わない。
  // 元の画像から背景の白だけを透明にした版を、public/brand/ に置いている。
  //   logoSrc      明るい背景(アイボリー)の上に置く版(元のインク色)
  //   logoLightSrc 暗い背景(ネイビー)の上に置く版(アイボリー色)
  // logoSrc が null の間は、文字によるプレースホルダーを表示する。
  logoSrc: "/brand/master-logo.png" as string | null,
  logoLightSrc: "/brand/master-logo-light.png",
  logoSize: { width: 613, height: 497 }, // 画像の縦横比(表示のずれ防止用)

  // 公式SNS。URLが決まったら入れる(空文字の間はリンクを表示しない)。
  sns: {
    x: "https://x.com/projecteureka01",
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

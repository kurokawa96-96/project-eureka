// プロジェクト一覧のデータ。表示側からは、このファイルだけを参照する。
// 名称・色・概要はブリーフに記載のとおり。
//
// 書き足せる項目(すべて任意。書いた項目だけが個別ページに表示される):
//   status      RESEARCH / CONCEPT / DEVELOPING / ACTIVE / ARCHIVED
//               未設定の間は「準備中」と表示される
//   purpose     目的・理念
//   activities  主な活動内容(箇条書き)
//   iconSrc     専用アイコンの画像パス。例: "/brand/icons/erabu.svg"
//   externalUrl 外部サイトのURL

export type ProjectStatus =
  | "RESEARCH"
  | "CONCEPT"
  | "DEVELOPING"
  | "ACTIVE"
  | "ARCHIVED";

export type Project = {
  slug: string;
  name: string; // 主表示名
  nameEn?: string; // 補助表示(英語表記)
  color: string; // プロジェクトカラー
  summary: string;
  status?: ProjectStatus;
  purpose?: string;
  activities?: string[];
  iconSrc?: string;
  externalUrl?: string;
};

// 一覧・個別ページで表示するステータス文言。未設定なら「準備中」。
export function statusLabel(project: Project): string {
  return project.status ?? "準備中";
}

export const projects: Project[] = [
  {
    slug: "erabu",
    name: "ERABU",
    color: "#315D79",
    iconSrc: "/brand/icons/erabu.png",
    summary:
      "選挙・政治情報を整理し、有権者が候補者や政策を理解するための情報プラットフォーム。",
  },
  {
    slug: "nrd",
    name: "NRD",
    color: "#66558B",
    iconSrc: "/brand/icons/nrd.png",
    summary: "報酬回路を基礎とした人間の行動・心理モデルの研究と応用構想。",
  },
  {
    slug: "ojosama",
    name: "お嬢様研究所",
    nameEn: "OJOSAMA RESEARCH INSTITUTE",
    color: "#A77B91",
    iconSrc: "/brand/icons/ojosama.png",
    summary: "お嬢様という文化的・言語的・歴史的な存在を研究するプロジェクト。",
  },
  {
    slug: "store-store",
    name: "STORE STORE",
    color: "#C17B43",
    iconSrc: "/brand/icons/store-store.png",
    summary: "商品・流通・販売に関する構想と取り組み。",
  },
  {
    slug: "ludens-foundry",
    name: "LUDENS FOUNDRY",
    color: "#477B68",
    iconSrc: "/brand/icons/ludens-foundry.png",
    summary:
      "カードゲームやボードゲームなどの作品を、登録・商品化・製造・販売・発送・精算までつなぐプラットフォーム構想。",
  },
  {
    slug: "books-romana",
    name: "BOOKS ROMANA",
    color: "#865B48",
    iconSrc: "/brand/icons/books-romana.png",
    summary: "書籍・出版・知的文化に関するプロジェクト。",
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

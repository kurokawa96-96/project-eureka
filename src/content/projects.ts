// プロジェクト一覧のデータ。表示側からは、このファイルだけを参照する。
// 名称・色・概要はブリーフに記載のとおり。
//
// 項目の説明:
//   status      必須。PE共通ステータス(ready / developing / active / paused / archived)。
//               定義と日本語表記は src/content/status.ts にある
//   purpose     目的・理念(任意。書いた項目だけが個別ページに表示される)
//   activities  主な活動内容(任意。箇条書き)
//   iconSrc     専用アイコンの画像パス。例: "/brand/icons/erabu.svg"
//   externalUrl 外部サイトのURL(任意)

import { statusDefinitions, type ProjectStatus } from "@/content/status";

export type Project = {
  slug: string;
  name: string; // 主表示名
  nameEn?: string; // 補助表示(英語表記)
  color: string; // プロジェクトカラー
  summary: string;
  status: ProjectStatus;
  purpose?: string;
  activities?: string[];
  iconSrc?: string;
  externalUrl?: string;
};

// 一覧・個別ページで表示するステータス文言(日本語表記)。
export function statusLabel(project: Project): string {
  return statusDefinitions[project.status].label;
}

export const projects: Project[] = [
  {
    slug: "erabu",
    name: "ERABU",
    color: "#315D79",
    iconSrc: "/brand/icons/erabu.png",
    summary:
      "選挙・政治情報を整理し、有権者が候補者や政策を理解するための情報プラットフォーム。",
    status: "ready",
  },
  {
    slug: "nrd",
    name: "NRD",
    color: "#66558B",
    iconSrc: "/brand/icons/nrd.png",
    summary: "報酬回路を基礎とした人間の行動・心理モデルの研究と応用構想。",
    status: "ready",
  },
  {
    slug: "ojosama",
    name: "お嬢様研究所",
    nameEn: "OJOSAMA RESEARCH INSTITUTE",
    color: "#A77B91",
    iconSrc: "/brand/icons/ojosama.png",
    summary: "お嬢様という文化的・言語的・歴史的な存在を研究するプロジェクト。",
    status: "active",
    purpose:
      "お嬢様という存在を、歴史・階級・文化・言語・思想・フィクションなど、分野を横断して研究します。キャラクターの紹介にとどまらず、お嬢様という現象そのものを、史実と考察を区別しながら読み解くことを目指しています。",
    activities: [
      "歴史・文化・社会思想・言語などの分野ごとに、研究記事を書き、公開していく",
      "記事どうしのつながりを、ノード型の研究マップで一望できるようにする",
      "「史実」「研究所の考察」「仮説」を区別して示す",
    ],
    externalUrl: "https://ojosama-lab.vercel.app",
  },
  {
    slug: "store-store",
    name: "STORE STORE",
    color: "#C17B43",
    iconSrc: "/brand/icons/store-store.png",
    summary: "商品・流通・販売に関する構想と取り組み。",
    status: "ready",
  },
  {
    slug: "ludens-foundry",
    name: "LUDENS FOUNDRY",
    color: "#477B68",
    iconSrc: "/brand/icons/ludens-foundry.png",
    summary:
      "カードゲームやボードゲームなどの作品を、登録・商品化・製造・販売・発送・精算までつなぐプラットフォーム構想。",
    status: "ready",
  },
  {
    slug: "books-romana",
    name: "BOOKS ROMANA",
    color: "#865B48",
    iconSrc: "/brand/icons/books-romana.png",
    summary: "書籍・出版・知的文化に関するプロジェクト。",
    status: "ready",
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

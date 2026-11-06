// プロジェクト一覧のデータ。表示側からは、このファイルだけを参照する。
// 名称・色・概要はブリーフに記載のとおり。
// status(RESEARCH / CONCEPT / DEVELOPING / ACTIVE / ARCHIVED)が未設定のプロジェクトは、
// 表示側で「準備中」と出す(statusLabel を使う)。
// 現時点では、お嬢様研究所以外はほとんど未着手のため「準備中」とする。
// 各プロジェクトが形になったら、status を設定するだけで表示が切り替わる。

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
    summary:
      "選挙・政治情報を整理し、有権者が候補者や政策を理解するための情報プラットフォーム。",
  },
  {
    slug: "nrd",
    name: "NRD",
    color: "#66558B",
    summary: "報酬回路を基礎とした人間の行動・心理モデルの研究と応用構想。",
  },
  {
    slug: "ojosama",
    name: "お嬢様研究所",
    nameEn: "OJOSAMA RESEARCH INSTITUTE",
    color: "#A77B91",
    summary: "お嬢様という文化的・言語的・歴史的な存在を研究するプロジェクト。",
  },
  {
    slug: "store-store",
    name: "STORE STORE",
    color: "#C17B43",
    summary: "商品・流通・販売に関する構想と取り組み。",
  },
  {
    slug: "ludens-foundry",
    name: "LUDENS FOUNDRY",
    color: "#477B68",
    summary:
      "カードゲームやボードゲームなどの作品を、登録・商品化・製造・販売・発送・精算までつなぐプラットフォーム構想。",
  },
  {
    slug: "books-romana",
    name: "BOOKS ROMANA",
    color: "#865B48",
    summary: "書籍・出版・知的文化に関するプロジェクト。",
  },
];

// PE(PROJECT EUREKA)共通ステータス定義
//
// PEで管理する各プロジェクト・サービスで共通して使うステータス。
//   - 内部値は、下の英語(小文字)を使う
//   - 画面上の表示は、日本語表記(label)を使う
//   - ステータスを追加・変更するときは、このファイルだけを更新する。
//     statusDefinitions は全ての値の表記を書かないと型エラーになるため、書き忘れに気づける。

export const projectStatuses = [
  "ready",
  "developing",
  "active",
  "paused",
  "archived",
] as const;

export type ProjectStatus = (typeof projectStatuses)[number];

export const statusDefinitions: Record<
  ProjectStatus,
  { label: string; definition: string }
> = {
  ready: {
    label: "準備中",
    definition: "公開・開発に向けた準備段階",
  },
  developing: {
    label: "開発中",
    definition: "現在、設計・実装・開発を進めている段階",
  },
  active: {
    label: "稼働中",
    definition: "正式に公開・運用され、活動している状態",
  },
  paused: {
    label: "一時停止",
    definition: "何らかの理由により活動・運用を一時停止している状態",
  },
  archived: {
    label: "アーカイブ",
    definition: "運用を終了し、記録・保管されている状態",
  },
};

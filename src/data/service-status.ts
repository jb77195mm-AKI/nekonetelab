export type ServiceStatus =
  | "available"
  | "monitor"
  | "beta"
  | "developing"
  | "planned"
  | "consultation";

export const serviceStatusLabels: Record<ServiceStatus, string> = {
  available: "提供中",
  monitor: "モニター提供中",
  beta: "ベータ提供",
  developing: "開発・検証中",
  planned: "対応予定",
  consultation: "導入相談受付中",
};

export const serviceStatusDescriptions: Record<ServiceStatus, string> = {
  available: "標準範囲でご利用いただけます。",
  monitor: "対象・件数を限定して試験提供しています。",
  beta: "機能と運用方法を確認しながら提供しています。",
  developing: "画面・機能・運用方法を開発、検証しています。",
  planned: "今後の対応候補です。提供時期は未定です。",
  consultation: "現在の業務と既存ツールを確認し、導入方法をご提案します。",
};

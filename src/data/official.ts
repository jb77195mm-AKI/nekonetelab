import {
  Bot,
  BriefcaseBusiness,
  GraduationCap,
  MapPinned,
  MonitorSmartphone,
  Workflow,
  type LucideIcon,
} from "lucide-react";

export const officialNavigation = [
  { label: "制作費0円", href: "/#homepage" },
  { label: "サービス", href: "/#services" },
  { label: "業種別", href: "/#industries" },
  { label: "料金", href: "/#plans" },
  { label: "制作サンプル", href: "/#works" },
  { label: "FAQ", href: "/#faq" },
] as const;

export interface OfficialService {
  title: string;
  description: string;
  icon: LucideIcon;
}

export const officialServices: OfficialService[] = [
  {
    title: "ホームページ制作",
    description:
      "小規模事業者向けに、スマートフォン対応、問い合わせ導線、GoogleマップやSNS連携を備えたサイトを制作します。",
    icon: MonitorSmartphone,
  },
  {
    title: "Web集客・運用支援",
    description:
      "公開後の更新、Googleビジネスプロフィール、LINE・SNS、口コミ返信、問い合わせ導線の改善を支援します。",
    icon: MapPinned,
  },
  {
    title: "AI・業務効率化支援",
    description:
      "生成AIによる文章作成、マニュアル作成、データ整理、定型業務の小さな自動化を一緒に進めます。",
    icon: Bot,
  },
  {
    title: "生成AI研修",
    description:
      "ChatGPTやClaudeの基本操作、安全な使い方、実務での活用方法を少人数向けに分かりやすくお伝えします。",
    icon: GraduationCap,
  },
  {
    title: "業務システムのご相談",
    description:
      "順番待ち、口コミ返信、シフト作成など、店舗業務に合う小さな仕組みから導入を検討します。",
    icon: Workflow,
  },
  {
    title: "デジタル活用のご相談",
    description:
      "何から始めるべきか決まっていない段階でも、課題を伺い、優先順位を一緒に整理します。",
    icon: BriefcaseBusiness,
  },
];

export const businessActivities = [
  "ホームページの企画・制作・運用支援",
  "Googleビジネスプロフィール・LINE・SNS活用支援",
  "生成AIの導入・活用支援および研修",
  "業務効率化・自動化の相談",
] as const;

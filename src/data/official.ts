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
  { label: "サービス", href: "#services" },
  { label: "制作サンプル", href: "#works" },
  { label: "料金", href: "#price" },
  { label: "ご依頼の流れ", href: "#flow" },
  { label: "事業者情報", href: "#about" },
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
      "小規模店舗・中小企業向けに、スマートフォン対応と問い合わせ導線を備えたサイトを制作します。",
    icon: MonitorSmartphone,
  },
  {
    title: "AI活用支援",
    description:
      "日々の業務や情報発信に生成AIを取り入れる方法を、目的と習熟度に合わせて一緒に整理します。",
    icon: Bot,
  },
  {
    title: "生成AI研修",
    description:
      "基本操作から安全な使い方、実務でのプロンプト作成まで、少人数向けの研修を行います。",
    icon: GraduationCap,
  },
  {
    title: "業務効率化・自動化",
    description:
      "繰り返し作業や情報整理の流れを確認し、小さく始められる改善方法をご提案します。",
    icon: Workflow,
  },
  {
    title: "Googleビジネスプロフィール支援",
    description:
      "店舗情報の整備や更新方針など、地域のお客様に見つけてもらうための運用を支援します。",
    icon: MapPinned,
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
  "生成AIの導入・活用支援および研修",
  "業務効率化・自動化の相談",
  "Googleビジネスプロフィールの活用支援",
] as const;

/**
 * 対応ロケール定義。
 * 日本語は既存URL維持のためルート `/`（プレフィックスなし）。
 * 翻訳ページは `/en` `/zh-tw` `/zh-cn` `/ko`（小文字URLセグメント）。
 */
export const localeSegments = ["en", "zh-tw", "zh-cn", "ko"] as const;

export type LocaleSegment = (typeof localeSegments)[number];
export type Locale = "ja" | LocaleSegment;

export function isLocaleSegment(value: string): value is LocaleSegment {
  return (localeSegments as readonly string[]).includes(value);
}

/** hreflang / html lang 用の正式コード */
export const localeHreflang: Record<Locale, string> = {
  ja: "ja",
  en: "en",
  "zh-tw": "zh-TW",
  "zh-cn": "zh-CN",
  ko: "ko",
};

/** 言語切替メニューの自言語表記 */
export const localeLabels: Record<Locale, string> = {
  ja: "日本語",
  en: "English",
  "zh-tw": "繁體中文",
  "zh-cn": "简体中文",
  ko: "한국어",
};

/** ロケールのトップURLパス */
export function localePath(locale: Locale): string {
  return locale === "ja" ? "/" : `/${locale}/`;
}

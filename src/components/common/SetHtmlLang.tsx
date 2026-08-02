"use client";

import { useEffect } from "react";

/**
 * ルートレイアウトの <html lang="ja"> を、多言語ページ表示中だけ
 * ハイドレーション後に切り替える（SSR時に書き換えると hydration 警告になるため）。
 * SSR 段階の言語明示はページ側の <div lang> が担う。
 */
export function SetHtmlLang({ lang }: { lang: string }) {
  useEffect(() => {
    const previous = document.documentElement.lang;
    document.documentElement.lang = lang;
    return () => {
      document.documentElement.lang = previous;
    };
  }, [lang]);

  return null;
}

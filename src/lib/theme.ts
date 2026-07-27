import type { CSSProperties } from "react";
import type { ThemeConfig } from "@/types/site";

export function themeVars(theme: ThemeConfig): CSSProperties {
  return {
    "--primary": theme.primary,
    "--secondary": theme.secondary,
    "--accent": theme.accent,
    "--background": theme.background,
    "--surface": theme.surface,
    "--text": theme.text,
    "--muted": theme.muted,
  } as CSSProperties;
}

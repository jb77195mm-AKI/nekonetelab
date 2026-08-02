/**
 * ブランド猫の統一SVGイラスト。
 * 全シーンが同じ CatHead を共有することで「同一個体」に見せる。
 * 特徴の基準は docs/design-system.md（白〜クリーム・ベージュポイント・丸い瞳・ピンク鼻）。
 * ChatGPT 生成画像（webp）が用意されたら src/config/images.ts の差し替えで置換される。
 */

const cat = {
  fur: "#fbf6ec",
  cream: "#f3e7d4",
  beige: "#e4c7a2",
  nose: "#cf7f7b",
  eye: "#2a3646",
  line: "#c9b28e",
  bluegray: "#91a9bd",
  navy: "#15365c",
  mist: "#dfeef7",
  amber: "#d89a43",
} as const;

/** 顔（120×110 の座標系。中心はおよそ x=60, y=62） */
function CatHead() {
  return (
    <g>
      {/* 耳 */}
      <path d="M31 46 L24 13 Q23 9 27 11 L54 30 Z" fill={cat.fur} stroke={cat.line} strokeWidth="2" strokeLinejoin="round" />
      <path d="M89 46 L96 13 Q97 9 93 11 L66 30 Z" fill={cat.fur} stroke={cat.line} strokeWidth="2" strokeLinejoin="round" />
      <path d="M28.5 27 L25 14 Q24.5 11.5 27.5 13 L38 20.5 Z" fill={cat.beige} />
      <path d="M91.5 27 L95 14 Q95.5 11.5 92.5 13 L82 20.5 Z" fill={cat.beige} />
      {/* 頭 */}
      <ellipse cx="60" cy="63" rx="33" ry="29" fill={cat.fur} stroke={cat.line} strokeWidth="2" />
      {/* 顔のポイントカラー（額の斑） */}
      <path d="M64 36 Q74 33 82 40 Q76 46 68 46 Q64 42 64 36 Z" fill={cat.beige} opacity="0.6" />
      {/* 目 */}
      <circle cx="47" cy="60" r="5.6" fill={cat.eye} />
      <circle cx="73" cy="60" r="5.6" fill={cat.eye} />
      <circle cx="48.8" cy="58.2" r="1.7" fill="#ffffff" />
      <circle cx="74.8" cy="58.2" r="1.7" fill="#ffffff" />
      {/* 鼻と口 */}
      <path d="M57.4 70.5 Q60 68.8 62.6 70.5 Q61.8 74.2 60 74.6 Q58.2 74.2 57.4 70.5 Z" fill={cat.nose} />
      <path d="M60 74.8 Q57.5 78 54.5 76.6 M60 74.8 Q62.5 78 65.5 76.6" fill="none" stroke={cat.eye} strokeWidth="1.4" strokeLinecap="round" />
      {/* ひげ */}
      <g stroke={cat.bluegray} strokeWidth="1.2" strokeLinecap="round">
        <path d="M23 64 Q31 65 38 66" fill="none" />
        <path d="M24 72 Q32 71 38.5 70.5" fill="none" />
        <path d="M97 64 Q89 65 82 66" fill="none" />
        <path d="M96 72 Q88 71 81.5 70.5" fill="none" />
      </g>
    </g>
  );
}

interface CatProps {
  className?: string;
  /** 装飾目的が既定。意味を持たせる場合のみ label を渡す */
  label?: string;
}

function svgProps(label?: string) {
  return label
    ? ({ role: "img", "aria-label": label } as const)
    : ({ "aria-hidden": true } as const);
}

/** ロゴマーク（顔のみ・小サイズ向け） */
export function CatMark({ className, label }: CatProps) {
  return (
    <svg viewBox="8 2 104 106" className={className} {...svgProps(label)}>
      <CatHead />
    </svg>
  );
}

/** きちんと座る猫（フッター・アクセント用） */
export function CatSitting({ className, label }: CatProps) {
  return (
    <svg viewBox="0 0 150 190" className={className} {...svgProps(label)}>
      {/* しっぽ（ベージュの先端） */}
      <path
        d="M108 168 Q140 166 138 138 Q137 122 124 118"
        fill="none"
        stroke={cat.cream}
        strokeWidth="13"
        strokeLinecap="round"
      />
      <path d="M124 118 Q137 122 138 136" fill="none" stroke={cat.beige} strokeWidth="13" strokeLinecap="round" />
      {/* 胴体（細長く上品に） */}
      <path
        d="M45 172 Q38 120 55 96 Q64 84 75 84 Q86 84 95 96 Q112 120 105 172 Q104 178 97 178 L53 178 Q46 178 45 172 Z"
        fill={cat.fur}
        stroke={cat.line}
        strokeWidth="2"
      />
      {/* 前足 */}
      <path d="M60 178 L60 140" stroke={cat.line} strokeWidth="1.6" />
      <path d="M90 178 L90 140" stroke={cat.line} strokeWidth="1.6" />
      {/* 頭（少し小さめ＝上品な体型） */}
      <g transform="translate(19.5 6) scale(0.92)">
        <CatHead />
      </g>
    </svg>
  );
}

/** 手を振る猫（CTA用） */
export function CatWave({ className, label }: CatProps) {
  return (
    <svg viewBox="0 0 160 190" className={className} {...svgProps(label)}>
      <path
        d="M112 168 Q144 166 142 138 Q141 122 128 118"
        fill="none"
        stroke={cat.cream}
        strokeWidth="13"
        strokeLinecap="round"
      />
      <path d="M128 118 Q141 122 142 136" fill="none" stroke={cat.beige} strokeWidth="13" strokeLinecap="round" />
      <path
        d="M49 172 Q42 120 59 96 Q68 84 79 84 Q90 84 99 96 Q116 120 109 172 Q108 178 101 178 L57 178 Q50 178 49 172 Z"
        fill={cat.fur}
        stroke={cat.line}
        strokeWidth="2"
      />
      {/* 振っている前足（先端ベージュ） */}
      <path d="M104 106 Q124 92 132 72" fill="none" stroke={cat.fur} strokeWidth="13" strokeLinecap="round" />
      <path d="M104 106 Q124 92 132 72" fill="none" stroke={cat.line} strokeWidth="15" strokeLinecap="round" opacity="0.25" />
      <circle cx="133" cy="70" r="8.5" fill={cat.beige} />
      <path d="M64 178 L64 142" stroke={cat.line} strokeWidth="1.6" />
      <g transform="translate(23.5 6) scale(0.92)">
        <CatHead />
      </g>
      {/* 挨拶のキラ */}
      <path d="M143 46 l3.2 7.2 7.2 3.2 -7.2 3.2 -3.2 7.2 -3.2 -7.2 -7.2 -3.2 7.2 -3.2 Z" fill={cat.amber} />
    </svg>
  );
}

/** 首をかしげる猫（404用） */
export function CatTilt({ className, label }: CatProps) {
  return (
    <svg viewBox="0 0 160 190" className={className} {...svgProps(label)}>
      <path
        d="M110 170 Q142 168 140 140 Q139 124 126 120"
        fill="none"
        stroke={cat.cream}
        strokeWidth="13"
        strokeLinecap="round"
      />
      <path d="M126 120 Q139 124 140 138" fill="none" stroke={cat.beige} strokeWidth="13" strokeLinecap="round" />
      <path
        d="M47 174 Q40 122 57 98 Q66 86 77 86 Q88 86 97 98 Q114 122 107 174 Q106 180 99 180 L55 180 Q48 180 47 174 Z"
        fill={cat.fur}
        stroke={cat.line}
        strokeWidth="2"
      />
      <g transform="translate(24 16) rotate(-12 60 62) scale(0.92)">
        <CatHead />
      </g>
      <text x="124" y="42" fontSize="30" fontWeight="700" fill={cat.bluegray}>
        ?
      </text>
    </svg>
  );
}

/** ノートパソコンで働く猫（ヒーロー用・4:5） */
export function CatHeroWorking({ className, label }: CatProps) {
  return (
    <svg viewBox="0 0 320 400" className={className} {...svgProps(label)}>
      {/* 背景 */}
      <rect x="0" y="0" width="320" height="400" rx="28" fill={cat.mist} opacity="0.45" />
      <circle cx="262" cy="72" r="40" fill="#ffffff" opacity="0.7" />
      <circle cx="52" cy="320" r="52" fill="#ffffff" opacity="0.55" />
      {/* 机 */}
      <rect x="24" y="298" width="272" height="10" rx="5" fill={cat.bluegray} opacity="0.5" />
      {/* しっぽ */}
      <path d="M228 296 Q268 288 264 252 Q262 234 246 230" fill="none" stroke={cat.cream} strokeWidth="15" strokeLinecap="round" />
      <path d="M246 230 Q262 234 264 250" fill="none" stroke={cat.beige} strokeWidth="15" strokeLinecap="round" />
      {/* 胴体 */}
      <path
        d="M104 298 Q98 216 122 182 Q136 164 160 164 Q184 164 198 182 Q222 216 216 298 Z"
        fill={cat.fur}
        stroke={cat.line}
        strokeWidth="2.4"
      />
      {/* 頭 */}
      <g transform="translate(88 44) scale(1.2)">
        <CatHead />
      </g>
      {/* ノートPC（画面にワイヤーフレーム） */}
      <g>
        <rect x="92" y="218" width="136" height="74" rx="8" fill={cat.navy} />
        <rect x="100" y="226" width="120" height="58" rx="4" fill="#ffffff" />
        <rect x="106" y="232" width="52" height="7" rx="3.5" fill={cat.mist} />
        <rect x="106" y="245" width="108" height="5" rx="2.5" fill={cat.mist} />
        <rect x="106" y="255" width="88" height="5" rx="2.5" fill={cat.mist} />
        <rect x="106" y="267" width="34" height="11" rx="5.5" fill={cat.amber} />
        <rect x="80" y="292" width="160" height="9" rx="4.5" fill={cat.navy} opacity="0.92" />
      </g>
      {/* キーボードに置いた前足 */}
      <ellipse cx="128" cy="294" rx="14" ry="9" fill={cat.fur} stroke={cat.line} strokeWidth="2" />
      <ellipse cx="192" cy="294" rx="14" ry="9" fill={cat.fur} stroke={cat.line} strokeWidth="2" />
      <path d="M123 290 L123 297 M133 290 L133 297" stroke={cat.line} strokeWidth="1.4" strokeLinecap="round" />
      <path d="M187 290 L187 297 M197 290 L197 297" stroke={cat.line} strokeWidth="1.4" strokeLinecap="round" />
      {/* AIのきらめき */}
      <path d="M262 148 l4 9 9 4 -9 4 -4 9 -4 -9 -9 -4 9 -4 Z" fill={cat.amber} />
      <path d="M52 128 l2.8 6.4 6.4 2.8 -6.4 2.8 -2.8 6.4 -2.8 -6.4 -6.4 -2.8 6.4 -2.8 Z" fill={cat.bluegray} />
    </svg>
  );
}

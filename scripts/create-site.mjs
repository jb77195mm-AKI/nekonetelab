// 新規サイトのひな形を生成するスクリプト。
// 使い方: npm run create-site -- --name="Cafe Sakura" --type="store" --slug="cafe-sakura"
import { mkdirSync, writeFileSync, readFileSync, existsSync } from "node:fs";
import { fileURLToPath } from "node:url";
import path from "node:path";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");

function parseArgs() {
  const args = {};
  for (const arg of process.argv.slice(2)) {
    const match = arg.match(/^--([^=]+)=(.*)$/);
    if (match) {
      const [, key, rawValue] = match;
      args[key] = rawValue.replace(/^"|"$/g, "");
    }
  }
  return args;
}

const templateKindByType = { store: "store", booking: "booking", corporate: "corporate" };

function toCamelCase(slug) {
  return slug
    .split("-")
    .map((part, index) => (index === 0 ? part : part.charAt(0).toUpperCase() + part.slice(1)))
    .join("");
}

const defaultThemes = {
  store: { primary: "#7C5C3E", secondary: "#C9A227", accent: "#C99B5B", background: "#FBF6EE", surface: "#F3E9DA", text: "#3B2E22", muted: "#8A7A67" },
  booking: { primary: "#9C8672", secondary: "#D8CBBB", accent: "#B08968", background: "#FFFFFF", surface: "#F5F2EE", text: "#262220", muted: "#8A8378" },
  corporate: { primary: "#1E3A5F", secondary: "#3E5C7A", accent: "#2E7DD1", background: "#FFFFFF", surface: "#F3F5F7", text: "#1E293B", muted: "#64748B" },
};

function main() {
  const args = parseArgs();
  const { name, type, slug } = args;

  if (!name || !type || !slug) {
    console.error('使い方: npm run create-site -- --name="Cafe Sakura" --type="store|booking|corporate" --slug="cafe-sakura"');
    process.exit(1);
  }
  if (!templateKindByType[type]) {
    console.error(`--type は store / booking / corporate のいずれかを指定してください（指定値: ${type}）`);
    process.exit(1);
  }
  if (!/^[a-z0-9-]+$/.test(slug)) {
    console.error("--slug は半角英小文字・数字・ハイフンのみ使用できます。");
    process.exit(1);
  }

  const varName = `${toCamelCase(slug)}Site`;
  const dataFile = path.join(root, "src", "data", `${slug}.ts`);
  const pageFile = path.join(root, "src", "app", slug, "page.tsx");
  const imagesDir = path.join(root, "public", "images", slug);

  if (existsSync(dataFile)) {
    console.error(`既に src/data/${slug}.ts が存在します。別のslugを指定してください。`);
    process.exit(1);
  }

  const theme = defaultThemes[type];

  const dataContent = `import type { SiteData } from "@/types/site";

// TODO: 以下の項目を実際の店舗・企業情報に差し替えてください。
export const ${varName}: SiteData = {
  slug: "${slug}",
  siteName: "${name}",
  businessType: "業種を入力",
  templateKind: "${templateKindByType[type]}",
  tagline: "キャッチコピーを入力",
  description: "${name}の公式サイトです。",
  logoText: "${name}",
  noindex: true,

  theme: ${JSON.stringify(theme, null, 4).replace(/\n/g, "\n  ")},

  contact: {
    phone: "0300000000",
    phoneDisplay: "03-0000-0000",
    email: "info@${slug}.example.com",
  },

  address: {
    postalCode: "000-0000",
    prefecture: "東京都",
    city: "",
    street: "",
    mapEmbedUrl: "https://www.google.com/maps?q=&output=embed",
  },

  openingHours: [{ label: "営業時間", time: "10:00〜19:00" }],
  holidays: "定休日を入力",

  hero: {
    title: "キャッチコピー1行目\\nキャッチコピー2行目",
    subtitle: "サブキャッチコピーを入力",
    image: "/images/${slug}/hero.svg",
    primaryButtonText: "お問い合わせ",
    primaryButtonHref: "#contact",
  },

  features: [],
  services: [],
  menuItems: [],
  priceItems: [],
  staff: [],
  gallery: [],
  works: [],
  flow: [],
  faq: [],
  company: {
    name: "${name}",
    representative: "",
    business: "",
    area: "",
  },

  mobileCtaLabel: "お問い合わせ",
  mobileCtaHref: "#contact",
};
`;

  mkdirSync(path.dirname(dataFile), { recursive: true });
  writeFileSync(dataFile, dataContent, "utf-8");

  mkdirSync(path.dirname(pageFile), { recursive: true });
  const pageContent = `import type { Metadata } from "next";
import { ${varName} } from "@/data/${slug}";
import { SiteRenderer } from "@/templates/SiteRenderer";
import { buildSiteMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildSiteMetadata(${varName});

export default function Page() {
  return <SiteRenderer site={${varName}} />;
}
`;
  writeFileSync(pageFile, pageContent, "utf-8");

  mkdirSync(imagesDir, { recursive: true });
  const heroSvg = `<svg width="1600" height="1200" viewBox="0 0 1600 1200" xmlns="http://www.w3.org/2000/svg">
  <rect width="1600" height="1200" fill="${theme.primary}" />
  <text x="50%" y="50%" text-anchor="middle" font-family="sans-serif" font-size="56" font-weight="700" fill="#ffffff">${name}</text>
</svg>`;
  writeFileSync(path.join(imagesDir, "hero.svg"), heroSvg, "utf-8");

  const indexFile = path.join(root, "src", "data", "index.ts");
  let indexContent = readFileSync(indexFile, "utf-8");
  indexContent = indexContent.replace(
    'import type { SiteData, TemplateKind } from "@/types/site";',
    `import { ${varName} } from "./${slug}";\nimport type { SiteData, TemplateKind } from "@/types/site";`
  );
  const templateLabels = {
    store: "店舗・飲食型テンプレート",
    booking: "予約サービス型テンプレート",
    corporate: "企業・問い合わせ型テンプレート",
  };
  const newEntry = `  {
    data: ${varName},
    category: "業種を入力",
    templateLabel: "${templateLabels[type]}",
    templateKind: "${templateKindByType[type]}",
    thumbnail: "/images/${slug}/hero.svg",
    summary: "${name}の説明文を入力してください。",
  },
];`;
  indexContent = indexContent.replace(/\n\];\n/, `\n${newEntry}\n`);
  writeFileSync(indexFile, indexContent, "utf-8");

  console.log(`\n新規サイト "${name}" (${slug}) を作成しました。\n`);
  console.log("次にやること:");
  console.log(`  1. src/data/${slug}.ts の内容を実際の店舗・企業情報に書き換える`);
  console.log(`  2. public/images/${slug}/ の画像を必要に応じて追加・差し替える`);
  console.log(`  3. src/data/index.ts の category / summary を編集する`);
  console.log(`  4. npm run dev で http://localhost:3000/${slug} を確認する\n`);
}

main();

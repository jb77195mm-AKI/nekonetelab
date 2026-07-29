import fs from "node:fs";
import path from "node:path";

const projectRoot = process.cwd();

function read(relativePath) {
  return fs.readFileSync(path.join(projectRoot, relativePath), "utf8");
}

function assertIncludes(source, expected, label) {
  if (!source.includes(expected)) {
    throw new Error(`${label}: expected text was not found: ${expected}`);
  }
}

function assertExcludes(source, forbidden, label) {
  if (source.includes(forbidden)) {
    throw new Error(`${label}: forbidden text was found: ${forbidden}`);
  }
}

const businessModel = read("src/data/business-model.ts");
const webPlans = read("src/data/web-plans.ts");
const dxTools = read("src/data/dx-tools.ts");
const dxPacks = read("src/data/dx-packs.ts");
const languages = read("src/data/languages.ts");
const homepage = read("src/app/page.tsx");
const checkoutRoute = read(
  "src/app/api/stripe/create-checkout-session/route.ts",
);
const stripeLibrary = read("src/lib/stripe.ts");
const contactRoute = read("src/app/api/contact/route.ts");
const envExample = read(".env.example");
const nextConfig = read("next.config.ts");
const allCheckedSources = [
  businessModel,
  webPlans,
  dxTools,
  dxPacks,
  languages,
  homepage,
  checkoutRoute,
  stripeLibrary,
  contactRoute,
  envExample,
  nextConfig,
].join("\n");

assertIncludes(webPlans, 'slug: "web-start"', "Webスタートプラン");
assertIncludes(webPlans, "monthlyPrice: 9_800", "Webスタート月額");
assertIncludes(
  webPlans,
  "minimumTermMonths: 24",
  "Webスタート最低利用期間",
);
assertIncludes(webPlans, 'slug: "web-support"', "Webサポートプラン");
assertIncludes(webPlans, "monthlyPrice: 14_800", "Webサポート月額");
assertIncludes(webPlans, 'slug: "buyout"', "買い切りプラン");
assertIncludes(webPlans, "regularPrice: 148_000", "買い切り通常価格");
assertIncludes(webPlans, "monitorPrice: 98_000", "買い切りモニター価格");
assertIncludes(
  homepage,
  "<DxHomePreview />",
  "ホームページDX導線",
);
assertIncludes(dxTools, 'slug: "inbound-queue"', "インバウンド順番待ち");
assertIncludes(dxTools, "initialPrice: { minimum: 49_800", "順番待ち初期料金");
assertIncludes(dxTools, 'slug: "review-support"', "口コミ返信サポート");
assertIncludes(dxTools, 'slug: "skill-shift"', "スキル別AIシフト");
assertIncludes(dxPacks, 'slug: "salon-retention"', "サロン再来店DX");
assertIncludes(dxPacks, 'slug: "field-project"', "現場案件管理DX");
assertIncludes(
  dxPacks,
  'slug: "retail-food-backoffice"',
  "小売・飲食バックオフィスDX",
);
assertIncludes(languages, 'name: "標準10言語"', "標準10言語");
assertIncludes(languages, 'name: "15言語プラン"', "15言語プラン");
assertIncludes(languages, 'name: "20言語プラン"', "20言語プラン");
assertExcludes(allCheckedSources, 'slug: "balance"', "旧バランスプラン");
assertExcludes(allCheckedSources, 'slug: "omakase"', "旧おまかせプラン");
assertIncludes(
  stripeLibrary,
  'return mode === "stripe_test" ? "stripe_test" : "mock"',
  "Stripeテストモード制限",
);
assertIncludes(stripeLibrary, 'secretKey.startsWith("sk_test_")', "Stripeテストキー制限");
assertIncludes(
  contactRoute,
  'deliveryMode !== "forward"',
  "問い合わせモック既定",
);
assertIncludes(
  envExample,
  "SUBSCRIPTION_CHECKOUT_MODE=mock",
  "決済モック既定値",
);
assertIncludes(
  envExample,
  "CONTACT_DELIVERY_MODE=mock",
  "問い合わせモック既定値",
);
assertIncludes(nextConfig, '"X-Robots-Tag"', "デモnoindexヘッダー");
assertExcludes(allCheckedSources, "sk_live_", "Stripe本番キー");
assertExcludes(allCheckedSources, "pk_live_", "Stripe本番公開キー");

console.log("Business model and demo-safety checks passed.");

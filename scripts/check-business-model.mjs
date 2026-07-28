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
  homepage,
  checkoutRoute,
  stripeLibrary,
  contactRoute,
  envExample,
  nextConfig,
].join("\n");

assertIncludes(businessModel, 'slug: "web-start"', "Webスタートプラン");
assertIncludes(businessModel, "monthlyPrice: 9_800", "Webスタート月額");
assertIncludes(
  businessModel,
  "minimumTermMonths: 24",
  "Webスタート最低利用期間",
);
assertIncludes(businessModel, 'slug: "omakase"', "おまかせプラン");
assertIncludes(businessModel, "monthlyPrice: 14_800", "おまかせ月額");
assertIncludes(
  businessModel,
  "minimumTermMonths: 12",
  "おまかせ最低利用期間",
);
assertIncludes(
  homepage,
  "月額9,800円（税込）・最低利用期間24か月",
  "ホームページ料金表示",
);
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

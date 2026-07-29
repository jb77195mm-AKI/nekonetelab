const baseUrl = (process.env.SMOKE_BASE_URL ?? "http://127.0.0.1:8410").replace(
  /\/$/,
  "",
);
const expectedSiteUrl = process.env.SMOKE_EXPECT_SITE_URL?.replace(/\/$/, "");
const expectIndexable = process.env.SMOKE_EXPECT_INDEXABLE === "true";
const testUnconfiguredForm =
  process.env.SMOKE_EXPECT_FORM_UNCONFIGURED === "true";

const demoSiteRoutes = [
  "/cafe",
  "/salon",
  "/beauty",
  "/clinic",
  "/builder",
  "/corporate",
];
const solutionRoutes = [
  "/solutions",
  "/solutions/queue",
  "/solutions/review-reply",
  "/solutions/skill-shift",
];
const dxRoutes = [
  "/services/dx",
  "/services/dx/tools",
  "/services/dx/tools/inbound-queue",
  "/services/dx/tools/review-support",
  "/services/dx/tools/skill-shift",
  "/services/dx/packs",
  "/services/dx/packs/salon-retention",
  "/services/dx/packs/field-project",
  "/services/dx/packs/retail-food-backoffice",
];
const pageRoutes = [
  "/",
  "/privacy",
  "/services/web",
  ...demoSiteRoutes,
  ...solutionRoutes,
  ...dxRoutes,
];
const specialRoutes = ["/robots.txt", "/sitemap.xml", "/og.png"];
const failures = [];
let checks = 0;

function check(condition, message) {
  checks += 1;
  if (!condition) failures.push(message);
}

async function fetchRoute(path, init) {
  try {
    return await fetch(`${baseUrl}${path}`, {
      redirect: "manual",
      signal: AbortSignal.timeout(15_000),
      ...init,
    });
  } catch (error) {
    failures.push(`${path}: リクエスト失敗 (${error.message})`);
    return null;
  }
}

for (const path of [...pageRoutes, ...specialRoutes]) {
  const response = await fetchRoute(path);
  check(response?.status === 200, `${path}: 200ではありません (${response?.status})`);
}

const homeResponse = await fetchRoute("/");
if (homeResponse) {
  const html = await homeResponse.text();
  const requiredText = [
    "猫の手デジタルラボ",
    "ホームページ制作",
    "まずは、お困りごとをお聞かせください",
    "通常価格",
    "148,000円",
    "モニター価格",
    "98,000円",
    "3つの料金プラン",
    "インバウンド対応 かんたん順番待ち",
    "サロン再来店DXパック",
    "現場案件管理DXパック",
    "小売・飲食バックオフィスDXパック",
    "12業種の対応イメージ",
  ];
  const requiredLinks = [
    "https://www.instagram.com/nekonote_dlab/?hl=ja",
    "https://x.com/nekonote_dlab",
    "https://lin.ee/rWvSMpg",
    "/privacy",
    "/solutions",
    "/services/dx",
    "/services/dx/tools",
  ];

  for (const text of requiredText) {
    check(html.includes(text), `/: 必須テキスト「${text}」がありません`);
  }
  for (const href of requiredLinks) {
    check(html.includes(href), `/: 必須リンク「${href}」がありません`);
  }
  check(
    !html.includes("本当に49,800円で作れますか？"),
    "/: 旧料金FAQの質問が残っています",
  );

  check(
    html.includes('property="og:title"') &&
      html.includes('name="twitter:card"') &&
      html.includes('rel="icon"'),
    "/: OGP・Twitter Card・faviconのメタデータが不足しています",
  );
  check(!html.includes('href="tel:'), "/: 未設定の電話リンクが表示されています");
  check(
    !html.includes("google.com/maps/search"),
    "/: 未設定の所在地リンクが表示されています",
  );

  const robotsNoindex = html.includes('name="robots" content="noindex');
  check(
    expectIndexable ? !robotsNoindex : robotsNoindex,
    `/: robotsメタ情報が期待値と異なります (indexable=${expectIndexable})`,
  );

  if (expectedSiteUrl) {
    check(
      html.includes(`rel="canonical" href="${expectedSiteUrl}`),
      "/: canonical URLが期待値と異なります",
    );
    check(
      html.includes(`${expectedSiteUrl}/og.png`),
      "/: OGP画像URLが期待値と異なります",
    );
  }

  const expectedHeaders = {
    "strict-transport-security": "max-age=31536000",
    "x-content-type-options": "nosniff",
    "x-frame-options": "DENY",
    "referrer-policy": "strict-origin-when-cross-origin",
    "permissions-policy":
      "camera=(), microphone=(), geolocation=(), browsing-topics=()",
  };
  for (const [name, value] of Object.entries(expectedHeaders)) {
    check(
      homeResponse.headers.get(name) === value,
      `/: セキュリティヘッダー ${name} が期待値と異なります`,
    );
  }
  check(
    homeResponse.headers.get("x-powered-by") === null,
    "/: X-Powered-Byが公開されています",
  );
}

for (const path of demoSiteRoutes) {
  const response = await fetchRoute(path);
  if (!response) continue;
  const html = await response.text();
  check(
    html.includes('name="robots" content="noindex'),
    `${path}: noindexがありません`,
  );
  check(html.includes("デモサイト"), `${path}: デモ表示がありません`);
}

for (const path of solutionRoutes) {
  const response = await fetchRoute(path);
  if (!response) continue;
  const html = await response.text();
  check(
    html.includes('name="robots" content="noindex, nofollow"') ||
      html.includes('name="robots" content="noindex'),
    `${path}: noindexがありません`,
  );
  check(
    html.includes("現在、サービス内容を検証中です") ||
      html.includes("外部送信、保存、AI処理は行いません"),
    `${path}: デモ説明がありません`,
  );
  if (path === "/solutions/queue") {
    for (const requiredText of [
      "多言語受付デモ",
      "標準10言語",
      "15言語プラン",
      "20言語プラン",
      "言語数によって料金が変わる理由",
      "固定翻訳とリアルタイム翻訳",
      "翻訳内容は開発中の参考表示です",
    ]) {
      check(html.includes(requiredText), `${path}: 必須テキスト「${requiredText}」がありません`);
    }
  }
}

for (const path of dxRoutes) {
  const response = await fetchRoute(path);
  if (!response) continue;
  const html = await response.text();
  check(
    html.includes('name="robots" content="noindex, nofollow"') ||
      html.includes('name="robots" content="noindex'),
    `${path}: noindexがありません`,
  );
  check(
    html.includes("相談受付中") ||
      html.includes("既存システムを活かす") ||
      html.includes("DXツール"),
    `${path}: DXサービスの説明がありません`,
  );
}

const robotsResponse = await fetchRoute("/robots.txt");
if (robotsResponse) {
  const robots = await robotsResponse.text();
  check(
    expectIndexable ? robots.includes("Allow: /") : robots.includes("Disallow: /"),
    "/robots.txt: インデックス設定が期待値と異なります",
  );
  if (expectedSiteUrl) {
    check(
      robots.includes(`Sitemap: ${expectedSiteUrl}/sitemap.xml`),
      "/robots.txt: sitemap URLが期待値と異なります",
    );
  }
}

const sitemapResponse = await fetchRoute("/sitemap.xml");
if (sitemapResponse && expectedSiteUrl) {
  const sitemap = await sitemapResponse.text();
  check(sitemap.includes(`<loc>${expectedSiteUrl}</loc>`), "/sitemap.xml: トップURLがありません");
  check(
    sitemap.includes(`<loc>${expectedSiteUrl}/privacy</loc>`),
    "/sitemap.xml: プライバシーポリシーURLがありません",
  );
  for (const demoPath of [...demoSiteRoutes, ...solutionRoutes, ...dxRoutes]) {
    check(!sitemap.includes(demoPath), `/sitemap.xml: デモページ ${demoPath} が含まれています`);
  }
}

const ogResponse = await fetchRoute("/og.png");
check(
  ogResponse?.headers.get("content-type")?.startsWith("image/png"),
  "/og.png: PNGとして配信されていません",
);

const notFoundResponse = await fetchRoute("/__smoke-missing-page__");
check(notFoundResponse?.status === 404, "/__smoke-missing-page__: 404ではありません");
if (notFoundResponse) {
  const html = await notFoundResponse.text();
  check(html.includes("ページが見つかりません"), "404ページ: 独自メッセージがありません");
}

const invalidContactResponse = await fetchRoute("/api/contact", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({}),
});
check(invalidContactResponse?.status === 400, "/api/contact: 不正入力が400になりません");
check(
  invalidContactResponse?.headers.get("cache-control") === "no-store",
  "/api/contact: Cache-Control no-storeがありません",
);
check(
  invalidContactResponse?.headers.get("x-robots-tag") ===
    "noindex, nofollow, nosnippet",
  "/api/contact: X-Robots-Tagがありません",
);

if (testUnconfiguredForm) {
  const validContactResponse = await fetchRoute("/api/contact", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      formType: "official",
      name: "公開前テスト",
      company: "",
      email: "test@example.com",
      phone: "",
      inquiryType: "ホームページ制作",
      message: "CONTACT_FORM_ENDPOINT未設定時の応答確認です。",
      consent: true,
      website: "",
    }),
  });
  check(
    validContactResponse?.status === 503,
    "/api/contact: 未設定時に503 not_configuredになりません",
  );
}

if (failures.length > 0) {
  console.error(`\nSmoke test failed: ${failures.length}/${checks} checks`);
  for (const failure of failures) console.error(`- ${failure}`);
  process.exit(1);
}

console.log(`Smoke test passed: ${checks} checks (${baseUrl})`);

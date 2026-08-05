import "server-only";
import type { LocaleSegment } from "./locales";

/**
 * 多言語要約トップページ（/en /zh-tw /zh-cn /ko）の文言。
 * 数値（料金・期間）はコード側で web-plans.ts / dx-tools.ts から注入し、
 * ここでは翻訳文言のみを持つ（金額の二重管理をしない）。
 */

export interface SummaryDict {
  meta: { title: string; description: string };
  langNote: string;
  hero: {
    badge: string;
    title1: string;
    title2: string;
    lead: string;
    ctaContact: string;
    ctaLine: string;
    catAlt: string;
  };
  services: {
    title: string;
    lead: string;
    items: { title: string; description: string }[];
  };
  plans: {
    title: string;
    lead: string;
    initialLabel: string;
    monthlyLabel: string;
    monthlyUnit: string;
    taxNote: string;
    noMinimumTerm: string;
    minimumTerm: string;
    monitorBadge: string;
    webStart: {
      name: string;
      tagline: string;
      features: string[];
      cancelNote: string;
      priceNote: string;
    };
    webSupport: { name: string; tagline: string; features: string[]; priceNote: string };
    buyout: {
      name: string;
      tagline: string;
      features: string[];
      priceNote: string;
    };
    recommendedBadge: string;
    extraNote: string;
  };
  tools: {
    title: string;
    lead: string;
    initialLabel: string;
    monthlyLabel: string;
    fromSuffix: string;
    items: { key: "queue" | "review" | "shift"; name: string; description: string }[];
  };
  area: {
    title: string;
    body: string;
  };
  contact: {
    title: string;
    lead: string;
    languageNote: string;
    emailLabel: string;
    lineLabel: string;
    formLabel: string;
    instagramLabel: string;
    xLabel: string;
  };
  footer: {
    japaneseSite: string;
    privacy: string;
  };
}

export const summaries: Record<LocaleSegment, SummaryDict> = {
  en: {
    meta: {
      title: "Nekonote Digital Lab | Websites, Web marketing & AI support for small businesses",
      description:
        "Website production starting at ¥0 upfront on a monthly plan (monitor price; regular ¥198,000), Google Maps, LINE, social media, generative AI, and workflow automation. Based in Nabari & Iga, Mie — online support nationwide in Japan.",
    },
    langNote: "This is a summary page in English. Full details are on the Japanese site.",
    hero: {
      badge: "Nabari & Iga, Mie | Online support across Japan",
      title1: "Websites from ¥0 upfront (monitor price).",
      title2: "Your outside web & AI team.",
      lead: "We build and manage websites for small businesses on a monthly plan, and support Google Maps, LINE, social media, generative AI, and everyday workflow improvements — all through one contact.",
      ctaContact: "Contact by email",
      ctaLine: "Chat on LINE",
      catAlt: "Illustration of our brand cat working on a laptop",
    },
    services: {
      title: "What we do",
      lead: "Choose only what you need. We explain everything in plain language.",
      items: [
        {
          title: "Website production",
          description:
            "Smartphone-ready websites for small businesses with inquiry funnels, Google Maps, and social media links.",
        },
        {
          title: "Web marketing & operation",
          description:
            "Post-launch updates, Google Business Profile, LINE & social media, review replies, and inquiry-funnel improvement.",
        },
        {
          title: "AI & workflow efficiency",
          description:
            "Keeping your current systems, we add AI drafting, data organizing, and small automations of routine work.",
        },
        {
          title: "Generative AI training",
          description:
            "Small-group training on ChatGPT and Claude: basics, safe usage, and practical business use.",
        },
        {
          title: "Business system consulting",
          description:
            "Single-purpose DX tools and industry DX packs — starting from a small mechanism that fits shop operations.",
        },
        {
          title: "Digital consultation",
          description:
            "Even before anything is decided, we listen to your challenges and prioritize together.",
        },
      ],
    },
    plans: {
      title: "Website plans",
      lead: "Three plans by how you want to start and how much support you need. Prices are tax-included Japanese yen.",
      initialLabel: "Initial fee",
      monthlyLabel: "Monthly",
      monthlyUnit: "/ month",
      taxNote: "All prices include Japanese consumption tax.",
      noMinimumTerm: "No minimum term",
      minimumTerm: "Minimum term: 24 months",
      monitorBadge: "Monitor price",
      webStart: {
        name: "Web Start Plan",
        tagline: "Up to 4 pages, produced and managed for you",
        priceNote:
          "Initial production fee: regular ¥198,000 → monitor price ¥0 (tax incl.).",
        features: [
          "Up to 4 pages, industry-based design",
          "Smartphone support & contact form",
          "Google Maps, social media & LINE links",
          "Basic SEO, server, SSL & backups",
          "Minor updates once a month (within 15 min)",
        ],
        cancelNote:
          "Early cancellation within 24 months: remaining months × ¥9,800 (tax incl.). No cancellation fee after 24 months.",
      },
      webSupport: {
        name: "Web Support Plan",
        tagline: "Adds hearing, AI-drafted copy, and twice-monthly updates",
        priceNote:
          "Initial production fee: regular ¥198,000 → monitor price ¥0 (tax incl.).",
        features: [
          "Up to 6 pages, semi-original design",
          "60-min online hearing (once)",
          "AI-drafted copy from a question sheet",
          "Minor updates twice a month (30 min total)",
        ],
      },
      buyout: {
        name: "One-time Purchase Plan",
        tagline: "For businesses that manage the site themselves after launch",
        features: [
          "Up to 5 pages, semi-original design",
          "Smartphone support & contact form",
          "Google Maps, social media & LINE links",
          "2 revisions during production",
        ],
        priceNote: "Regular ¥148,000 → monitor price ¥98,000 (tax incl.). Optional maintenance available.",
      },
      recommendedBadge: "Main plan",
      extraNote:
        "Custom domains and external paid services are billed separately. Detailed terms are provided in Japanese before any contract.",
    },
    tools: {
      title: "Single-purpose DX tools",
      lead: "Small tools that improve one specific task. Reference prices in tax-included yen.",
      initialLabel: "Setup",
      monthlyLabel: "Monthly",
      fromSuffix: "~",
      items: [
        {
          key: "queue",
          name: "Multilingual Queue Ticketing",
          description:
            "Visitors scan a QR code and take a queue ticket in their own language — no app, no sign-up. Designed for restaurants, tourist spots, and busy shops welcoming international guests.",
        },
        {
          key: "review",
          name: "Review Reply Support",
          description:
            "AI drafts replies to Google reviews matched to star ratings and your shop's tone. A person always reviews before posting.",
        },
        {
          key: "shift",
          name: "AI Shift Scheduling",
          description:
            "AI proposes shift drafts from staff skills, availability, and required headcount. Managers make the final call.",
        },
      ],
    },
    area: {
      title: "Local in Mie, online nationwide",
      body: "Based in Nabari City, Mie Prefecture. In-person meetings are available around Nabari & Iga; everywhere else in Japan we work fully online — from consultation to production, launch, and updates.",
    },
    contact: {
      title: "Contact us",
      lead: "Free consultation. It's fine if your plans aren't concrete yet.",
      languageNote:
        "Our services are provided mainly in Japanese. You are welcome to write in English — replies may be in Japanese or assisted by translation tools.",
      emailLabel: "Email",
      lineLabel: "Official LINE",
      formLabel: "Contact form (Japanese)",
      instagramLabel: "Instagram",
      xLabel: "X",
    },
    footer: {
      japaneseSite: "Japanese site (full version)",
      privacy: "Privacy Policy (Japanese)",
    },
  },
  "zh-tw": {
    meta: {
      title: "貓手數位實驗室｜小型企業的網站製作・網路行銷・AI 支援",
      description:
        "初期製作費原價 198,000 日圓、體驗價 0 日圓起的月費制網站製作，並支援 Google 地圖、LINE、社群媒體、生成式 AI 與業務效率化。據點位於日本三重縣名張市・伊賀市，全日本線上對應。",
    },
    langNote: "本頁為繁體中文摘要。完整內容請參閱日文網站。",
    hero: {
      badge: "日本三重縣 名張市・伊賀市｜全日本線上對應",
      title1: "網站製作，初期費用體驗價 0 日圓起。",
      title2: "成為貴公司的外部 Web・AI 夥伴。",
      lead: "以月費制為小型企業製作並管理網站，並透過同一個窗口支援 Google 地圖、LINE、社群媒體、生成式 AI 與日常業務改善。",
      ctaContact: "以電子郵件聯絡",
      ctaLine: "透過 LINE 諮詢",
      catAlt: "品牌貓咪使用筆記型電腦工作的插圖",
    },
    services: {
      title: "服務內容",
      lead: "只選擇需要的項目，以淺顯易懂的方式說明。",
      items: [
        { title: "網站製作", description: "為小型企業製作支援智慧型手機、具備洽詢動線、Google 地圖與社群連結的網站。" },
        { title: "網路行銷・營運支援", description: "上線後的更新、Google 商家檔案、LINE 與社群媒體、評論回覆及洽詢動線改善。" },
        { title: "AI・業務效率化", description: "保留現有系統，加入 AI 草稿撰寫、資料整理與例行業務的小型自動化。" },
        { title: "生成式 AI 研習", description: "以小班制講解 ChatGPT 與 Claude 的基本操作、安全使用方式與實務應用。" },
        { title: "業務系統諮詢", description: "提供單一功能 DX 工具與業種別 DX 方案，從符合店務的小型機制開始導入。" },
        { title: "數位活用諮詢", description: "即使尚未決定方向，也可先談談課題，一起整理優先順序。" },
      ],
    },
    plans: {
      title: "網站方案",
      lead: "依開始方式與支援範圍分為三種方案。價格皆為含稅日圓。",
      initialLabel: "初期費用",
      monthlyLabel: "月費",
      monthlyUnit: "／月",
      taxNote: "所有價格均含日本消費稅。",
      noMinimumTerm: "無最低使用期間",
      minimumTerm: "最低使用期間：24 個月",
      monitorBadge: "體驗價",
      webStart: {
        name: "Web Start 方案",
        tagline: "由我們製作並管理最多 4 頁的官方網站",
        priceNote: "初期製作費原價 198,000 日圓 → 體驗價 0 日圓（含稅）。",
        features: [
          "最多 4 頁・業種別基礎設計",
          "支援智慧型手機・洽詢表單",
          "Google 地圖・社群・LINE 連結",
          "基本 SEO・伺服器・SSL・備份",
          "每月 1 次（15 分鐘內）的小幅更新",
        ],
        cancelNote:
          "24 個月內中途解約時，解約金為剩餘月數 × 9,800 日圓（含稅）；滿 24 個月後解約免費。",
      },
      webSupport: {
        name: "Web Support 方案",
        tagline: "加上訪談、AI 文案草稿與每月 2 次更新",
        priceNote: "初期製作費原價 198,000 日圓 → 體驗價 0 日圓（含稅）。",
        features: [
          "最多 6 頁・半客製化設計",
          "首次線上訪談 60 分鐘（1 次）",
          "依問卷內容產出 AI 文案草稿",
          "每月 2 次（合計 30 分鐘內）的小幅更新",
        ],
      },
      buyout: {
        name: "買斷方案",
        tagline: "適合上線後自行管理網站的企業",
        features: [
          "最多 5 頁・半客製化設計",
          "支援智慧型手機・洽詢表單",
          "Google 地圖・社群・LINE 連結",
          "製作期間可修改 2 次",
        ],
        priceNote: "原價 148,000 日圓 → 體驗價 98,000 日圓（含稅）。可另加選維護服務。",
      },
      recommendedBadge: "主力方案",
      extraNote: "自有網域與外部付費服務另計。正式契約前將以日文提供詳細條款。",
    },
    tools: {
      title: "單一功能 DX 工具",
      lead: "針對單一業務進行小規模改善的工具。參考價格為含稅日圓。",
      initialLabel: "初期",
      monthlyLabel: "月費",
      fromSuffix: "起",
      items: [
        {
          key: "queue",
          name: "多語言取號候位系統",
          description:
            "顧客掃描 QR Code 即可以自己的語言取號候位，無需下載 App 或註冊會員。適合接待外國旅客的餐廳、觀光設施與人氣店家。",
        },
        {
          key: "review",
          name: "評論回覆支援",
          description: "AI 依星等與店家語氣草擬 Google 評論回覆，發佈前一律由人工確認。",
        },
        {
          key: "shift",
          name: "AI 排班（依技能）",
          description: "AI 依員工技能、可上班時間與所需人數提出排班草案，最終由管理者確定。",
        },
      ],
    },
    area: {
      title: "深耕三重，線上服務全日本",
      body: "據點位於日本三重縣名張市。名張・伊賀周邊可安排面談，其他地區則以線上方式完成從諮詢、製作、上線到更新的全部流程。",
    },
    contact: {
      title: "聯絡我們",
      lead: "免費諮詢。尚未決定方向也沒關係。",
      languageNote:
        "本服務主要以日文提供。歡迎以中文來信，回覆可能為日文或借助翻譯工具。",
      emailLabel: "電子郵件",
      lineLabel: "官方 LINE",
      formLabel: "洽詢表單（日文）",
      instagramLabel: "Instagram",
      xLabel: "X",
    },
    footer: {
      japaneseSite: "日文網站（完整版）",
      privacy: "隱私權政策（日文）",
    },
  },
  "zh-cn": {
    meta: {
      title: "猫手数字实验室｜小微企业的网站制作・网络营销・AI 支持",
      description:
        "初期制作费原价 198,000 日元、体验价 0 日元起的月费制网站制作，并支持谷歌地图、LINE、社交媒体、生成式 AI 与业务效率化。总部位于日本三重县名张市・伊贺市，全日本在线对应。",
    },
    langNote: "本页为简体中文摘要。完整内容请参阅日文网站。",
    hero: {
      badge: "日本三重县 名张市・伊贺市｜全日本在线对应",
      title1: "网站制作，初期费用体验价 0 日元起。",
      title2: "成为贵公司的外部 Web・AI 伙伴。",
      lead: "以月费制为小微企业制作并管理网站，并通过同一个窗口支持谷歌地图、LINE、社交媒体、生成式 AI 与日常业务改善。",
      ctaContact: "通过电子邮件联系",
      ctaLine: "通过 LINE 咨询",
      catAlt: "品牌猫使用笔记本电脑工作的插图",
    },
    services: {
      title: "服务内容",
      lead: "只选择需要的项目，用通俗易懂的方式说明。",
      items: [
        { title: "网站制作", description: "为小微企业制作适配智能手机、具备咨询动线、谷歌地图与社交链接的网站。" },
        { title: "网络营销・运营支持", description: "上线后的更新、谷歌商家资料、LINE 与社交媒体、评论回复及咨询动线改善。" },
        { title: "AI・业务效率化", description: "保留现有系统，加入 AI 草稿撰写、资料整理与例行业务的小型自动化。" },
        { title: "生成式 AI 培训", description: "以小班制讲解 ChatGPT 与 Claude 的基本操作、安全使用方式与实务应用。" },
        { title: "业务系统咨询", description: "提供单一功能 DX 工具与行业 DX 方案，从符合店铺业务的小型机制开始导入。" },
        { title: "数字化活用咨询", description: "即使尚未确定方向，也可以先聊聊课题，一起整理优先顺序。" },
      ],
    },
    plans: {
      title: "网站方案",
      lead: "按开始方式与支持范围分为三种方案。价格均为含税日元。",
      initialLabel: "初期费用",
      monthlyLabel: "月费",
      monthlyUnit: "／月",
      taxNote: "所有价格均含日本消费税。",
      noMinimumTerm: "无最低使用期限",
      minimumTerm: "最低使用期限：24 个月",
      monitorBadge: "体验价",
      webStart: {
        name: "Web Start 方案",
        tagline: "由我们制作并管理最多 4 页的官方网站",
        priceNote: "初期制作费原价 198,000 日元 → 体验价 0 日元（含税）。",
        features: [
          "最多 4 页・按行业的基础设计",
          "适配智能手机・咨询表单",
          "谷歌地图・社交・LINE 链接",
          "基础 SEO・服务器・SSL・备份",
          "每月 1 次（15 分钟内）的小幅更新",
        ],
        cancelNote:
          "24 个月内中途解约时，解约金为剩余月数 × 9,800 日元（含税）；满 24 个月后解约免费。",
      },
      webSupport: {
        name: "Web Support 方案",
        tagline: "增加访谈、AI 文案草稿与每月 2 次更新",
        priceNote: "初期制作费原价 198,000 日元 → 体验价 0 日元（含税）。",
        features: [
          "最多 6 页・半定制设计",
          "首次在线访谈 60 分钟（1 次）",
          "根据问卷内容生成 AI 文案草稿",
          "每月 2 次（合计 30 分钟内）的小幅更新",
        ],
      },
      buyout: {
        name: "买断方案",
        tagline: "适合上线后自行管理网站的企业",
        features: [
          "最多 5 页・半定制设计",
          "适配智能手机・咨询表单",
          "谷歌地图・社交・LINE 链接",
          "制作期间可修改 2 次",
        ],
        priceNote: "原价 148,000 日元 → 体验价 98,000 日元（含税）。可另选维护服务。",
      },
      recommendedBadge: "主力方案",
      extraNote: "自有域名与外部付费服务另计。正式签约前将以日文提供详细条款。",
    },
    tools: {
      title: "单一功能 DX 工具",
      lead: "针对单一业务进行小规模改善的工具。参考价格为含税日元。",
      initialLabel: "初期",
      monthlyLabel: "月费",
      fromSuffix: "起",
      items: [
        {
          key: "queue",
          name: "多语言取号排队系统",
          description:
            "顾客扫描二维码即可用自己的语言取号排队，无需下载 App 或注册会员。适合接待外国游客的餐厅、旅游设施与人气店铺。",
        },
        {
          key: "review",
          name: "评论回复支持",
          description: "AI 根据星级与店铺语气起草谷歌评论回复，发布前均由人工确认。",
        },
        {
          key: "shift",
          name: "AI 排班（按技能）",
          description: "AI 根据员工技能、可上班时间与所需人数提出排班草案，最终由管理者确定。",
        },
      ],
    },
    area: {
      title: "扎根三重，在线服务全日本",
      body: "总部位于日本三重县名张市。名张・伊贺周边可安排面谈，其他地区则通过在线方式完成从咨询、制作、上线到更新的全部流程。",
    },
    contact: {
      title: "联系我们",
      lead: "免费咨询。尚未确定方向也没关系。",
      languageNote:
        "本服务主要以日语提供。欢迎用中文来信，回复可能为日语或借助翻译工具。",
      emailLabel: "电子邮件",
      lineLabel: "官方 LINE",
      formLabel: "咨询表单（日语）",
      instagramLabel: "Instagram",
      xLabel: "X",
    },
    footer: {
      japaneseSite: "日语网站（完整版）",
      privacy: "隐私政策（日语）",
    },
  },
  ko: {
    meta: {
      title: "네코노테 디지털 랩｜소규모 사업자를 위한 홈페이지 제작・웹 마케팅・AI 지원",
      description:
        "초기 제작비 정가 198,000엔 → 모니터 가격 0엔부터 시작하는 월정액 홈페이지 제작과 구글 지도, LINE, SNS, 생성형 AI, 업무 효율화 지원. 일본 미에현 나바리시・이가시 거점, 일본 전역 온라인 대응.",
    },
    langNote: "이 페이지는 한국어 요약본입니다. 자세한 내용은 일본어 사이트를 참고해 주세요.",
    hero: {
      badge: "일본 미에현 나바리・이가｜일본 전역 온라인 대응",
      title1: "홈페이지 제작, 초기 비용 모니터 가격 0엔부터.",
      title2: "귀사의 외부 Web・AI 담당이 되어 드립니다.",
      lead: "월정액으로 소규모 사업자의 홈페이지를 제작・관리하고, 구글 지도, LINE, SNS, 생성형 AI, 일상 업무 개선까지 하나의 창구로 지원합니다.",
      ctaContact: "이메일로 문의하기",
      ctaLine: "LINE으로 상담하기",
      catAlt: "노트북으로 일하는 브랜드 고양이 일러스트",
    },
    services: {
      title: "서비스 안내",
      lead: "필요한 것만 골라서, 어려운 용어 없이 설명해 드립니다.",
      items: [
        { title: "홈페이지 제작", description: "스마트폰 대응, 문의 동선, 구글 지도・SNS 연동을 갖춘 소규모 사업자용 홈페이지를 제작합니다." },
        { title: "웹 마케팅・운영 지원", description: "공개 후 업데이트, 구글 비즈니스 프로필, LINE・SNS, 리뷰 답변, 문의 동선 개선을 지원합니다." },
        { title: "AI・업무 효율화", description: "기존 시스템은 그대로 두고, AI 초안 작성・자료 정리・반복 업무의 소규모 자동화를 더합니다." },
        { title: "생성형 AI 교육", description: "ChatGPT와 Claude의 기본 조작, 안전한 사용법, 실무 활용을 소수 인원으로 알기 쉽게 전달합니다." },
        { title: "업무 시스템 상담", description: "단일 기능 DX 도구와 업종별 DX 패키지를 나누어, 매장 업무에 맞는 작은 구조부터 도입을 검토합니다." },
        { title: "디지털 활용 상담", description: "무엇부터 시작할지 정해지지 않은 단계라도, 과제를 듣고 우선순위를 함께 정리합니다." },
      ],
    },
    plans: {
      title: "홈페이지 요금제",
      lead: "시작 방식과 지원 범위에 따라 3가지 요금제가 있습니다. 가격은 모두 세금 포함 일본 엔화입니다.",
      initialLabel: "초기 비용",
      monthlyLabel: "월정액",
      monthlyUnit: "／월",
      taxNote: "모든 가격은 일본 소비세 포함입니다.",
      noMinimumTerm: "최소 이용 기간 없음",
      minimumTerm: "최소 이용 기간: 24개월",
      monitorBadge: "모니터 가격",
      webStart: {
        name: "Web Start 플랜",
        tagline: "최대 4페이지의 공식 사이트를 제작하고 관리해 드립니다",
        priceNote: "초기 제작비 정가 198,000엔 → 모니터 가격 0엔(세금 포함).",
        features: [
          "최대 4페이지・업종별 기본 디자인",
          "스마트폰 대응・문의 폼",
          "구글 지도・SNS・LINE 연동",
          "기본 SEO・서버・SSL・백업",
          "월 1회(15분 이내) 소규모 업데이트",
        ],
        cancelNote:
          "24개월 미만 중도 해지 시 해지금은 잔여 개월 수 × 9,800엔(세금 포함)입니다. 24개월 경과 후에는 해지금이 없습니다.",
      },
      webSupport: {
        name: "Web Support 플랜",
        tagline: "히어링, AI 원고 초안, 월 2회 업데이트까지 지원",
        priceNote: "초기 제작비 정가 198,000엔 → 모니터 가격 0엔(세금 포함).",
        features: [
          "최대 6페이지・세미 오리지널 디자인",
          "첫 온라인 히어링 60분(1회)",
          "질문지 기반 AI 원고 초안",
          "월 2회(합계 30분 이내) 소규모 업데이트",
        ],
      },
      buyout: {
        name: "일시불 플랜",
        tagline: "공개 후 직접 사이트를 관리하실 분께",
        features: [
          "최대 5페이지・세미 오리지널 디자인",
          "스마트폰 대응・문의 폼",
          "구글 지도・SNS・LINE 연동",
          "제작 중 수정 2회",
        ],
        priceNote: "정가 148,000엔 → 모니터 가격 98,000엔(세금 포함). 유지보수는 선택 사항입니다.",
      },
      recommendedBadge: "주력 플랜",
      extraNote: "자체 도메인과 외부 유료 서비스는 별도입니다. 정식 계약 전 상세 조건은 일본어로 안내됩니다.",
    },
    tools: {
      title: "단일 기능 DX 도구",
      lead: "특정 업무 하나를 작게 개선하는 도구입니다. 참고 가격은 세금 포함 엔화입니다.",
      initialLabel: "초기",
      monthlyLabel: "월정액",
      fromSuffix: "~",
      items: [
        {
          key: "queue",
          name: "다국어 대기표 시스템",
          description:
            "QR 코드를 스캔하면 앱 설치나 회원 가입 없이 자기 언어로 대기표를 받을 수 있습니다. 외국인 관광객을 맞이하는 음식점・관광 시설・인기 매장에 적합합니다.",
        },
        {
          key: "review",
          name: "리뷰 답변 지원",
          description: "별점과 매장의 어투에 맞춰 AI가 구글 리뷰 답변 초안을 작성하고, 게시 전 반드시 사람이 확인합니다.",
        },
        {
          key: "shift",
          name: "AI 근무표 작성(스킬별)",
          description: "직원의 스킬・가능 시간・필요 인원을 바탕으로 AI가 근무표 초안을 제안하고, 최종 확정은 관리자가 합니다.",
        },
      ],
    },
    area: {
      title: "미에현 거점, 일본 전역 온라인 대응",
      body: "일본 미에현 나바리시를 거점으로 활동합니다. 나바리・이가 주변은 대면 상담이 가능하며, 그 외 지역은 상담부터 제작・공개・업데이트까지 온라인으로 진행합니다.",
    },
    contact: {
      title: "문의하기",
      lead: "무료 상담입니다. 내용이 정해지지 않은 단계라도 괜찮습니다.",
      languageNote:
        "서비스는 주로 일본어로 제공됩니다. 한국어로 보내 주셔도 되며, 답변은 일본어 또는 번역 도구를 활용해 드릴 수 있습니다.",
      emailLabel: "이메일",
      lineLabel: "공식 LINE",
      formLabel: "문의 폼(일본어)",
      instagramLabel: "Instagram",
      xLabel: "X",
    },
    footer: {
      japaneseSite: "일본어 사이트(전체판)",
      privacy: "개인정보 처리방침(일본어)",
    },
  },
};

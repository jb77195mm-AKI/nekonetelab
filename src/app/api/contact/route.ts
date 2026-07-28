import { NextResponse } from "next/server";
import { siteConfig } from "@/config/site";
import {
  consultationMethods,
  consultationPlans,
  officialInquiryTypes,
} from "@/data/contact";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const maxRequestBytes = 60_000;

type ContactBody = Record<string, unknown>;

function textValue(body: ContactBody, key: string): string {
  const value = body[key];
  return typeof value === "string" ? value.trim() : "";
}

function hasValidOfficialFields(body: ContactBody): boolean {
  const name = textValue(body, "name");
  const businessName = textValue(body, "businessName");
  const email = textValue(body, "email");
  const phone = textValue(body, "phone");
  const prefecture = textValue(body, "prefecture");
  const industry = textValue(body, "industry");
  const hasWebsite = textValue(body, "hasWebsite");
  const inquiryType = textValue(body, "inquiryType");
  const plan = textValue(body, "plan");
  const consultationMethod = textValue(body, "consultationMethod");
  const message = textValue(body, "message");

  return (
    name.length > 0 &&
    name.length <= 100 &&
    businessName.length <= 120 &&
    email.length <= 254 &&
    emailPattern.test(email) &&
    phone.length <= 30 &&
    prefecture.length <= 50 &&
    industry.length <= 80 &&
    ["", "none", "exists", "renewal"].includes(hasWebsite) &&
    officialInquiryTypes.includes(inquiryType as (typeof officialInquiryTypes)[number]) &&
    consultationPlans.some((item) => item.value === plan) &&
    (consultationMethod === "" ||
      consultationMethods.includes(
        consultationMethod as (typeof consultationMethods)[number],
      )) &&
    message.length > 0 &&
    message.length <= 5000 &&
    body.consent === true
  );
}

function hasValidDemoFields(body: ContactBody): boolean {
  const name = textValue(body, "name");
  const email = textValue(body, "email");
  const message = textValue(body, "message");
  return Boolean(name && emailPattern.test(email) && message && body.consent === true);
}

export async function POST(request: Request) {
  const contentLength = Number(request.headers.get("content-length") ?? "0");
  if (contentLength > maxRequestBytes) {
    return NextResponse.json({ ok: false, error: "payload_too_large" }, { status: 413 });
  }

  const body = (await request.json().catch(() => null)) as ContactBody | null;
  if (!body || typeof body !== "object" || Array.isArray(body)) {
    return NextResponse.json({ ok: false, error: "invalid_input" }, { status: 400 });
  }

  const isOfficialForm = body.formType === "official";
  const isValid = isOfficialForm ? hasValidOfficialFields(body) : hasValidDemoFields(body);
  if (!isValid) {
    return NextResponse.json({ ok: false, error: "invalid_input" }, { status: 400 });
  }

  if (isOfficialForm && textValue(body, "website")) {
    return NextResponse.json({ ok: true });
  }

  const deliveryMode = process.env.CONTACT_DELIVERY_MODE?.trim() ?? "mock";
  if (deliveryMode !== "forward") {
    return NextResponse.json({ ok: true, demo: true });
  }

  const endpoint = process.env.CONTACT_FORM_ENDPOINT?.trim();
  if (!endpoint) {
    if (isOfficialForm) {
      return NextResponse.json({ ok: false, error: "not_configured" }, { status: 503 });
    }
    return NextResponse.json({ ok: true, demo: true });
  }

  let endpointUrl: URL;
  try {
    endpointUrl = new URL(endpoint);
    const isLocalEndpoint =
      endpointUrl.hostname === "localhost" ||
      endpointUrl.hostname === "127.0.0.1" ||
      endpointUrl.hostname === "::1";
    if (endpointUrl.protocol !== "https:" && !(endpointUrl.protocol === "http:" && isLocalEndpoint)) {
      throw new Error("Unsupported protocol");
    }
  } catch {
    return NextResponse.json({ ok: false, error: "invalid_configuration" }, { status: 500 });
  }

  const payload = isOfficialForm
    ? {
        formType: "official",
        recipient: siteConfig.contactToEmail,
        name: textValue(body, "name"),
        businessName: textValue(body, "businessName"),
        email: textValue(body, "email"),
        phone: textValue(body, "phone"),
        prefecture: textValue(body, "prefecture"),
        industry: textValue(body, "industry"),
        hasWebsite: textValue(body, "hasWebsite"),
        inquiryType: textValue(body, "inquiryType"),
        plan: textValue(body, "plan"),
        consultationMethod: textValue(body, "consultationMethod"),
        message: textValue(body, "message"),
        submittedAt: new Date().toISOString(),
      }
    : body;

  try {
    const response = await fetch(endpointUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(payload),
      signal: AbortSignal.timeout(10_000),
      cache: "no-store",
    });

    if (!response.ok) {
      return NextResponse.json({ ok: false, error: "forward_failed" }, { status: 502 });
    }

    return NextResponse.json({ ok: true, demo: false });
  } catch {
    return NextResponse.json({ ok: false, error: "forward_failed" }, { status: 502 });
  }
}

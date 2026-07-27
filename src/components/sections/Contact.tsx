import { SectionTitle } from "@/components/common/SectionTitle";
import { ContactForm } from "@/components/common/ContactForm";
import { CTA } from "@/components/common/CTA";
import { Phone, MessageCircle } from "lucide-react";
import type { ContactConfig } from "@/types/site";

export function Contact({
  contact,
  siteName,
  title,
}: {
  contact: ContactConfig;
  siteName: string;
  title?: string;
}) {
  return (
    <section id="contact" className="bg-[var(--surface)] py-16 sm:py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <SectionTitle eyebrow="CONTACT" title={title ?? "お問い合わせ"} />
        <div className="mt-12 grid gap-10 lg:grid-cols-2">
          <div className="space-y-4">
            <CTA href={`tel:${contact.phone}`} className="w-full sm:w-auto">
              <Phone className="h-4 w-4" aria-hidden="true" />
              {contact.phoneDisplay}に電話する
            </CTA>
            {contact.lineUrl ? (
              <CTA href={contact.lineUrl} variant="secondary" className="w-full sm:w-auto">
                <MessageCircle className="h-4 w-4" aria-hidden="true" />
                LINEで相談する
              </CTA>
            ) : null}
            <p className="pt-2 text-sm text-[var(--muted)]">
              お急ぎの場合はお電話にてお問い合わせください。フォームでのお問い合わせは通常1〜2営業日以内にご返信いたします。
            </p>
          </div>
          <div className="rounded-2xl border border-[var(--muted)]/15 bg-[var(--background)] p-6 sm:p-8">
            <ContactForm siteName={siteName} />
          </div>
        </div>
      </div>
    </section>
  );
}

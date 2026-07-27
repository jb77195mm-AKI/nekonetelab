import { SectionTitle } from "@/components/common/SectionTitle";
import { MapEmbed } from "@/components/common/MapEmbed";
import type { AddressConfig, OpeningHour } from "@/types/site";

export function Access({
  address,
  openingHours,
  holidays,
  siteName,
}: {
  address: AddressConfig;
  openingHours: OpeningHour[];
  holidays: string;
  siteName: string;
}) {
  return (
    <section id="access" className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
      <SectionTitle eyebrow="ACCESS" title="店舗情報・アクセス" />
      <div className="mt-12 grid gap-10 sm:grid-cols-2">
        <dl className="space-y-4 text-sm">
          <div>
            <dt className="font-bold text-[var(--text)]">住所</dt>
            <dd className="mt-1 text-[var(--muted)]">
              〒{address.postalCode} {address.prefecture}
              {address.city}
              {address.street}
            </dd>
          </div>
          <div>
            <dt className="font-bold text-[var(--text)]">営業時間</dt>
            <dd className="mt-1 space-y-0.5 text-[var(--muted)]">
              {openingHours.map((hour) => (
                <div key={hour.label}>
                  {hour.label}：{hour.time}
                </div>
              ))}
            </dd>
          </div>
          <div>
            <dt className="font-bold text-[var(--text)]">定休日</dt>
            <dd className="mt-1 text-[var(--muted)]">{holidays}</dd>
          </div>
        </dl>
        <MapEmbed src={address.mapEmbedUrl} title={`${siteName}の地図`} />
      </div>
    </section>
  );
}

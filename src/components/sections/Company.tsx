import { SectionTitle } from "@/components/common/SectionTitle";
import type { CompanyInfo, OpeningHour } from "@/types/site";

export function Company({
  company,
  openingHours,
  holidays,
}: {
  company: CompanyInfo;
  openingHours: OpeningHour[];
  holidays: string;
}) {
  const rows: [string, string][] = [
    ["会社名", company.name],
    ["代表者", company.representative],
    ...(company.founded ? ([["設立", company.founded]] as [string, string][]) : []),
    ...(company.capital ? ([["資本金", company.capital]] as [string, string][]) : []),
    ...(company.employees ? ([["従業員数", company.employees]] as [string, string][]) : []),
    ["事業内容", company.business],
    ["対応地域", company.area],
  ];

  return (
    <section id="company" className="bg-[var(--surface)] py-16 sm:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <SectionTitle eyebrow="COMPANY" title="会社概要" />
        <dl className="mt-10 divide-y divide-[var(--muted)]/15 rounded-2xl border border-[var(--muted)]/15 bg-[var(--background)]">
          {rows.map(([label, value]) => (
            <div key={label} className="grid grid-cols-3 gap-4 px-6 py-4">
              <dt className="text-sm font-bold text-[var(--text)]">{label}</dt>
              <dd className="col-span-2 text-sm text-[var(--muted)]">{value}</dd>
            </div>
          ))}
          <div className="grid grid-cols-3 gap-4 px-6 py-4">
            <dt className="text-sm font-bold text-[var(--text)]">営業時間</dt>
            <dd className="col-span-2 text-sm text-[var(--muted)]">
              {openingHours.map((hour) => (
                <div key={hour.label}>
                  {hour.label}：{hour.time}
                </div>
              ))}
              <div className="mt-1">定休日：{holidays}</div>
            </dd>
          </div>
        </dl>
      </div>
    </section>
  );
}

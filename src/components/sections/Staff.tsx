import { SectionTitle } from "@/components/common/SectionTitle";
import { PlaceholderImage } from "@/components/common/PlaceholderImage";
import type { StaffMember } from "@/types/site";

export function Staff({ staff }: { staff: StaffMember[] }) {
  return (
    <section id="staff" className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
      <SectionTitle eyebrow="STAFF" title="スタッフ紹介" />
      <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {staff.map((member) => (
          <div key={member.name} className="text-center">
            <div className="relative mx-auto aspect-[3/4] w-full max-w-[240px] overflow-hidden rounded-2xl">
              <PlaceholderImage src={member.image} alt={`${member.name}の写真`} sizes="240px" />
            </div>
            <p className="mt-4 text-base font-semibold text-[var(--text)]">{member.name}</p>
            <p className="text-xs font-semibold text-[var(--primary)]">{member.role}</p>
            <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">{member.message}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

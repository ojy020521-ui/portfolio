import SectionTitle from "./SectionTitle";

const AWARDS = [
  {
    tag: "우수상",
    org: "2025년 숭실대학교 논문 발표회",
    description:
      "학부 연구생으로 수행한 광학 소재 연구를 발표하여 우수상을 수상했습니다.",
  },
];

export default function Awards() {
  return (
    <section id="awards" className="px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <SectionTitle index="03">수상</SectionTitle>
        <div className="flex flex-col gap-4">
          {AWARDS.map((award) => (
            <div
              key={award.org}
              className="rounded-[10px] border border-border bg-background p-7"
            >
              <div className="mb-3 flex flex-wrap items-center gap-3">
                <span className="rounded-full bg-accent px-3 py-1 text-xs font-semibold text-accent-ink">
                  {award.tag}
                </span>
                <span className="text-xs text-foreground-muted">{award.org}</span>
              </div>
              <p className="text-sm text-foreground-muted sm:text-base">
                {award.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import SectionTitle from "./SectionTitle";

const ITEMS = [
  {
    type: "수상",
    tag: "우수상",
    year: "2025",
    org: "숭실대학교 논문 발표회",
    title: "학부 연구생 광학 소재 연구 발표",
    description:
      "학부 연구생으로 수행한 광학 소재 연구를 발표하여 우수상을 수상했습니다.",
  },
  {
    type: "발표",
    tag: "국제학회 포스터",
    year: "2025",
    org: "10th Asian Applied Physics Conference · 일본 미야자키",
    title:
      "Excitation-dependent Optical Thermometric Properties of Er³⁺/Yb³⁺ Codoped Ca₃Al₂Ge₃O₁₂ Ceramics",
    description:
      "여기 파장(381 / 980 nm)에 따른 발광 특성과 FIR 기반 광학 온도 센서 성능을 발표했습니다.",
    link: "/aapc2025-poster.pdf",
    linkText: "포스터 보기",
  },
];

export default function Awards() {
  return (
    <section id="awards" className="bg-background-alt px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <SectionTitle index="04">수상 및 발표</SectionTitle>
        <div className="grid gap-5 sm:grid-cols-2">
          {ITEMS.map((item) => (
            <article
              key={item.title}
              className="flex flex-col rounded-[10px] border border-border bg-background p-7"
            >
              <div className="mb-4 flex flex-wrap items-center gap-2.5">
                <span
                  className={
                    item.type === "수상"
                      ? "rounded-full bg-accent px-3 py-1 text-xs font-semibold text-accent-ink"
                      : "rounded-full border border-accent px-3 py-1 text-xs font-semibold text-accent"
                  }
                >
                  {item.tag}
                </span>
                <span className="text-xs text-foreground-muted">{item.year}</span>
              </div>
              <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-foreground-muted">
                {item.org}
              </p>
              <h3 className="mb-3 text-base font-bold leading-snug tracking-tight">
                {item.title}
              </h3>
              <p className="text-sm text-foreground-muted">{item.description}</p>
              {item.link && (
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 self-start rounded-full border border-border px-3 py-1.5 text-xs font-medium text-accent hover:bg-background-alt"
                >
                  {item.linkText} ↗
                </a>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

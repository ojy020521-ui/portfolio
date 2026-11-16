const STATS = [
  {
    value: "제1저자",
    unit: "",
    label: "SCIE 논문 · J. Alloys Compd. 2026",
  },
  {
    value: "1",
    unit: " / 31",
    label: "학과 석차 · 백분율 96.5",
  },
  {
    value: "4.15",
    unit: " / 4.5",
    label: "GPA · 전공 4.18",
  },
];

function EmissionSpectrum() {
  return (
    <figure className="relative overflow-hidden rounded-[14px] border border-border bg-background-alt p-5">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-[#2fbf71]/20 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-12 -left-8 h-40 w-40 rounded-full bg-[#e5484d]/15 blur-3xl"
      />
      <div className="relative mb-3 flex items-center justify-between gap-2">
        <span className="text-xs font-semibold uppercase tracking-wide text-foreground-muted">
          Er³⁺/Yb³⁺ : Ca₃Al₂Ge₃O₁₂
        </span>
        <span className="flex gap-1.5">
          <span className="rounded-full border border-border bg-background px-2 py-0.5 text-[11px]">
            λex 381 nm
          </span>
          <span className="rounded-full border border-border bg-background px-2 py-0.5 text-[11px]">
            980 nm
          </span>
        </span>
      </div>
      <svg
        viewBox="0 0 320 190"
        className="relative w-full"
        role="img"
        aria-label="Er³⁺ 이온의 녹색(약 525·550 nm)과 적색(약 660 nm) 발광 피크를 나타낸 개략도"
      >
        <defs>
          <linearGradient id="g-green" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#2fbf71" stopOpacity="0.85" />
            <stop offset="100%" stopColor="#2fbf71" stopOpacity="0.05" />
          </linearGradient>
          <linearGradient id="g-red" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#e5484d" stopOpacity="0.85" />
            <stop offset="100%" stopColor="#e5484d" stopOpacity="0.05" />
          </linearGradient>
        </defs>
        <path
          d="M20 160 C 62 160, 74 112, 86 112 C 96 112, 98 140, 104 140 C 110 140, 112 30, 121 30 C 130 30, 134 158, 160 160 Z"
          fill="url(#g-green)"
          stroke="#2fbf71"
          strokeWidth="1.5"
        />
        <path
          d="M180 160 C 208 160, 216 86, 230 86 C 244 86, 252 158, 290 160 Z"
          fill="url(#g-red)"
          stroke="#e5484d"
          strokeWidth="1.5"
        />
        <line x1="14" y1="160" x2="306" y2="160" stroke="currentColor" strokeOpacity="0.25" />
        <g fill="currentColor" fillOpacity="0.55" fontSize="10">
          <text x="22" y="176">500</text>
          <text x="148" y="176">600</text>
          <text x="262" y="176">700 nm</text>
        </g>
        <g fill="currentColor" fillOpacity="0.75" fontSize="10">
          <text x="128" y="26">²H₁₁/₂ · ⁴S₃/₂</text>
          <text x="240" y="80">⁴F₉/₂</text>
        </g>
      </svg>
      <figcaption className="relative mt-2 text-xs text-foreground-muted">
        Er³⁺ 녹색·적색 발광 개략도 — 여기 파장에 따라 R/G 비가 바뀌는 다중 모드 발광
      </figcaption>
    </figure>
  );
}

export default function Hero() {
  return (
    <section id="home" className="px-6 pb-24 pt-32 sm:pt-36">
      <div className="mx-auto max-w-4xl">
        <div className="grid items-center gap-12 md:grid-cols-[1.25fr_1fr]">
          <div>
            <p className="mb-5 text-sm font-semibold uppercase tracking-wide text-accent">
              Physics · Optical Materials & Photonics
            </p>
            <h1 className="mb-6 text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl">
              빛을 내는 소재를
              <br />
              연구하는 오재엽입니다.
            </h1>
            <p className="mb-10 max-w-lg text-lg text-foreground-muted">
              희토류 도핑 형광체를 직접 합성하고, 발광 특성과 온도 센싱 성능을
              분석해 왔습니다. KIST에서는 양자광학 이론과 시뮬레이션으로 빛을
              보는 시야를 넓혔습니다.
            </p>
            <div className="flex flex-col gap-3.5 sm:flex-row">
              <a
                href="#research"
                className="inline-flex items-center justify-center rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-accent-ink transition-transform hover:-translate-y-0.5"
              >
                연구 보기
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-lg border border-border px-6 py-3 text-sm font-semibold transition-colors hover:border-foreground-muted"
              >
                연락하기
              </a>
            </div>
          </div>
          <EmissionSpectrum />
        </div>

        <dl className="mt-16 grid grid-cols-3 gap-4 border-t border-border pt-8 sm:gap-8">
          {STATS.map((stat) => (
            <div key={stat.label}>
              <dt className="sr-only">{stat.label}</dt>
              <dd>
                <p className="mb-1 text-xl font-bold tracking-tight sm:text-3xl">
                  {stat.value}
                  {stat.unit && (
                    <span className="text-sm font-medium text-foreground-muted">
                      {stat.unit}
                    </span>
                  )}
                </p>
                <p className="text-xs text-foreground-muted sm:text-sm">{stat.label}</p>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

export default function Hero() {
  return (
    <section id="home" className="px-6 pb-24 pt-32 sm:pt-36">
      <div className="mx-auto max-w-4xl">
        <p className="mb-5 text-sm font-semibold uppercase tracking-wide text-accent">
          Physics · Quantum & Optics Research
        </p>
        <h1 className="mb-6 text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl">
          안녕하세요,
          <br />
          오재엽입니다.
        </h1>
        <p className="mb-10 max-w-lg text-lg text-foreground-muted">
          물리학을 전공하며 광학 소재와 양자정보이론을 연구합니다.
          <br />
          데이터와 코드로 현상을 분석하는 것을 좋아합니다.
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
    </section>
  );
}

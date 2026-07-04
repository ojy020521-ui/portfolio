export default function Hero() {
  return (
    <section id="home" className="px-6 pb-24 pt-32 sm:pt-36">
      <div className="mx-auto max-w-4xl">
        <p className="mb-5 text-sm font-semibold uppercase tracking-wide text-accent">
          Physics · Curious Builder
        </p>
        <h1 className="mb-6 text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl">
          안녕하세요,
          <br />
          오재엽입니다.
        </h1>
        <p className="mb-10 max-w-lg text-lg text-foreground-muted">
          물리학을 전공하며 논리적으로 문제를 분석하고,
          <br />
          코드로 아이디어를 구현하는 것을 좋아합니다.
        </p>
        <div className="flex flex-col gap-3.5 sm:flex-row">
          <a
            href="#projects"
            className="inline-flex items-center justify-center rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-accent-ink transition-transform hover:-translate-y-0.5"
          >
            프로젝트 보기
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

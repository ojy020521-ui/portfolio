import SectionTitle from "./SectionTitle";

const INTERESTS = ["물리학", "데이터 분석", "소프트웨어 개발"];

export default function About() {
  return (
    <section id="about" className="px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <SectionTitle index="01">소개</SectionTitle>
        <div className="grid gap-14 sm:grid-cols-[1.4fr_1fr]">
          <p className="text-base text-foreground-muted sm:text-[1.05rem]">
            물리학과에서 자연 현상을 수식과 논리로 풀어내는 훈련을 받았습니다.
            이러한 분석적 사고를 바탕으로 개발과 문제 해결에도 흥미를 가지고
            있습니다. (자기소개 내용은 추후 채워주세요.)
          </p>
          <div>
            <div className="mb-7">
              <h3 className="mb-2.5 text-xs font-semibold uppercase tracking-wide text-foreground-muted">
                나이
              </h3>
              <p>25세</p>
            </div>
            <div className="mb-7">
              <h3 className="mb-2.5 text-xs font-semibold uppercase tracking-wide text-foreground-muted">
                학력
              </h3>
              <p>물리학과 학부생</p>
            </div>
            <div>
              <h3 className="mb-2.5 text-xs font-semibold uppercase tracking-wide text-foreground-muted">
                관심 분야
              </h3>
              <ul className="flex flex-wrap gap-2">
                {INTERESTS.map((item) => (
                  <li
                    key={item}
                    className="rounded-full border border-border px-3 py-1.5 text-sm"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

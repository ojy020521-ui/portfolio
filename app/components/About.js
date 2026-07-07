import SectionTitle from "./SectionTitle";

const INTERESTS = ["광학 소재", "양자정보", "양자계측", "데이터 분석"];
const COURSES = ["양자역학", "현대물리학", "물리측정실험", "양자컴퓨터물리"];

export default function About() {
  return (
    <section id="about" className="px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <SectionTitle index="01">소개</SectionTitle>
        <div className="grid gap-14 sm:grid-cols-[1.3fr_1fr]">
          <div>
            <p className="mb-10 text-base text-foreground-muted sm:text-[1.05rem]">
              물리학을 전공하며 자연 현상을 수식과 논리로 풀어내는 훈련을 받았습니다.
              광학 소재 실험부터 양자정보이론 시뮬레이션까지, 실험과 계산을 오가며
              데이터로 답을 찾아가는 과정에 흥미를 느낍니다.
            </p>
            <div className="grid grid-cols-2 gap-6 border-t border-border pt-8">
              <div>
                <p className="mb-1 text-2xl font-bold tracking-tight">
                  4.15<span className="text-sm font-medium text-foreground-muted"> / 4.5</span>
                </p>
                <p className="text-xs text-foreground-muted">전체 평점</p>
              </div>
              <div>
                <p className="mb-1 text-2xl font-bold tracking-tight">
                  4.18<span className="text-sm font-medium text-foreground-muted"> / 4.5</span>
                </p>
                <p className="text-xs text-foreground-muted">전공 평점</p>
              </div>
            </div>
          </div>
          <div>
            <div className="mb-7">
              <h3 className="mb-2.5 text-xs font-semibold uppercase tracking-wide text-foreground-muted">
                학력
              </h3>
              <p className="text-base">숭실대학교 물리학과</p>
              <p className="text-sm text-foreground-muted">B.S. in Physics</p>
            </div>
            <div className="mb-7">
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
            <div>
              <h3 className="mb-2.5 text-xs font-semibold uppercase tracking-wide text-foreground-muted">
                관련 교과목
              </h3>
              <ul className="flex flex-wrap gap-2">
                {COURSES.map((item) => (
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

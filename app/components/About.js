import SectionTitle from "./SectionTitle";

const INTERESTS = ["광학 소재", "희토류 형광체", "광학 온도 센서", "발광 분광 분석", "양자광학"];
const COURSES = ["광학", "고체물리", "전자소재물리", "반도체물리", "고급실험", "양자역학"];

const STRENGTHS = [
  {
    title: "합성부터 응용까지",
    body: "고상반응법 시료 합성 → XRD·XPS 구조 분석 → PL·UCL 발광 측정 → 온도 센서·위조 방지 응용까지 한 흐름으로 수행했습니다.",
  },
  {
    title: "데이터로 말하기",
    body: "FIR 분석, Judd-Ofelt 계산, CIE 색좌표 등 측정 데이터를 정량적인 지표로 바꾸어 해석합니다.",
  },
  {
    title: "실험과 이론을 함께",
    body: "KIST에서 양자 위상 추정 이론을 유도하고 Python·QuTiP으로 검증하며 계산 역량을 더했습니다.",
  },
];

export default function About() {
  return (
    <section id="about" className="px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <SectionTitle index="01">소개</SectionTitle>
        <div className="grid gap-14 sm:grid-cols-[1.3fr_1fr]">
          <div>
            <p className="mb-5 text-lg font-semibold leading-snug tracking-tight sm:text-xl">
              빛과 물질이 만나는 지점에서, 측정 가능한 성능을 만드는 소재를 연구합니다.
            </p>
            <p className="mb-10 text-base text-foreground-muted sm:text-[1.05rem]">
              학부 연구생으로 Er³⁺/Yb³⁺ 공도핑 가넷 형광체를 합성하고, 여기 파장에
              따라 발광 색이 바뀌는 특성을 광학 온도 센서와 위조 방지 기술로
              연결했습니다. 이 연구는 제1저자 논문과 국제학회 발표로 이어졌습니다.
              시료를 만드는 손과 데이터를 해석하는 눈을 함께 갖춘 연구자가 되고자
              합니다.
            </p>
            <ul className="flex flex-col gap-3">
              {STRENGTHS.map((item, i) => (
                <li
                  key={item.title}
                  className="flex gap-4 rounded-[10px] border border-border bg-background p-5"
                >
                  <span className="text-sm font-bold text-accent">0{i + 1}</span>
                  <div>
                    <p className="mb-1 text-sm font-bold tracking-tight">{item.title}</p>
                    <p className="text-sm text-foreground-muted">{item.body}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <div className="mb-7">
              <h3 className="mb-2.5 text-xs font-semibold uppercase tracking-wide text-foreground-muted">
                학력
              </h3>
              <p className="text-base">숭실대학교 물리학과</p>
              <p className="mb-3 text-sm text-foreground-muted">
                B.S. in Physics · 2021.03 입학
              </p>
              <span className="inline-block rounded-full bg-background-alt px-3 py-1.5 text-sm font-bold text-accent">
                7학기 조기졸업
              </span>
            </div>
            <div className="mb-7">
              <h3 className="mb-2.5 text-xs font-semibold uppercase tracking-wide text-foreground-muted">
                성적
              </h3>
              <dl className="grid grid-cols-[auto_1fr] gap-x-4 gap-y-1.5 text-sm">
                <dt className="text-foreground-muted">학과 석차</dt>
                <dd className="font-semibold">1 / 31 · 백분율 96.5</dd>
                <dt className="text-foreground-muted">전체 평점</dt>
                <dd className="font-semibold">4.15 / 4.5</dd>
                <dt className="text-foreground-muted">전공 평점</dt>
                <dd className="font-semibold">4.18 / 4.5</dd>
              </dl>
              <a
                href="/transcript.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block rounded-full border border-border px-3 py-1.5 text-xs font-medium text-accent hover:bg-background-alt"
              >
                성적증명서 보기 ↗
              </a>
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

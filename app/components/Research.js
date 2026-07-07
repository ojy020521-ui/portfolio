import SectionTitle from "./SectionTitle";

const RESEARCH = [
  {
    id: "01",
    org: "KIST 인턴 · 양자정보이론 연구",
    period: "2026.01 - 2026.06",
    title: "광자 손실 환경에서의 다중 모드 양자 위상 추정 최적화",
    description:
      "광자 손실이 존재하는 다중 모드 양자계에서 위상 추정 성능이 어떻게 변화하는지 분석한 연구입니다. Quantum Fisher Information(QFI)을 유도하고 Python 기반 수치 시뮬레이션을 수행하여, 위상이 인가되는 모드 수 k, 전체 모드 수 m, 손실률 η, 평균 광자 수 n̄, 입자 분포 비율 ε 등이 추정 정밀도에 미치는 영향을 확인했습니다. 이를 통해 고정밀 양자 센싱을 위한 최적의 위상 인가 조건을 탐색했습니다.",
    keywords: [
      "Quantum Fisher Information(QFI)",
      "양자 계측",
      "다중 모드 위상 추정",
      "광자 손실",
      "위상 인가 조건 최적화",
      "Python 시뮬레이션",
    ],
    details: [
      "광자 손실을 고려한 다중 모드 위상 추정 모델 분석",
      "Quantum Fisher Information(QFI) 식 유도",
      "m, k, η, ε, n̄ 변화에 따른 추정 정밀도 분석",
      "Python을 이용한 수치 시뮬레이션 수행",
      "그래프와 heatmap을 통한 최적 조건 시각화",
      "Shot Noise Limit(SQL)과 비교하여 양자 향상 가능성 분석",
    ],
  },
  {
    id: "02",
    org: "학부 연구생 · 광학 소재 및 포토닉 응용 연구",
    period: "2024.09 - 2025.12",
    title: "Er³⁺/Yb³⁺ 공도핑 CAG 세라믹의 광학 온도 센서 및 포토닉 응용 연구",
    description:
      "학부 연구생으로서 Er³⁺/Yb³⁺ 공도핑 Ca₃Al₂Ge₃O₁₂ 세라믹의 광학 온도 센서 및 포토닉 응용 가능성을 연구했습니다. 시료 합성, 구조 분석, 발광 특성 분석, 온도 의존성 측정, 데이터 해석, 논문 작성 과정을 수행했습니다. 이를 통해 실험 연구, 데이터 분석, 학술 발표, 논문 작성에 대한 경험을 쌓을 수 있었습니다.",
    achievements: [
      {
        label: "논문 게재",
        title:
          "Multimodal emission platform based on Er³⁺/Yb³⁺ co-doped Ca₃Al₂Ge₃O₁₂ for advanced photonic applications",
        meta: "Journal of Alloys and Compounds, 2026",
      },
      {
        label: "국제학회 포스터 발표",
        title: "Er³⁺/Yb³⁺ 공도핑 CAG 세라믹의 여기 파장 의존 광학 온도 센서 특성",
        meta: "10th Asian Applied Physics Conference · 2025, 일본 미야자키",
      },
    ],
    details: [
      "Er³⁺/Yb³⁺ 공도핑 CAG 세라믹 형광체 시료 합성",
      "XRD 및 Rietveld refinement를 이용한 결정 구조 분석",
      "SEM 및 XPS를 이용한 미세구조와 화학 상태 분석",
      "UV 및 NIR 여기 조건에서 PL 및 UCL 발광 특성 분석",
      "FIR 분석을 이용한 광학 온도 센서 성능 평가",
      "위조 방지 및 지문 검출 응용 가능성 확인",
    ],
  },
];

export default function Research() {
  return (
    <section id="research" className="bg-background-alt px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <SectionTitle index="02">연구</SectionTitle>
        <div className="flex flex-col gap-7">
          {RESEARCH.map((item) => (
            <article
              key={item.id}
              className="rounded-[10px] border border-border bg-background p-7 sm:p-8"
            >
              <div className="mb-3 flex flex-wrap items-center gap-3">
                <span className="text-xs font-semibold uppercase tracking-wide text-accent">
                  {item.org}
                </span>
                <span className="text-xs text-foreground-muted">{item.period}</span>
              </div>
              <h3 className="mb-4 text-lg font-bold leading-snug tracking-tight sm:text-xl">
                {item.title}
              </h3>
              <p className="mb-5 text-sm text-foreground-muted sm:text-base">
                {item.description}
              </p>

              {item.keywords && (
                <ul className="mb-6 flex flex-wrap gap-2">
                  {item.keywords.map((keyword) => (
                    <li
                      key={keyword}
                      className="rounded-full border border-border px-2.5 py-1 text-xs"
                    >
                      {keyword}
                    </li>
                  ))}
                </ul>
              )}

              {item.achievements && (
                <div className="mb-6 flex flex-col gap-3">
                  {item.achievements.map((achievement) => (
                    <div
                      key={achievement.label}
                      className="rounded-lg bg-background-alt p-4"
                    >
                      <p className="mb-1.5 text-xs font-semibold uppercase tracking-wide text-accent">
                        {achievement.label}
                      </p>
                      <p className="mb-1 text-sm font-medium leading-snug">
                        {achievement.title}
                      </p>
                      <p className="text-xs text-foreground-muted">{achievement.meta}</p>
                    </div>
                  ))}
                </div>
              )}

              <div className="border-t border-border pt-5">
                <h4 className="mb-3 text-xs font-semibold uppercase tracking-wide text-foreground-muted">
                  연구 내용
                </h4>
                <ul className="grid gap-x-6 gap-y-2 sm:grid-cols-2">
                  {item.details.map((detail) => (
                    <li
                      key={detail}
                      className="flex gap-2 text-sm text-foreground-muted"
                    >
                      <span className="text-accent">›</span>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

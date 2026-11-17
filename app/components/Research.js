import Image from "next/image";
import SectionTitle from "./SectionTitle";

const RESEARCH = [
  {
    id: "02",
    org: "KIST 양자기술연구단 · 양자정보이론연구실 현장실습",
    period: "2025.12 - 2026.06 (약 6개월)",
    title: "광자 손실 환경에서의 다중 모드 양자 위상 추정 최적화",
    description:
      "숭실대학교 현장실습학기제로 한국과학기술연구원(KIST) 양자정보이론연구실에서 약 6개월간 연구 인턴으로 근무했습니다. 다중 모드 양자 상태를 이용한 양자 위상 추정의 정밀도(Quantum Fisher Information, QFI)를 이론적으로 유도하고 QuTiP·Jupyter 시뮬레이션으로 검증하여, 광자 손실이 있는 현실적인 조건에서도 고전적 한계(shot-noise limit)를 넘는 양자적 이점의 조건을 도출했습니다.",
    keywords: [
      "Quantum Fisher Information(QFI)",
      "양자 계측",
      "다중 모드 위상 추정",
      "광자 손실",
      "Lindblad master equation",
      "QuTiP",
      "Python · Jupyter",
    ],
    meta: [
      { label: "역할", value: "연구 인턴 (논문 스터디, 이론 계산, 시뮬레이션 코드 개발, 연구 발표)" },
      { label: "기간", value: "2025.12 – 2026.06 (약 6개월)" },
    ],
    phases: [
      {
        label: "1기 · 2025.12 – 2026.02",
        title: "양자정보 기초 → 시뮬레이션 역량 구축",
        items: [
          "큐비트·양자 게이트·양자 회로, 압축 상태 등 양자정보 기초 이론 학습 및 주간 발표",
          "QuTiP로 양자 텔레포테이션 회로, 광자 상태(Fock / coherent / cat / squeezed vacuum)의 평균 광자수와 Wigner 함수 구현",
          "Lindblad master equation 학습 및 감쇠 효과를 고려한 vacuum Rabi oscillation 시뮬레이션",
          "Squeezed vacuum 상태 분석 논문 스터디 — QFI를 직접 계산해 논문 값과 일치 확인",
          "Hong-Ou-Mandel 간섭계 민감도 분석, 양자 에러 정정 학습 및 발표",
        ],
      },
      {
        label: "2기 · 2026.03 – 2026.06",
        title: "연구 프로젝트 — 다중 모드 양자 상태의 위상 추정 정밀도 분석",
        items: [
          "NOON, coherent squeezed vacuum 등 단일·소수 모드 상태의 QFI를 손실 유무에 따라 계산",
          "다중 모드(m-mode)로 확장 — 수치 계산 한계를 해석적 접근으로 전환해 QFI 일반식 유도",
          "k개의 number operator로 구성된 generator로 일반화하여 최적 조건 탐색 및 코드로 검증",
          "검증 과정에서 기존 QFI 식의 오류를 직접 발견해 재유도·재계산",
          "조건부 광자 검출 기반 상태 생성 논문 스터디, 연구 중간·최종 결과 발표",
        ],
      },
    ],
    results: [
      "다중 모드 상태에서 generator 구성(k)에 따른 QFI 최적 조건을 해석적으로 유도하고 수치 시뮬레이션으로 검증",
      "광자 손실 조건에서 shot-noise limit을 넘는 파라미터 영역과 양자적 이점이 최대인 조합 도출",
      "지도 연구원 평가: 피드백을 적극적으로 반영하며 주어진 과제를 성공적으로 수행",
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
    id: "01",
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
        authors: "J.Y. Oh (제1저자), S.W. Wi, J.H. Han, Y.S. Lee*",
        meta: "Journal of Alloys and Compounds 1061 (2026) 187483 · Elsevier",
        link: "https://doi.org/10.1016/j.jallcom.2026.187483",
        linkLabel: "DOI: 10.1016/j.jallcom.2026.187483",
        highlights: [
          "고상반응법으로 Er³⁺/Yb³⁺ 공도핑 CAG 형광체 합성, 순수 가넷 상 확인",
          "UV(381 nm) / NIR(980 nm) 이중 여기에 따른 발광 색 조절 (G/R 비 11–14 vs 0.88–1.75)",
          "FIR 기반 광학 온도 센서, 상온(293 K)에서 최대 상대 감도 1.70% K⁻¹, 673 K까지 동작",
          "잠재 지문 검출 및 980 nm 하에서만 보이는 위조 방지 잉크 시연",
        ],
      },
      {
        label: "국제학회 포스터 발표",
        title:
          "Excitation-dependent Optical Thermometric Properties of Er³⁺/Yb³⁺ Codoped Ca₃Al₂Ge₃O₁₂ Ceramics",
        authors: "Jaeyeop Oh (발표자), Sang Won Wi, Jaeho Han, Yunsang Lee*",
        meta: "10th Asian Applied Physics Conference · 2025, 일본 미야자키",
        link: "/aapc2025-poster.pdf",
        linkText: "포스터 보기",
        linkLabel: "PDF",
        highlights: [
          "XRD·Rietveld refinement·XPS로 불순물 없는 순수 CAG 가넷 상과 Er³⁺/Yb³⁺ 3가 상태 확인",
          "381 nm / 980 nm 여기에 따른 발광 색 변화를 PL·UCL 및 CIE 색좌표로 확인",
          "Judd-Ofelt 분석 — Er 농도 증가에 따른 Ω₂ 감소, Ω₄·Ω₆ 증가로 국소 대칭성 변화 해석",
          "FIR(²H₁₁/₂/⁴S₃/₂) 기반 광학 온도 센서, 최대 상대 감도 0.94% K⁻¹(381 nm) · 1.70% K⁻¹(980 nm)",
          "이중 여기 R/G 대비와 1540 nm NIR 발광을 이용한 다채널 위조 방지·암호화 응용 제안",
        ],
      },
    ],
    figures: [
      {
        src: "/research/thermometry.png",
        width: 881,
        height: 629,
        wide: true,
        alt: "381 nm와 980 nm 여기에서 온도에 따른 FIR 선형 피팅과 절대·상대 감도 곡선",
        title: "FIR 기반 광학 온도 센서 성능",
        caption:
          "(e, f) 293–673 K에서 녹색 발광 FIR이 온도에 따라 선형 증가 (R² = 0.9995 / 0.9863) · (g, h) 절대 감도 Sa와 상대 감도 Sr — 980 nm 여기(x = 0.005)에서 293 K 최대 Sr 1.70% K⁻¹",
        source: "논문 Fig. 7(e–h)",
      },
      {
        src: "/research/samples.png",
        width: 738,
        height: 454,
        alt: "Er 농도별 CAG:Er/Yb 세라믹 시료를 자연광, 365 nm UV, 980 nm 레이저 아래에서 촬영한 사진 15장",
        title: "여기 조건에 따라 달라지는 발광",
        caption:
          "Er³⁺ 농도 x = 0.005–0.04 시료를 (d–h) 자연광, (i–m) 365 nm UV 램프, (n–r) 980 nm 레이저 아래에서 촬영",
        source: "논문 Fig. 5(d–r)",
      },
      {
        src: "/research/fingerprint.png",
        width: 1102,
        height: 638,
        alt: "CAG:Er/Yb 형광체 분말로 현출한 잠재 지문 발광 사진과 융선을 따라 측정한 세기 그래프",
        title: "잠재 지문 검출",
        caption:
          "x = 0.02 형광체 분말로 유리 기판 위 지문을 현출하고 365 nm UV 아래에서 촬영 · 빨간 선을 따라 측정한 세기 프로파일로 융선 대비를 정량 확인",
        source: "논문 Fig. 6(a)",
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
          {[...RESEARCH].sort((a, b) => a.id.localeCompare(b.id)).map((item) => (
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

              {item.meta && (
                <dl className="mb-6 grid gap-x-4 gap-y-2 text-sm sm:grid-cols-[auto_1fr]">
                  {item.meta.map((row) => (
                    <div key={row.label} className="contents">
                      <dt className="text-xs font-semibold uppercase tracking-wide text-foreground-muted sm:pt-0.5">
                        {row.label}
                      </dt>
                      <dd className="mb-2 text-foreground-muted sm:mb-0">{row.value}</dd>
                    </div>
                  ))}
                </dl>
              )}

              {item.phases && (
                <div className="mb-6 grid gap-3 sm:grid-cols-2">
                  {item.phases.map((phase) => (
                    <div key={phase.label} className="rounded-lg bg-background-alt p-4">
                      <p className="mb-1.5 text-xs font-semibold uppercase tracking-wide text-accent">
                        {phase.label}
                      </p>
                      <p className="mb-3 text-sm font-medium leading-snug">{phase.title}</p>
                      <ul className="flex flex-col gap-1.5">
                        {phase.items.map((point) => (
                          <li
                            key={point}
                            className="flex gap-2 text-xs text-foreground-muted sm:text-sm"
                          >
                            <span className="text-accent">·</span>
                            {point}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}

              {item.results && (
                <div className="mb-6 rounded-lg bg-background-alt p-4">
                  <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-accent">
                    주요 성과
                  </p>
                  <ul className="flex flex-col gap-1.5">
                    {item.results.map((result) => (
                      <li key={result} className="flex gap-2 text-sm text-foreground-muted">
                        <span className="text-accent">✓</span>
                        {result}
                      </li>
                    ))}
                  </ul>
                </div>
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
                      {achievement.authors && (
                        <p className="mb-1 text-xs text-foreground-muted">
                          {achievement.authors}
                        </p>
                      )}
                      <p className="text-xs text-foreground-muted">{achievement.meta}</p>
                      {achievement.highlights && (
                        <ul className="mt-3 flex flex-col gap-1.5">
                          {achievement.highlights.map((highlight) => (
                            <li
                              key={highlight}
                              className="flex gap-2 text-xs text-foreground-muted sm:text-sm"
                            >
                              <span className="text-accent">·</span>
                              {highlight}
                            </li>
                          ))}
                        </ul>
                      )}
                      {achievement.link && (
                        <a
                          href={achievement.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-3 inline-block rounded-full border border-border px-3 py-1.5 text-xs font-medium text-accent hover:bg-background"
                        >
                          {achievement.linkText ?? "논문 보기"} ↗ <span className="text-foreground-muted">{achievement.linkLabel}</span>
                        </a>
                      )}
                    </div>
                  ))}
                </div>
              )}

              {item.figures && (
                <div className="mb-6 grid gap-4 sm:grid-cols-2">
                  {item.figures.map((figure) => (
                    <figure
                      key={figure.src}
                      className={`overflow-hidden rounded-lg border border-border bg-background-alt ${
                        figure.wide ? "sm:col-span-2" : ""
                      }`}
                    >
                      <a
                        href={figure.src}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`block ${figure.wide ? "bg-white" : ""}`}
                      >
                        <Image
                          src={figure.src}
                          width={figure.width}
                          height={figure.height}
                          alt={figure.alt}
                          sizes={figure.wide ? "(min-width: 640px) 820px, 100vw" : "(min-width: 640px) 400px, 100vw"}
                          className={`h-auto w-full transition-opacity hover:opacity-90 ${
                            figure.wide ? "mx-auto max-w-2xl bg-white" : "bg-black"
                          }`}
                        />
                      </a>
                      <figcaption className="p-4">
                        <p className="mb-1 text-sm font-semibold tracking-tight">{figure.title}</p>
                        <p className="mb-1.5 text-xs leading-relaxed text-foreground-muted">
                          {figure.caption}
                        </p>
                        <p className="text-[11px] text-foreground-muted/80">출처: {figure.source}</p>
                      </figcaption>
                    </figure>
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

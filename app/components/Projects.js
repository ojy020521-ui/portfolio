import Image from "next/image";
import SectionTitle from "./SectionTitle";

// image: { src, width, height, alt } / links: [{ label, href }] — 비워 두면 표시되지 않습니다.
const PROJECTS = [
  {
    id: "01",
    category: "컴퓨터 프로그래밍 · 개인 과제",
    period: "2025.11 - 2025.12",
    title: "이중우물 비선형 오실레이터의 카오스 전이 시뮬레이션",
    description:
      "구동력과 감쇠가 있는 이중우물 비선형 오실레이터(Duffing oscillator)를 Python으로 수치 해석했습니다. 구동 진폭을 바꿔가며 주기 운동이 카오스로 전이하는 과정을 위상공간, 포인카레 단면, FFT 스펙트럼으로 분석했습니다.",
    role: "모델링, 시뮬레이션, 분석 단독 수행",
    image: {
      src: "/projects/duffing-chaos.png",
      width: 1088,
      height: 376,
      alt: "구동 진폭 f = 0.5에서 변위, 속도 시계열과 위상공간 궤적·포인카레 단면 그래프",
      caption:
        "구동 진폭 f = 0.5에서의 카오스 운동: 변위 z(τ), 속도 ż(τ), 위상공간 궤적과 포인카레 단면 (20T–30T 구간)",
    },
    highlights: [
      "무차원 스케일 변환으로 파라미터를 5개(a, b, c, F, Ω)에서 3개(γ, f, ω)로 축약",
      "평형점 근처 조화진동 근사의 이론 주기(T₀ ≈ 4.44)와 수치 결과 일치 확인",
      "구동 진폭 증가에 따른 주기 → 2주기 → 준주기 → 카오스 전이 관찰 (f = 0.20 ~ 0.65)",
      "FFT 스펙트럼으로 동역학 상태를 정량 구분 (선 스펙트럼 → 다중 피크 → broadband)",
    ],
    tags: ["Python", "SciPy odeint", "Nonlinear Dynamics", "Poincaré Section", "FFT"],
    links: [],
  },
  {
    id: "02",
    category: "캡스톤 디자인 · 3인 팀",
    period: "2024.11 - 2024.12",
    title: "광센서 기반 자동 밝기 제어 시스템",
    description:
      "CdS 광전도 센서로 실내외 조도를 측정해 실내 밝기를 일정하게 유지하는 시스템을 설계하고 제작했습니다. 외부가 어두우면 서보모터로 가림막을 닫아 빛 손실을 줄이고, 외부 빛이 들어올 때는 LED 점등 개수를 조절해 실내 밝기를 보정합니다.",
    role: "센서 신호 처리 및 제어 코드 작성",
    image: null,
    highlights: [
      "실내외 조도센서 2채널로 가림막 개폐와 조명 단계 제어",
      "기준값 근처에서 생기는 LED 깜빡임과 가림막 반복 개폐 문제 해결",
      "지수이동평균 저역통과 필터(α = 0.1)로 반응 속도와 안정성의 균형 조정",
      "활용 방안으로 돔구장과 식물원 같은 대형 채광 공간 제시",
    ],
    tags: ["Arduino", "CdS Photoresistor", "Low-Pass Filter", "Servo Control", "Embedded C"],
    links: [],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <SectionTitle index="03">프로젝트</SectionTitle>
        <div className="grid gap-6 sm:grid-cols-2">
          {PROJECTS.map((project) => (
            <article
              key={project.id}
              className="flex flex-col overflow-hidden rounded-[10px] border border-border bg-background"
            >
              {project.image && (
                <figure className="border-b border-border">
                  <a
                    href={project.image.src}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block bg-white"
                  >
                    <Image
                      src={project.image.src}
                      width={project.image.width}
                      height={project.image.height}
                      alt={project.image.alt}
                      sizes="(min-width: 640px) 420px, 100vw"
                      className="h-auto w-full transition-opacity hover:opacity-90"
                    />
                  </a>
                  {project.image.caption && (
                    <figcaption className="bg-background-alt px-7 py-3 text-xs leading-relaxed text-foreground-muted">
                      {project.image.caption}
                    </figcaption>
                  )}
                </figure>
              )}
              <div className="flex flex-1 flex-col p-7">
                <div className="mb-3 flex flex-wrap items-center gap-3">
                  <span className="text-xs font-semibold uppercase tracking-wide text-accent">
                    {project.category}
                  </span>
                  <span className="text-xs text-foreground-muted">{project.period}</span>
                </div>
                <h3 className="mb-3 text-lg font-bold leading-snug tracking-tight">
                  {project.title}
                </h3>
                <p className="mb-4 text-sm text-foreground-muted">{project.description}</p>
                {project.role && (
                  <p className="mb-4 text-xs text-foreground-muted">
                    <span className="font-semibold text-foreground">역할 </span>
                    {project.role}
                  </p>
                )}
                {project.highlights.length > 0 && (
                  <ul className="mb-5 flex flex-col gap-1.5">
                    {project.highlights.map((point) => (
                      <li key={point} className="flex gap-2 text-sm text-foreground-muted">
                        <span className="text-accent">›</span>
                        {point}
                      </li>
                    ))}
                  </ul>
                )}
                <div className="mt-auto">
                  {project.tags.length > 0 && (
                    <ul className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <li
                          key={tag}
                          className="rounded-full border border-border px-2.5 py-1 text-xs"
                        >
                          {tag}
                        </li>
                      ))}
                    </ul>
                  )}
                  {project.links.length > 0 && (
                    <div className="mt-4 flex flex-wrap gap-2">
                      {project.links.map((link) => (
                        <a
                          key={link.href}
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="rounded-full border border-border px-3 py-1.5 text-xs font-medium text-accent hover:bg-background-alt"
                        >
                          {link.label} ↗
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

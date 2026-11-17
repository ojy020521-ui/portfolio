import SectionTitle from "./SectionTitle";

const TECHNIQUES = [
  {
    category: "시료 합성",
    items: ["고상반응법 (Solid-state reaction)", "희토류 도핑 농도 조절"],
  },
  {
    category: "구조 · 표면 분석",
    items: ["XRD", "Rietveld refinement", "SEM", "XPS"],
  },
  {
    category: "광학 측정 · 분석",
    items: [
      "PL · PLE",
      "Upconversion (UCL)",
      "온도 의존 PL (293–673 K)",
      "FIR 광학 온도 센싱",
      "Judd-Ofelt 분석",
      "CIE 색좌표",
    ],
  },
];

const SKILLS = [
  {
    name: "Origin",
    description: "PL/UCL 스펙트럼 분석, CIE 좌표 계산, 그래프 시각화",
  },
  {
    name: "Python",
    description: "QuTiP·Jupyter 기반 양자 시뮬레이션, 수치 계산, 데이터 시각화",
  },
  {
    name: "Excel",
    description: "실험 데이터 정리, 광학 온도 센서 계산, 그래프 작성",
  },
];

export default function Skills() {
  return (
    <section id="skills" className="bg-background-alt px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <SectionTitle index="06">Skills & Tools</SectionTitle>

        <p className="-mt-6 mb-6 text-sm font-semibold uppercase tracking-wide text-foreground-muted">
          Experimental Techniques
        </p>
        <div className="mb-14 grid gap-5 sm:grid-cols-3">
          {TECHNIQUES.map((group) => (
            <div
              key={group.category}
              className="rounded-[10px] border border-border bg-background p-6"
            >
              <h3 className="mb-3 text-xs font-semibold uppercase tracking-wide text-accent">
                {group.category}
              </h3>
              <ul className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-full border border-border px-2.5 py-1 text-xs"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="mb-6 text-sm font-semibold uppercase tracking-wide text-foreground-muted">
          Data Analysis & Simulation
        </p>
        <div className="grid gap-5 sm:grid-cols-3">
          {SKILLS.map((skill) => (
            <div
              key={skill.name}
              className="rounded-[10px] border border-border bg-background p-6"
            >
              <h3 className="mb-2 text-base font-bold tracking-tight">{skill.name}</h3>
              <p className="text-sm text-foreground-muted">{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

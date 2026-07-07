import SectionTitle from "./SectionTitle";

const SKILLS = [
  {
    name: "Excel",
    description: "실험 데이터 정리, 광학 온도 센서 계산, 그래프 작성",
  },
  {
    name: "Origin",
    description: "PL/UCL 스펙트럼 분석, CIE 좌표 계산, 그래프 시각화",
  },
  {
    name: "Python",
    description: "수치 계산, 시뮬레이션, 데이터 시각화",
  },
];

export default function Skills() {
  return (
    <section id="skills" className="px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <SectionTitle index="05">Skills & Tools</SectionTitle>
        <p className="-mt-6 mb-9 text-sm font-semibold uppercase tracking-wide text-foreground-muted">
          Data Analysis & Visualization
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

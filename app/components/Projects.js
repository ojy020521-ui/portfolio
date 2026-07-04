import SectionTitle from "./SectionTitle";

const PROJECTS = [
  {
    id: "01",
    title: "학부연구생",
    period: "2024.09 - 2025.12",
    tags: ["전자 소재 분광학", "물리학"],
    description: "전자 소재 분광학 연구실에서 학부연구생으로 참여하며 실험 설계와 데이터 분석 경험을 쌓았습니다.",
  },
  {
    id: "02",
    title: "KIST 인턴",
    period: "2026.01 - 2026.06",
    tags: ["양자 정보 이론", "인턴십"],
    description: "한국과학기술연구원(KIST)에서 양자 정보 이론 인턴으로 근무했습니다.",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="bg-background-alt px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <SectionTitle index="02">프로젝트</SectionTitle>
        <div className="grid gap-7 sm:grid-cols-2">
          {PROJECTS.map((project) => (
            <article
              key={project.id}
              className="flex flex-col rounded-[10px] border border-border bg-background p-7 transition-transform hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="mb-4.5 flex h-11 w-11 items-center justify-center rounded-lg bg-background-alt text-sm font-bold text-foreground-muted">
                {project.id}
              </div>
              <h3 className="mb-0.5 text-lg font-semibold">{project.title}</h3>
              <p className="mb-2.5 text-xs text-foreground-muted">{project.period}</p>
              <p className="mb-4 grow text-sm text-foreground-muted">
                {project.description}
              </p>
              <ul className="flex flex-wrap gap-2">
                {project.tags.map((tag, i) => (
                  <li
                    key={i}
                    className="rounded-full border border-border px-2.5 py-1 text-xs"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

import SectionTitle from "./SectionTitle";

const PROJECTS = [
  { id: "01", title: "프로젝트 이름", tags: ["Tag", "Tag"] },
  { id: "02", title: "프로젝트 이름", tags: ["Tag", "Tag"] },
  { id: "03", title: "프로젝트 이름", tags: ["Tag", "Tag"] },
];

export default function Projects() {
  return (
    <section id="projects" className="bg-background-alt px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <SectionTitle index="02">프로젝트</SectionTitle>
        <div className="grid gap-7 sm:grid-cols-3">
          {PROJECTS.map((project) => (
            <article
              key={project.id}
              className="flex flex-col rounded-[10px] border border-border bg-background p-7 transition-transform hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="mb-4.5 flex h-11 w-11 items-center justify-center rounded-lg bg-background-alt text-sm font-bold text-foreground-muted">
                {project.id}
              </div>
              <h3 className="mb-2.5 text-lg font-semibold">{project.title}</h3>
              <p className="mb-4 grow text-sm text-foreground-muted">
                프로젝트에 대한 간단한 설명을 여기에 작성하세요.
              </p>
              <ul className="mb-4.5 flex flex-wrap gap-2">
                {project.tags.map((tag, i) => (
                  <li
                    key={i}
                    className="rounded-full border border-border px-2.5 py-1 text-xs"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
              <a
                href="#"
                className="text-sm font-semibold text-accent"
              >
                자세히 보기 →
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

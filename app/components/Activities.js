import SectionTitle from "./SectionTitle";

const ACTIVITIES = [
  {
    org: "연합봉사동아리 Valuntas",
    role: "2024년 부회장 · 2025년 회장",
    description:
      "연합봉사동아리 Valuntas에서 2024년 부회장, 2025년 회장으로 활동하며 다양한 봉사활동을 기획하고 운영했습니다. 동아리원들과 함께 봉사활동을 준비하고 진행하면서 구성원 간의 소통, 일정 관리, 역할 분담, 활동 운영 경험을 쌓을 수 있었습니다. 이 경험을 통해 리더십과 책임감뿐만 아니라, 사람들과 협력하며 하나의 활동을 완성해 나가는 과정의 중요성을 배웠습니다.",
    details: [
      "연합봉사동아리 부회장 및 회장 활동",
      "봉사활동 기획 및 운영",
      "동아리원 모집 및 소통",
      "활동 일정 관리",
      "팀원 역할 분담 및 협업",
      "사회공헌 활동 참여",
    ],
  },
  {
    org: "굿네이버스 서울남부사업본부",
    role: "2025.03.01 - 2025.06.30",
    description:
      "대학생 자원봉사단으로 참여하여 희망편지쓰기, 생명존중, 가족그림편지쓰기 등 교육 캠페인 및 행사 운영을 지원했습니다. 초등학생을 대상으로 한 정서교육과 사회참여 프로그램을 보조하며, 아동·청소년의 생명존중 가치 확산과 긍정적 인식 형성에 기여했습니다.",
    details: [
      "희망편지쓰기 캠페인 운영 지원",
      "생명존중 교육 프로그램 보조",
      "가족그림편지쓰기 활동 지원",
      "초등학생 대상 정서교육 보조",
      "아동·청소년 대상 사회참여 프로그램 지원",
    ],
  },
];

export default function Activities() {
  return (
    <section id="activities" className="bg-background-alt px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <SectionTitle index="04">리더십 및 봉사활동</SectionTitle>
        <div className="flex flex-col gap-7">
          {ACTIVITIES.map((activity) => (
            <article
              key={activity.org}
              className="rounded-[10px] border border-border bg-background p-7 sm:p-8"
            >
              <div className="mb-3 flex flex-wrap items-center gap-3">
                <h3 className="text-lg font-bold tracking-tight">{activity.org}</h3>
                <span className="text-xs text-foreground-muted">{activity.role}</span>
              </div>
              <p className="mb-5 text-sm text-foreground-muted sm:text-base">
                {activity.description}
              </p>
              <div className="border-t border-border pt-5">
                <h4 className="mb-3 text-xs font-semibold uppercase tracking-wide text-foreground-muted">
                  주요 활동
                </h4>
                <ul className="grid gap-x-6 gap-y-2 sm:grid-cols-2">
                  {activity.details.map((detail) => (
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

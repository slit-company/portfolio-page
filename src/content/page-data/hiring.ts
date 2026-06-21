import { routePaths } from "@/content/routes";
import type { PageContent } from "@/content/types";

export const journeyPage = {
  key: "journey",
  path: routePaths.journey,
  title: "합류여정",
  breadcrumb: "SLIT Portfolio / 합류여정",
  intro: [
    "지원하시기 전에",
    "이번 과정에서는 SLIT이 가진 성과와 프로젝트를 브랜드, 웹, 자료, 콘텐츠로 함께 정리할 사람을 찾습니다.",
  ],
  sections: [
    {
      title: "채용 프로세스",
      columns: [
        {
          title: "Step1. 포트폴리오 공유",
          body: "완성된 결과물과 과정이 함께 보이는 포트폴리오를 먼저 확인합니다.",
        },
        {
          title: "Step2. 커피챗",
          body: "SLIT의 프로젝트와 지원자의 관심사가 맞는지 편하게 이야기합니다.",
        },
        {
          title: "Step3. 작업 방식 인터뷰",
          body: "브랜드, 웹, 자료, 콘텐츠를 어떻게 문제에 맞춰 풀어왔는지 확인합니다.",
        },
        {
          title: "Step4. 협업 범위 정리",
          body: "프로젝트, 파트타임, 계약 등 현실적인 투입 방식과 기대 산출물을 맞춥니다.",
        },
        {
          title: "Step5. 시작",
          body: "작은 산출물부터 함께 만들며 역할과 협업 리듬을 조정합니다.",
        },
      ],
    },
    {
      title: "우리가 궁금한 것",
      items: [
        "복잡한 프로젝트를 이해 가능한 자료나 웹 페이지로 바꿔본 경험이 있나요?",
        "완성 결과와 과정, 판단 근거를 어떻게 포트폴리오에 남기나요?",
        "초기팀에서 넓은 범위를 맡을 때 어떤 방식으로 우선순위를 정하나요?",
        "브랜드, 웹, 자료, 콘텐츠 중 지금 가장 강한 영역과 키우고 싶은 영역은 무엇인가요?",
      ],
    },
    {
      title: "안내사항",
      body: [
        "지원/문의는 전달받은 연락처나 프로젝트 미팅에서 이어서 확인합니다.",
        "프로젝트 또는 파트타임 형태도 열어두고, 투입 시간과 산출물을 먼저 맞춥니다.",
      ],
    },
  ],
} satisfies PageContent;

export const careersPage = {
  key: "careers",
  path: routePaths.careers,
  title: "채용 중인 포지션",
  breadcrumb: "SLIT Portfolio / 채용 중인 포지션",
  sections: [
    { title: "채용 중인 포지션" },
    {
      title: "채용절차",
      items: [
        "포트폴리오 공유",
        "커피챗",
        "작업 방식 인터뷰",
        "협업 범위 정리",
        "프로젝트 시작",
      ],
    },
    {
      title: "안내사항",
      body: [
        "지원/문의는 전달받은 연락처로 확인합니다.",
        "Recova와 프로젝트 사례를 함께 보고, 본인이 어떤 결과물을 만들 수 있을지 중심으로 이야기합니다.",
        "계약 형태와 투입 시간은 협업 범위에 맞춰 조정합니다.",
        "고객사명과 미공개 범위는 실제 공개 가능 여부를 확인한 뒤 자료에 반영합니다.",
      ],
    },
  ],
  jobs: [
    {
      office: "온라인 / 내방역",
      role: "Design / Brand / Product Story",
      jobs: [
        {
          title: "초기팀 디자이너",
          href: "#application",
          employment: "프로젝트",
          experience: "포트폴리오 중심",
          status: "Open",
          location: "온/오프라인",
        },
        {
          title: "브랜드·웹·콘텐츠 디자이너",
          href: "#application",
          employment: "파트타임",
          experience: "경력무관",
          status: "Open",
          location: "온라인",
        },
      ],
    },
  ],
} satisfies PageContent;

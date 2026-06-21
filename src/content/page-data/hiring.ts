import { callChatUrl, routePaths } from "@/content/routes";
import type { PageContent } from "@/content/types";

export const careersPage = {
  key: "careers",
  path: routePaths.careers,
  title: "채용",
  breadcrumb: "SLIT / 채용",
  intro: [
    "함께 만들 사람을 찾습니다.",
    "어려운 일을 고객과 투자자가 한눈에 이해하도록 만드는 자료가 우리에겐 중요합니다. 영업자료, IR 덱, 제안서, 제품 소개 페이지를 같이 만들 사람을 찾습니다.",
  ],
  sections: [
    {
      title: "무슨 일을 하게 되나요?",
      body: [
        "지금은 Recova라는 B2B AI Agent를 만들고 있습니다. 무담보 매입채권추심이라는 좁고 어려운 도메인이라, 우리가 하는 일을 한눈에 보이게 정리하는 일이 그만큼 중요합니다.",
        "Recova만 하는 것도 아닙니다. 새 아이디어가 나오면 랜딩페이지로 만들고, 고객 미팅 자료로 정리하고, 콘텐츠와 브랜드로 보여 주는 일을 함께하게 됩니다.",
        "대단한 경력만 찾지는 않습니다. 포트폴리오를 쌓고 싶은 분, 초기 스타트업에서 실제로 쓰이는 자료를 만들어 보고 싶은 분도 좋습니다. 같이 이야기하면서 만들고 고쳐 가면 됩니다.",
      ],
    },
    {
      title: "채용 절차",
      items: [
        "포트폴리오 공유",
        "커피챗",
        "작업 방식 인터뷰",
        "협업 범위 정리",
        "시작",
      ],
    },
    {
      title: "안내",
      body: [
        "풀 온라인으로도 가능합니다. 사무실은 내방역에서 도보 3분입니다.",
        "먼저 커피챗처럼 가볍게 이야기부터 합니다.",
      ],
    },
  ],
  jobs: [
    {
      office: "온라인 / 내방역",
      role: "Design / Brand / Product Story",
      jobs: [
        {
          title: "브랜딩·웹·콘텐츠 디자이너",
          href: callChatUrl,
          employment: "파트타임",
          experience: "경력무관",
          status: "Open",
          location: "온라인",
        },
      ],
    },
  ],
} satisfies PageContent;

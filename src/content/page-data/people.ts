import { projectCases } from "@/content/project-cases";
import { routePaths } from "@/content/routes";
import type { PageContent } from "@/content/types";

export const interviewsPage = {
  key: "interviews",
  path: routePaths.interviews,
  title: "프로젝트 사례",
  breadcrumb: "SLIT / 프로젝트 사례",
  intro: [
    "SLIT이 조직 안의 가짜 노동을 줄여온 프로젝트 기록입니다.",
    "각 사례는 결과물보다 과정을 먼저 봅니다. 어디서 반복 확인이 생겼고, 어떤 판단을 사람이 남겼고, SLIT이 어떤 화면과 문장으로 그 흐름을 바꿨는지 읽을 수 있게 정리했습니다.",
  ],
  projectCases,
  sections: [
    {
      title: "사례를 읽는 구조",
      body: [
        "프로젝트 카드를 클릭하면 법률, 금융, 운영, 전시, 콘텐츠 마케팅 영역에서 어떤 반복을 줄였고 어떤 판단을 시스템에 남겼는지 확인할 수 있습니다.",
      ],
    },
  ],
} satisfies PageContent;

export const lifePage = {
  key: "life",
  path: routePaths.life,
  title: "일하는 방식",
  breadcrumb: "SLIT / 일하는 방식",
  intro: [
    "업무흐름을 읽고, 운영 시스템으로 고치는 리듬",
    "SLIT의 작업 방식은 도메인 리서치, 업무흐름 모델링, 반복을 줄일 지점 정의, 빠른 운영 시스템 구현, 사람 검토 기반 개선으로 이어집니다.\n\n온라인 협업을 기본으로 두고, 필요할 때 화면과 자료를 함께 보며 문제를 정리합니다. AI Agent, 웹, 문서, 콘텐츠가 따로 움직이지 않도록 같은 프로젝트 내러티브로 맞춥니다.",
  ],
  sections: [
    {
      title: "프로젝트 운영",
      body: [
        "AX 프로젝트는 고객의 업무를 빠르게 이해하고 작동하는 산출물로 확인하는 방식으로 운영합니다. 작은 PoC라도 담당자 판단과 사람 검토가 남아야 운영 시스템으로 이어질 수 있습니다.",
      ],
      columns: [
        {
          title: "업무흐름 맵",
          body: "입력, 판단, 반복 처리, 예외, 결과 기록을 한 장의 흐름으로 정리해 프로젝트의 기준점으로 둡니다.",
        },
        {
          title: "검토 가능한 자동화",
          body: "Agent가 만든 초안과 추천은 사람이 검토할 수 있는 근거, 상태, 다음 액션과 함께 보여줍니다.",
        },
        {
          title: "산출물 중심",
          body: "회의가 끝나면 문장, 화면, 덱, 업무흐름 리스트처럼 다음 행동이 가능한 형태로 남깁니다.",
        },
      ],
    },
    {
      title: "AX 산출물",
      body: [
        "프로젝트마다 시스템과 설명 자료가 함께 남아야 실제 업무 전환이 이어집니다.",
      ],
      columns: [
        {
          title: "AI Agent",
          body: "반복 분류, 초안 생성, 우선순위 제안, 점검 목록 작성처럼 사람의 판단을 돕는 Agent 흐름을 만듭니다.",
        },
        {
          title: "운영 화면",
          body: "관리자 화면, 고객용 페이지, 검토 화면, 운영 대시보드처럼 실제 사용자가 들어오는 화면을 만듭니다.",
        },
        {
          title: "케이스 내러티브",
          body: "문제 상황부터 현재 결과까지 같은 구조로 남겨 다음 PoC, 제안, 개선에 바로 연결합니다.",
        },
      ],
    },
    {
      title: "프로젝트 시작",
      body: [
        "초기 대화에서는 도구 목록보다 실제 업무흐름과 반복 판단을 먼저 확인합니다.",
      ],
      columns: [
        {
          title: "업무흐름 인터뷰",
          body: "현재 업무가 어떤 순서로 진행되는지, 담당자가 어디서 시간을 쓰는지, 어떤 예외가 자주 생기는지 확인합니다.",
        },
        {
          title: "PoC 범위 정의",
          body: "자동화할 일부 흐름을 먼저 정하고, 사람이 검토할 지점과 시스템이 처리할 지점을 함께 정합니다.",
        },
      ],
    },
  ],
} satisfies PageContent;

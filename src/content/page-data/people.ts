import { projectCases } from "@/content/project-cases";
import { routePaths } from "@/content/routes";
import type { PageContent } from "@/content/types";

export const interviewsPage = {
  key: "interviews",
  path: routePaths.interviews,
  title: "프로젝트 사례",
  breadcrumb: "SLIT / 프로젝트 사례",
  intro: [
    "우리가 조직 안의 가짜 노동을 줄여온 기록입니다.",
    "법률, 금융, 운영, 전시, 로컬 비즈니스, 콘텐츠까지. 도메인은 달라도 보는 방식은 같습니다. 어디서 반복이 새는지, 어떤 판단을 사람이 남겨야 하는지. 각 사례는 결과물보다 그 과정을 먼저 봅니다.",
  ],
  projectCases,
  sections: [],
} satisfies PageContent;

export const lifePage = {
  key: "life",
  path: routePaths.life,
  title: "일하는 방식",
  breadcrumb: "SLIT / 일하는 방식",
  intro: [
    "우리는 도구부터 고르지 않습니다. 업무가 실제로 어떻게 흘러가는지 먼저 봅니다.",
    "AX 프로젝트가 굴러가는 순서는 대개 이렇습니다.",
  ],
  sections: [
    {
      title: "1. 업무흐름을 먼저 듣습니다",
      body: [
        "담당자가 실제로 어떤 자료를 보고, 어떤 화면을 오가며, 무슨 기준으로 판단하는지 확인합니다. 이 단계에서는 솔루션을 제안하지 않습니다. 일이 흘러가는 순서부터 적습니다.",
      ],
    },
    {
      title: "2. 반복되는 판단을 분리합니다",
      body: [
        "매번 사람이 다시 확인하는 분류, 우선순위, 예외 처리를 찾습니다. AI가 맡을 수 있는 일과 사람이 책임지고 검토해야 하는 일을 나눕니다. 이 경계가 분명해야 자동화가 현장에서 살아남습니다.",
      ],
    },
    {
      title: "3. 검토 가능한 흐름으로 옮깁니다",
      body: [
        "AI Agent는 초안과 근거를 만들고, 담당자는 승인·수정·보류 사유를 남깁니다. 빠르게 출력하는 것보다, 사람이 근거를 보고 판단할 수 있는 구조가 더 오래갑니다.",
      ],
    },
    {
      title: "4. 작은 PoC로 확인하고 넓힙니다",
      body: [
        "처음부터 큰 시스템을 짓지 않습니다. 반복이 가장 많이 새는 구간을 먼저 잡고, 처리 시간·수정률·누락된 예외·보류 사유를 보며 다음 범위를 정합니다.",
      ],
    },
    {
      title: "함께 일하는 사람들",
      body: [
        "기업 AX는 보통 전략 문서에서 멈춥니다. 우리는 거기서 멈추지 않으려고, 기업 현장을 수십 번 굴려 본 사람들과 함께 움직입니다. LF AI 수석 출신이 세운 d8d도 그중 하나입니다. 함께 기업 AI 도입 PoC와 운영 도구를 만들고 있습니다.",
      ],
    },
  ],
} satisfies PageContent;

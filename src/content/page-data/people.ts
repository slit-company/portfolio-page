import { projectCases } from "@/content/project-cases";
import { routePaths } from "@/content/routes";
import type { PageContent } from "@/content/types";

export const interviewsPage = {
  key: "interviews",
  path: routePaths.interviews,
  title: "프로젝트 포트폴리오",
  breadcrumb: "SLIT Portfolio / 프로젝트 포트폴리오",
  intro: [
    "고객과 파트너에게 보여줄 수 있는 회사 포트폴리오입니다.",
    "각 프로젝트는 첫 화면에서는 짧게 읽히고, 카드를 클릭하면 블로그 글처럼 문제, 접근, 구축 과정, 시행착오, 결과와 증빙을 길게 확인할 수 있게 구성했습니다.",
  ],
  projectCases,
  sections: [
    {
      title: "프로젝트 기록",
      body: [
        "프로젝트 카드를 클릭하면 개별 케이스 페이지에서 문제, 접근, 구축 내용, 결과, 포트폴리오로서의 의미를 길게 확인할 수 있습니다.",
      ],
    },
  ],
} satisfies PageContent;

export const lifePage = {
  key: "life",
  path: routePaths.life,
  title: "일하는 환경",
  breadcrumb: "SLIT Portfolio / 일하는 환경",
  intro: [
    "작은 팀의 속도와\n산출물 중심의 협업",
    "SLIT의 작업 환경은 큰 조직식 프로세스보다 실제 프로젝트와 성과를 빠르게 정리하는 방식에 가깝습니다.\n\n온라인 협업을 기본으로 두고, 필요할 때 내방역 근처 오피스에서 만나 문제를 정리합니다. 자료, 웹, 브랜드, 콘텐츠가 따로 떨어져 있지 않기 때문에 한 흐름으로 보고 빠르게 고칠 수 있습니다.",
  ],
  sections: [
    {
      title: "협업 방식",
      body: [
        "작은 팀이기 때문에 긴 문서보다 빠른 공유와 산출물 중심의 협업을 선호합니다.",
      ],
      columns: [
        {
          title: "온라인 중심",
          body: "기본 협업은 온라인으로 가능하게 설계합니다. 필요한 회의와 리뷰만 선명하게 잡습니다.",
        },
        {
          title: "내방역 오피스",
          body: "대면 정리가 필요할 때는 내방역 근처에서 만나 자료와 화면을 같이 봅니다.",
        },
        {
          title: "산출물 중심",
          body: "회의가 끝나면 문장, 화면, 덱, 리스트처럼 다음 행동이 가능한 형태로 남깁니다.",
        },
      ],
    },
    {
      title: "포트폴리오 재료",
      body: [
        "이미 쌓인 프로젝트와 성과를 회사 포트폴리오로 정리할 재료가 많습니다.",
      ],
      columns: [
        {
          title: "공개 증빙",
          body: "수상, 프로그램 선정, 공개 앱, 외부 프로젝트처럼 직접 확인 가능한 증거를 자료에 녹입니다.",
        },
        {
          title: "실제 고객 문제",
          body: "가상의 과제가 아니라 고객과 현장에서 나온 문제를 웹과 자료로 설명합니다.",
        },
        {
          title: "넓은 산출물",
          body: "브랜드, 웹, 제안서, 제품 소개, 프로젝트 케이스 스터디를 상황에 맞게 넘나듭니다.",
        },
      ],
    },
    {
      title: "운영 방식",
      body: ["프로젝트별 범위와 투입 방식은 케이스에 맞춰 업데이트합니다."],
      columns: [
        {
          title: "협업 형태",
          body: "프로젝트, 파트타임, 계약 형태처럼 목적에 맞는 협업 방식을 열어둡니다.",
        },
        {
          title: "문의 경로",
          body: "문의 경로는 업데이트 예정입니다. v1에서는 이 문구를 placeholder로 둡니다.",
        },
      ],
    },
  ],
} satisfies PageContent;

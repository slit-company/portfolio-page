import { routePaths } from "@/content/routes";
import type { PageContent } from "@/content/types";

export const journeyPage = {
  key: "journey",
  path: routePaths.journey,
  title: "합류여정",
  breadcrumb: "팀민트 채용페이지 / 합류여정",
  intro: [
    "지원하시기 전에",
    "채용 과정은 서로를 더 잘 이해하기 위한 시간입니다. 팀민트와 함께 성장할 수 있는지, 나에게 맞는 환경인지 차분히 확인해 주세요.",
  ],
  sections: [
    {
      title: "채용 프로세스",
      columns: [
        {
          title: "Step1. 채용 공고 확인",
          body: "팀 소개, 업무 내용, 지원 자격, 우대 사항을 확인합니다.",
        },
        {
          title: "Step2. 지원 서류 작성",
          body: "경험과 강점이 잘 드러나도록 이력서와 포트폴리오를 준비합니다.",
        },
        {
          title: "Step3. 실무자 인터뷰",
          body: "지원자의 경험과 직무 역량, 일하는 방식을 함께 이야기합니다.",
        },
        {
          title: "Step4. 2차 컬처핏 인터뷰",
          body: "팀민트가 일하는 방식과 지원자의 가치관, 협업 스타일이 잘 맞는지 확인합니다.",
        },
        {
          title: "Step5. 대표 인터뷰",
          body: "팀민트의 방향과 지원자의 목표가 맞닿는 지점을 확인합니다.",
        },
        {
          title: "Step6. 최종 합격",
          body: "처우와 입사 일정을 조율한 뒤 온보딩을 준비합니다.",
        },
      ],
    },
    {
      title: "우리가 궁금한 것",
      items: [
        "어떤 환경에서 가장 몰입하고 성장했나요?",
        "문제를 끝까지 해결하기 위해 어떤 선택을 해왔나요?",
        "팀으로 일할 때 가장 중요하게 생각하는 기준은 무엇인가요?",
        "빠른 실행과 개선이 필요한 상황에서 어떻게 움직이나요?",
      ],
    },
    {
      title: "안내사항",
      body: [
        "전형별 결과는 지원 시 기재해주신 이메일 주소로 안내드리며, 보통 3~7일 내에 공유합니다.",
        "직무별 채용 절차는 상이할 수 있습니다. 자세한 내용은 각 공고를 확인해 주세요.",
      ],
    },
  ],
} satisfies PageContent;

export const careersPage = {
  key: "careers",
  path: routePaths.careers,
  title: "채용 중인 포지션",
  breadcrumb: "팀민트 채용페이지 / 채용 중인 포지션",
  sections: [
    { title: "채용 중인 포지션" },
    {
      title: "채용절차",
      items: [
        "📝 서류 지원",
        "🗣️ 1차 실무자 인터뷰",
        "👨‍💼 2차 대표 인터뷰",
        "🙌 최종 합격",
      ],
    },
    {
      title: "안내사항",
      body: [
        "포지션별 제출 서류 및 채용 절차는 각 공고의 링크에서 확인 가능합니다.",
        "전형별 결과는 지원 시 기재해주신 이메일 주소로 안내드립니다.",
        "직무별 채용 절차는 상이할 수 있는 점 참고 바랍니다.",
        "전형 관련 문의처: 팀민트 채용메일 (people@team-mint.io)",
        "그 외 자세한 내용은 합류여정 페이지를 참고하세요.",
      ],
    },
  ],
  jobs: [
    {
      office: "🇰🇷 서울 오피스",
      role: "Performance Architect",
      jobs: [
        {
          title: "퍼포먼스 마케터 (1~3년)",
          href: "https://careers.thesmc.co.kr/ko/o/116396",
          employment: "정규직",
          experience: "1년 이상",
          status: "Open",
          location: "서울",
        },
        {
          title: "퍼포먼스 마케터 (3-5년)",
          href: "https://careers.thesmc.co.kr/ko/o/134968",
          employment: "정규직",
          experience: "3년 이상",
          status: "Open",
          location: "서울",
        },
        {
          title: "K-뷰티 글로벌 캠페인 담당 퍼포먼스 마케터 (4~5년)",
          href: "https://careers.thesmc.co.kr/ko/o/210630",
          employment: "정규직",
          experience: "4년 이상",
          status: "Open",
          location: "서울",
        },
      ],
    },
    {
      office: "🇻🇳 호치민 오피스",
      role: "Performance Architect",
      jobs: [
        {
          title: "2026 2Q 퍼포먼스 마케터(신입)",
          href: "https://careers.thesmc.co.kr/ko/o/217179",
          employment: "정규직",
          experience: "신입",
          status: "Open",
          location: "호치민",
        },
        {
          title: "2026 2Q 퍼포먼스 마케팅 보조 (파트타임)",
          href: "https://careers.thesmc.co.kr/ko/o/217180",
          employment: "계약직",
          experience: "경력무관",
          status: "Open",
          location: "호치민",
        },
      ],
    },
  ],
} satisfies PageContent;

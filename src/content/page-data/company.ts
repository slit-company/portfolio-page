import { routePaths } from "@/content/routes";
import type { PageContent } from "@/content/types";

const portfolioImage = "https://picsum.photos/seed/slit-recova/1200/675";
const dividerImage = "https://picsum.photos/seed/slit-workflow/1200/675";

export const homePage = {
  key: "home",
  path: routePaths.home,
  title: "SLIT Portfolio",
  breadcrumb: "SLIT Portfolio",
  heroImage: portfolioImage,
  intro: [
    "수상과 프로젝트가 쌓이는 팀,\n복잡한 업무를 AI 제품과 웹 경험으로 바꿉니다.",
    "SLIT은 어려운 전문 도메인을 이해하고, 그 안의 복잡한 업무흐름을 AI Agent와 웹 제품으로 바꾸는 팀입니다.",
    "메인 제품 Recova는 무담보 매입채권추심사가 수만 건의 채권 계정을 검토하고, 회수 가능성과 법적 조치 우선순위를 판단하도록 돕는 AI Agent입니다.",
    "우리가 지금 내세우는 것은 매출 숫자가 아니라 공개된 성과와 실행 이력입니다. 수상, 프로그램 선정, PoC, 고객 프로젝트, 커뮤니티 운영까지 이미 포트폴리오가 될 재료가 쌓여 있습니다.",
  ],
  stats: [
    { value: "4", label: "Recova PoC", description: "전문 도메인 고객 검증" },
    { value: "2026", label: "Asan Doers", description: "아산 두어스 선정" },
    { value: "대상", label: "AI+X 글로벌", description: "창업경진대회 수상" },
    { value: "대상", label: "경기 딥테크", description: "FLEX 2025 수상" },
  ],
  sections: [
    {
      title: "우리가 풀고 있는 문제",
      body: [
        "AI가 가장 큰 가치를 만드는 곳은 설명이 쉬운 문제가 아니라, 현장의 지식과 판단이 오래 쌓인 전문 도메인이라고 봅니다.",
        "Recova는 채권 계정 검토, 회수 가능성 판단, 법적 조치 우선순위 같은 숙련자의 판단을 제품 안으로 옮기는 시도입니다. 단순 챗봇보다 업무흐름과 의사결정에 더 가까운 문제를 다룹니다.",
      ],
      items: [
        "전문 도메인 리서치",
        "AI Agent 업무흐름 설계",
        "웹 제품과 자동화 구현",
        "PoC와 고객 피드백 반영",
      ],
    },
    {
      title: "우리가 증명한 실행력",
      body: [
        "SLIT은 아직 큰 조직은 아니지만, 공개할 수 있는 성과의 밀도는 높습니다. 수상과 프로그램 선정, 실제 구축 프로젝트가 함께 쌓이고 있습니다.",
        "흩어진 실적은 IR 덱, 영업자료, 프로젝트 페이지, 제품 소개 페이지, 콘텐츠 템플릿으로 정리될 때 더 선명한 회사 자산이 됩니다.",
      ],
      columns: [
        {
          title: "공개 성과",
          body: "Asan Doers 2026, SKKU AI+X 글로벌 창업경진대회 대상, 경기 딥테크 FLEX 2025 대상 등 공개 증빙이 있는 성과를 전면에 둡니다.",
        },
        {
          title: "프로젝트 포트폴리오",
          body: "Recova 외에도 Neural Arcade AX, d8d/lilmgenius 협업, Outsome, 로톡, ArtWizard, Peopet, SPEC, ANYON을 케이스로 정리합니다.",
        },
      ],
    },
    {
      title: "포트폴리오로 정리할 것",
      body: [
        "이미 있는 성과를 더 설득력 있게 보이도록 만드는 일이 필요합니다. 브랜드 톤, 웹 페이지, 제안서, IR 덱, 제품 설명, 프로젝트 케이스 스터디가 모두 실제 산출물이 됩니다.",
        "작은 팀의 장점은 한 영역에 갇히지 않고, 문제에 맞는 형태의 결과물을 빠르게 만들 수 있다는 데 있습니다.",
      ],
      columns: [
        {
          title: "브랜드와 웹",
          body: "SLIT과 Recova의 메시지, 랜딩 페이지, 프로젝트 포트폴리오 화면, 고객용 설명 페이지를 함께 만듭니다.",
        },
        {
          title: "자료와 콘텐츠",
          body: "IR 덱, 제안서, 세일즈 덱, 프로그램 제출 자료, 프로젝트 회고 콘텐츠를 실제 목적에 맞게 다듬습니다.",
        },
      ],
    },
  ],
  linkCards: [
    {
      title: "프로젝트 포트폴리오",
      description:
        "Recova와 Neural Arcade, d8d/lilmgenius 협업, 외부 구축 프로젝트를 한 곳에서 봅니다.",
      href: routePaths.interviews,
    },
    {
      title: "Neural Arcade",
      description:
        "헬로우봇을 기반으로 AI 엔터테인먼트 앱을 확장하는 스타트업의 공개 페이지입니다.",
      href: "https://www.neuralarcade.ai/",
    },
    {
      title: "HelloBot 공개 앱",
      description:
        "Google Play에 NEURAL ARCADE 개발자로 공개된 헬로우봇 앱 정보입니다.",
      href: "https://play.google.com/store/apps/details?id=com.thingsflow.hellobot",
    },
    {
      title: "lilmgenius 공개 프로필",
      description:
        "d8d 창업자 겸 CAIO, SI/AX 프로젝트 경험과 AI 강의·심사 이력을 공개한 프로필입니다.",
      href: "https://lilmgenius.notion.site/",
    },
  ],
} satisfies PageContent;

export const aboutPage = {
  key: "about",
  path: routePaths.about,
  title: "SLIT 소개",
  breadcrumb: "SLIT Portfolio / SLIT 소개",
  intro: [
    "Identity",
    "우리는\n전문 도메인의 복잡한 업무를\nAI 제품으로 만듭니다",
  ],
  stats: [
    {
      value: "Recova",
      label: "주력 제품",
      description: "채권추심 업무 AI Agent",
    },
    { value: "4", label: "PoC", description: "도메인 고객 검증" },
    {
      value: "9",
      label: "Portfolio",
      description: "정리 중인 프로젝트 케이스",
    },
    { value: "AX", label: "Build Focus", description: "AI 도입과 자동화 구현" },
  ],
  heroImage: "https://picsum.photos/seed/slit-domain/1200/740",
  sections: [
    {
      title: "복잡한 도메인을 제품 언어로 번역합니다",
      body: [
        "SLIT은 단순히 빠르게 만드는 팀이 아니라, 현장의 맥락을 이해하고 업무흐름을 제품으로 옮기는 팀이 되고자 합니다.",
        "채권추심, 법률 응대, 커뮤니티 운영, 3D 전시, 펫샵 자동화처럼 서로 다른 프로젝트를 해왔지만 공통점은 같습니다. 복잡한 문제를 실제 작동하는 웹, 자동화, AI Agent로 바꾸는 것입니다.",
      ],
    },
    {
      eyebrow: "Mission",
      title: "숙련자의 판단과 반복 업무를 제품 안으로 옮깁니다.",
      body: [
        "Recova는 사람이 오래 배워야 하는 채권 계정 검토와 회수 우선순위 판단을 AI Agent 업무흐름으로 만들고 있습니다.",
        "우리는 기술 이름을 앞세우기보다, 고객이 실제로 어떤 결정을 더 빠르고 일관되게 내려야 하는지부터 봅니다.",
      ],
    },
    {
      eyebrow: "Vision",
      title: "성과가 쌓이는 프로젝트를 더 잘 보이게 만듭니다.",
      body: [
        "지금 SLIT에는 공개 수상, 프로그램 선정, 실제 구축 프로젝트가 함께 쌓이고 있습니다.",
        "다음 단계는 이 실적을 더 설득력 있는 브랜드, 웹, 자료, 콘텐츠로 정리하는 것입니다. 그래서 이 페이지도 회사의 포트폴리오를 보여주는 구조를 우선합니다.",
      ],
    },
  ],
  linkCards: [
    {
      title: "Recova",
      description:
        "무담보 매입채권추심 도메인의 계정 검토와 회수 판단을 돕는 AI Agent입니다.",
      href: routePaths.interviews,
    },
    {
      title: "프로젝트 케이스",
      description:
        "고객 프로젝트와 협업 네트워크를 케이스 스터디 형태로 정리합니다.",
      href: routePaths.interviews,
    },
  ],
} satisfies PageContent;

export const culturePage = {
  key: "culture",
  path: routePaths.culture,
  title: "일을 대하는 우리의 태도",
  breadcrumb: "SLIT Portfolio / 일을 대하는 우리의 태도",
  intro: [
    "우리는 좁고 어려운 도메인을\n끝까지 파고듭니다.",
    "기술보다 현장의 문제를 먼저 보고, 빠르게 만들고, 증거로 고칩니다.",
  ],
  heroImage: dividerImage,
  sections: [
    {
      title: "SLIT이 지키려는 기준",
      body: [
        "우리는 아직 완성된 조직이 아니기 때문에 더 명확한 기준이 필요합니다. 모르는 것은 빠르게 확인하고, 확인한 것은 산출물로 남깁니다.",
      ],
    },
    {
      eyebrow: "01",
      title: "좁고 어려운 도메인을 끝까지 파고듭니다.",
      body: [
        "처음 봐서는 설명하기 어려운 산업일수록 더 큰 기회가 있다고 봅니다. 용어, 이해관계자, 실제 업무흐름을 먼저 이해합니다.",
      ],
    },
    {
      eyebrow: "02",
      title: "기술보다 현장의 문제를 먼저 봅니다.",
      body: [
        "AI, 자동화, 웹, 3D 같은 기술은 수단입니다. 고객이 어떤 결정을 반복하고 어디서 시간이 새는지부터 정의합니다.",
      ],
    },
    {
      eyebrow: "03",
      title: "빠르게 만들고 고객 반응으로 고칩니다.",
      body: [
        "완벽한 기획서보다 작동하는 초안이 더 빠르게 배움을 줍니다. PoC와 고객 피드백을 기준으로 다음 버전을 정합니다.",
      ],
    },
    {
      eyebrow: "04",
      title: "증거로 설득합니다.",
      body: [
        "수상, 공개 기사, 사용자 수, 고객 피드백, 실제 화면처럼 확인 가능한 증거를 모아 말합니다.",
      ],
    },
    {
      eyebrow: "05",
      title: "복잡한 이야기를 단순하게 만듭니다.",
      body: [
        "전문 도메인의 복잡함을 고객과 파트너가 이해할 수 있는 문장, 다이어그램, 웹 페이지, 자료로 바꾸는 능력을 중요하게 봅니다.",
      ],
    },
    {
      eyebrow: "06",
      title: "작은 팀처럼 책임지고 끝냅니다.",
      body: [
        "작은 팀에서는 내 역할의 경계보다 결과가 먼저입니다. 필요한 일을 발견하면 제안하고, 끝까지 정리합니다.",
      ],
    },
  ],
} satisfies PageContent;

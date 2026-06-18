import { routePaths } from "@/content/routes";
import type { PageContent } from "@/content/types";

const dividerImage =
  "https://oopy.lazyrockets.com/api/v2/notion/image?src=attachment%3Ae627aefa-e06d-4187-87c1-66e737f1489b%3AFrame_11.png&blockId=33cdb7f5-8f0a-808f-a698-fa71b1ddfcf7";

export const homePage = {
  key: "home",
  path: routePaths.home,
  title: "팀민트 채용페이지",
  breadcrumb: "팀민트 채용페이지",
  heroImage:
    "https://oopy.lazyrockets.com/api/v2/notion/image?src=attachment%3A03ce5fe4-c6ed-47a0-9f53-73230ae8d5a7%3A%ED%8C%80%EB%AF%BC%ED%8A%B8_%EB%85%B8%EC%85%98_%EC%B1%84%EC%9A%A9_%ED%82%A4%EB%B9%84%EC%A5%AC%EC%96%BC_251217.png&blockId=2eedb7f5-8f0a-804d-b082-dc2950a2bc7f",
  intro: [
    "마케팅 시장을 혁신하는 팀민트에서\n위대한 도전을 함께할 인재를 찾습니다.",
    "우리는 마케팅 에이전시이자 스타트업입니다.",
    "TEAM MINT는 Marketing Integration & Technology의 약자로 브랜딩과 퍼포먼스 마케팅, CRM으로 이어지는 통합마케팅을 제공하며, 고객사가 마케팅 측면에서 마주하는 어려움을 해소합니다.",
    "22년 5월에 설립된 이후 가파르게 성장하고 있는 조직으로, 당연한 것들에 끊임없이 질문을 던지고, 빠른 실행과 개선하며 마케팅 시장을 혁신해 나가고 있습니다.",
    "일에 진심인 동료들과 함께 빠르게 성장하고 싶다면, 팀민트에 합류하세요.",
  ],
  stats: [
    { value: "03", label: "2022.05.02", description: "설립 후 3주년" },
    { value: "70+", label: "총인원", description: "70명 이상" },
    { value: "30+", label: "프로젝트 수", description: "30건 돌파" },
    { value: "900억+", label: "2026년", description: "예상 취급고" },
  ],
  sections: [
    {
      title: "우리는 이렇게 일합니다",
      body: [
        "주어진 문제에 빠르게 부딪히고, 함께 더 나은 길을 찾습니다.",
        "팀민트의 조직문화와 일하는 방식을 자세히 알아보세요.",
      ],
      items: [
        "도전하고, 배우며, 개선합니다.",
        "팀으로 일합니다.",
        "문제를 내버려두지 않습니다.",
        "객관적으로 바라봅니다.",
        "맡은 일을 끝냅니다.",
        "괜한 오해가 없게 배려합니다.",
      ],
    },
    {
      title: "몰입과 성취가 우리의 성장이 되는 구조를 만듭니다",
      columns: [
        {
          title: "더 잘하기 위해 필요한 것을 지원합니다",
          body: "유연근무 · 직무교육 · AI 역량 강화",
        },
        {
          title: "함께 이룬 성과를 우리의 성장으로 연결합니다",
          body: "성과 인센티브 · 자기계발비 · 점심 식대",
        },
      ],
    },
    {
      title: "이런 사람들이 모여 있습니다",
      columns: [
        {
          title: "[퍼포먼스 마케터 신유나님] 팀민트 1호 인턴, 뿅아리의 성장기",
          body: "첫 인턴으로 합류해 프로젝트를 리딩하는 마케터로 성장한 이야기.",
        },
        {
          title:
            "[조직문화 매니저 최지명님] 팀민트의 한달은 GE의 한달과 다르다",
          body: "스타트업의 속도와 도전 속에서 조직문화를 만들어가는 이야기.",
        },
      ],
    },
  ],
  linkCards: [
    {
      title: "팀민트 홈페이지",
      description:
        "팀민트가 어떤 일을 하는지 궁금하다면 홈페이지를 방문해서 자세히 알아보세요.",
      href: "https://team-mint.io/",
    },
    {
      title: "ReFit",
      description:
        "리핏 서비스에 대해 더 자세히 알아보고 싶다면 홈페이지를 방문해 보세요.",
      href: "https://www.refit.ai/",
    },
    {
      title: "팀민트 링크드인",
      description:
        "팀민트의 행사 소식이나 일상이 궁금하다면 링크드인을 방문해 보세요.",
      href: "https://www.linkedin.com/company/team-mint/posts/?feedView=all",
    },
    {
      title: "Mix",
      description:
        "믹스의 마케팅 인사이트를 발견하고 싶다면 홈페이지에서 살펴보세요.",
      href: "https://mix.day/",
    },
  ],
} satisfies PageContent;

export const aboutPage = {
  key: "about",
  path: routePaths.about,
  title: "팀민트 소개",
  breadcrumb: "팀민트 채용페이지 / 팀민트 소개",
  intro: ["Identity", "우리는 \n마케팅 에이전시이자\n스타트업입니다"],
  stats: [
    { value: "03", label: "2022년 5월 2일", description: "설립 후 3주년" },
    { value: "70+", label: "총인원", description: "70명 이상" },
    { value: "30+", label: "프로젝트 수", description: "30건 돌파" },
    { value: "900억+", label: "2026년", description: "예상 취급고" },
  ],
  heroImage:
    "https://oopy.lazyrockets.com/api/v2/notion/image?src=attachment%3A803a9cd2-d30b-409b-bf92-7e560e021738%3Aimage.png&blockId=33adb7f5-8f0a-8197-8de1-d234b6d10540",
  sections: [
    {
      title: "마케팅 에이전시이자 스타트업입니다",
      body: [
        "마케팅 에이전시로서 우리는 기업과 브랜드가 시장에서 성공할 수 있도록 최적의 전략을 실행합니다. 전문가이자 파트너로서 빠르게 변화하는 시장 환경에서 복잡한 고객의 문제를 효과적으로 해결합니다.",
        "동시에 우리는 기존의 방식대로 수행하는 것에 머무르지 않습니다. 스타트업으로서 시장이 가진 문제에 끊임없이 질문을 던지고, 가설과 새로운 시도를 통해 기존의 한계를 뛰어넘는 성장을 추구합니다.",
      ],
    },
    {
      eyebrow: "Mission",
      title: "고객의 만족을 넘어 시장의 성숙, 그리고 우리의 성장을 만듭니다.",
      body: [
        "일반적인 B2B 비즈니스가 장기계약으로 이루어지는 것과 달리, 광고 마케팅업은 반복적인 경쟁입찰 구조로 시장이 형성되어 있습니다.",
        "우리는 이 악순환을 끊어내려 합니다. 통합마케팅 역량을 갖추고, 마케터에게 더 나은 환경과 도구를 제공하는 것이 변화의 시작점이라고 믿습니다.",
      ],
    },
    {
      eyebrow: "Vision",
      title: "마케팅 비용의 낭비를 Zero로 만듭니다",
      body: [
        "목적 없이 흩어지는 예산과 비효율적인 업무를 최소화하고, 마케팅의 본질인 고객의 문제 해결에 온전히 집중하기 위해서입니다.",
        "통합 마케팅과 기술 혁신을 통해 고객 만족을 이끌어내고 우리의 성장을 가속화합니다.",
      ],
    },
  ],
  linkCards: [
    {
      title: "ReFit",
      description: "마케팅 데이터 솔루션, 자동화와 분석 생산성을 높입니다.",
      href: "https://www.refit.ai/",
    },
    {
      title: "Mix",
      description: "마케팅 지식과 트렌드를 큐레이션하는 미디어 플랫폼입니다.",
      href: "https://mix.day/",
    },
  ],
} satisfies PageContent;

export const culturePage = {
  key: "culture",
  path: routePaths.culture,
  title: "일을 대하는 우리의 태도",
  breadcrumb: "팀민트 채용페이지 / 일을 대하는 우리의 태도",
  intro: [
    "우리는 마케팅 시장의\n'당연한 문제'에 질문을 던집니다.",
    "빠르게 변화하는 환경 속에서도 목적과 효과성을 기준으로 판단하고, 팀으로 문제를 해결합니다.",
  ],
  heroImage: dividerImage,
  sections: [
    {
      title: "팀민트가 지키려는 가치",
      body: [
        "우리는 정답이 없는 문제를 함께 풀어갑니다. 익숙함보다 목적을 우선하고, 실패와 실수를 배움의 기회로 삼습니다.",
      ],
    },
    {
      eyebrow: "01",
      title: "도전하고, 배우며, 개선합니다.",
      body: [
        "익숙함과 편안함보다 목적과 효과성을 우선합니다. 완벽하기보다 빠르게 시도하고 개선합니다.",
      ],
    },
    {
      eyebrow: "02",
      title: "팀으로 일합니다.",
      body: [
        "나의 기준보다 팀의 목표를 우선합니다. 각자의 일이 연결됨을 이해하고 함께 판단하고 움직입니다.",
      ],
    },
    {
      eyebrow: "03",
      title: "문제를 내버려두지 않습니다.",
      body: [
        "모호할 땐 답을 기다리기보다 먼저 묻고 제안합니다. 문제 상황 자체보다 문제를 해결하는 것에 집중합니다.",
      ],
    },
    {
      eyebrow: "04",
      title: "객관적으로 바라봅니다.",
      body: [
        "사실과 데이터를 기반으로 판단하고, 제안이나 피드백을 개선의 기회로 삼습니다.",
      ],
    },
    {
      eyebrow: "05",
      title: "맡은 일을 끝냅니다.",
      body: [
        "마감과 완성도의 균형을 이해하고, 고객과의 약속을 가장 중요한 기준으로 둡니다.",
      ],
    },
    {
      eyebrow: "06",
      title: "괜한 오해가 없게 배려합니다.",
      body: [
        "명확한 설명이 곧 친절입니다. 요청할 땐 기대하는 결과나 행동을 명확히 전달합니다.",
      ],
    },
  ],
} satisfies PageContent;

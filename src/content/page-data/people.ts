import { routePaths } from "@/content/routes";
import type { PageContent } from "@/content/types";

const projectImage = (seed: string) =>
  `https://picsum.photos/seed/${seed}/900/506`;

export const interviewsPage = {
  key: "interviews",
  path: routePaths.interviews,
  title: "프로젝트 포트폴리오",
  breadcrumb: "SLIT Portfolio / 프로젝트 포트폴리오",
  intro: [
    "채용 페이지이자 고객에게 보여줄 수 있는 회사 포트폴리오입니다.",
    "각 프로젝트는 첫 화면에서는 짧게 보이고, 자세히 보기에서 문제, 사용 기술, SLIT이 만든 것, 시행착오, 결과와 증빙을 확인할 수 있게 구성했습니다.",
  ],
  interviewCards: [
    {
      title: "Recova",
      image: projectImage("slit-recova-case"),
      description:
        "무담보 매입채권추심사가 수만 건의 채권 계정을 검토하고 회수 가능성과 법적 조치 우선순위를 판단하도록 돕는 AI Agent.",
      tags: ["AI Agent", "B2B SaaS", "Domain Workflow"],
      proof: "4개 기업 PoC, 수상과 프로그램 선정 스토리의 중심 제품",
      details: [
        {
          title: "문제",
          body: "채권 계정 검토와 회수 판단은 데이터만 보는 일이 아니라, 도메인 지식과 우선순위 판단이 함께 필요한 업무입니다.",
        },
        {
          title: "접근",
          body: "계정 검토, 회수 가능성 판단, 법적 조치 우선순위를 하나의 업무흐름으로 묶고 AI Agent가 판단 보조를 하도록 설계합니다.",
        },
        {
          title: "결과",
          body: "SLIT의 메인 사업이자 가장 깊은 도메인 포트폴리오입니다. 디자이너가 합류하면 제품 소개 페이지, 세일즈 덱, PoC 리포트, 고객용 화면 설명까지 확장할 수 있습니다.",
        },
      ],
    },
    {
      title: "d8d / lilmgenius 협업",
      image: projectImage("slit-d8d-case"),
      description:
        "30+ SI/AX 프로젝트 경험을 가진 AI 실행자와 함께 AX 프로젝트를 전개하는 협업 네트워크 케이스.",
      tags: ["AX Partner", "Collaboration", "Execution Network"],
      proof: "d8d 창업자 겸 CAIO, LF AI 수석, AI 강의·심사 이력 공개",
      href: "https://lilmgenius.notion.site/",
      details: [
        {
          title: "맥락",
          body: "이 케이스는 고객 납품 한 건이라기보다 SLIT이 어떤 수준의 실행자와 문제를 정의하고 구현하는지 보여주는 신뢰 증거입니다.",
        },
        {
          title: "접근",
          body: "프로젝트 맥락을 빠르게 구조화하고, AX 전략과 실제 구현 사이의 간극을 줄이는 방식으로 협업합니다.",
        },
        {
          title: "의미",
          body: "지원자에게는 같이 일하는 네트워크의 수준을 보여주고, 고객에게는 SLIT이 단독 실행만이 아니라 강한 파트너십으로 프로젝트를 밀어붙일 수 있음을 보여줍니다.",
        },
      ],
    },
    {
      title: "Neural Arcade AX",
      image: projectImage("slit-neural-arcade-case"),
      description:
        "헬로우봇을 만드는 AI 엔터테인먼트 앱 스타트업과 진행 중인 AX 프로젝트.",
      tags: ["Ongoing", "AI Entertainment", "Workflow Automation"],
      proof:
        "HelloBot은 Google Play에서 NEURAL ARCADE 개발자로 공개되어 있으며 1M+ 다운로드, 40.9K 리뷰, 4.2점을 보유",
      href: "https://www.neuralarcade.ai/",
      details: [
        {
          title: "맥락",
          body: "Neural Arcade는 게임적 재미와 AI 챗봇을 결합한 엔터테인먼트 앱 스튜디오 맥락을 공개하고 있습니다.",
        },
        {
          title: "접근",
          body: "현재 진행 중인 프로젝트이므로 SLIT의 범위는 과장하지 않고 AX 구축, 운영 워크플로우 자동화, AI 도입 실험처럼 수정 가능한 표현으로 둡니다.",
        },
        {
          title: "의미",
          body: "검증된 컨슈머 AI 서비스와 일한다는 사실 자체가 강한 포트폴리오 재료입니다. 향후 실제 산출물과 과정을 추가하면 고객용 케이스 스터디로도 바로 확장됩니다.",
        },
      ],
    },
    {
      title: "Outsome 배치 관리/커뮤니티 서비스",
      image: projectImage("slit-outsome-case"),
      description:
        "운영자가 반복적으로 처리하던 배치 관리와 커뮤니티 운영 흐름을 웹 서비스로 정리한 구축 프로젝트.",
      tags: ["Admin Tool", "Community", "Operations"],
      proof: "운영 흐름을 화면과 관리 구조로 바꾼 실무형 프로젝트",
      details: [
        {
          title: "문제",
          body: "운영자가 반복 업무를 수동으로 처리하면 기록이 흩어지고, 커뮤니티의 상태를 한눈에 보기 어렵습니다.",
        },
        {
          title: "구축",
          body: "배치 관리, 멤버 상태, 운영 기록을 관리자가 확인할 수 있는 서비스 흐름으로 묶는 방향으로 설계합니다.",
        },
        {
          title: "포트폴리오 가치",
          body: "복잡한 운영 업무를 인터페이스와 정보 구조로 바꾸는 능력을 보여주는 케이스입니다.",
        },
      ],
    },
    {
      title: "법무법인 로톡 자동 답변 프로그램",
      image: projectImage("slit-lawtalk-case"),
      description:
        "반복 문의와 응대 문맥을 정리해 더 빠르고 일관된 답변 흐름을 만들기 위한 자동화 프로그램.",
      tags: ["Legal Ops", "Automation", "Response Flow"],
      proof: "전문 도메인의 반복 응대를 구조화한 자동화 케이스",
      details: [
        {
          title: "문제",
          body: "법률 영역의 응대는 단순 템플릿으로 처리하기 어렵고, 맥락과 표현의 정확성이 중요합니다.",
        },
        {
          title: "접근",
          body: "문의 유형과 답변 흐름을 분리하고, 사람이 검토하기 쉬운 자동 답변 초안 구조를 만듭니다.",
        },
        {
          title: "의미",
          body: "AI와 자동화가 전문 서비스 운영을 어떻게 보조할 수 있는지 보여주는 케이스입니다.",
        },
      ],
    },
    {
      title: "ArtWizard 3D 전시 웹사이트",
      image: projectImage("slit-artwizard-case"),
      description:
        "전시 콘텐츠를 웹에서 탐색할 수 있도록 3D 경험과 정보 구조를 결합한 웹사이트 프로젝트.",
      tags: ["3D Web", "Exhibition", "Interactive"],
      proof: "기술 구현과 시각 경험을 함께 설계한 프로젝트",
      details: [
        {
          title: "문제",
          body: "전시는 공간감과 탐색 경험이 중요하기 때문에 일반 소개 페이지보다 몰입형 웹 구성이 필요합니다.",
        },
        {
          title: "구축",
          body: "3D 전시 경험, 작품 정보, 사용자 이동 흐름을 웹 안에서 자연스럽게 연결하는 방향으로 구현합니다.",
        },
        {
          title: "의미",
          body: "디자이너가 합류하면 이 케이스는 인터랙션, 전시 브랜딩, 프로젝트 비주얼을 강하게 보여주는 포트폴리오가 됩니다.",
        },
      ],
    },
    {
      title: "Peopet 펫샵 웹사이트/자동화 에이전트",
      image: projectImage("slit-peopet-case"),
      description:
        "펫샵의 웹 접점과 반복 운영 업무를 함께 정리하는 웹사이트 및 자동화 에이전트 프로젝트.",
      tags: ["Local Business", "Website", "Automation Agent"],
      proof: "소상공인 운영 흐름까지 제품화 관점으로 본 프로젝트",
      details: [
        {
          title: "문제",
          body: "펫샵은 예약, 문의, 상품 안내, 고객 관리가 함께 움직이지만 작은 사업장에서는 자동화 여력이 부족합니다.",
        },
        {
          title: "접근",
          body: "웹사이트를 단순 소개 페이지로 끝내지 않고, 반복 문의와 운영 흐름을 자동화 에이전트로 연결하는 방향을 잡습니다.",
        },
        {
          title: "의미",
          body: "SLIT이 B2B 전문 도메인뿐 아니라 작은 운영 현장에도 같은 방식으로 접근할 수 있음을 보여줍니다.",
        },
      ],
    },
    {
      title: "SPEC 홈페이지/커뮤니티 운영",
      image: projectImage("slit-spec-case"),
      description:
        "홈페이지와 커뮤니티 운영을 함께 다루며 콘텐츠, 모집, 참여 흐름을 정리한 운영형 프로젝트.",
      tags: ["Community", "Website", "Content Ops"],
      proof: "커뮤니티와 채널 운영 경험을 보여주는 공개 가능한 케이스",
      details: [
        {
          title: "문제",
          body: "커뮤니티는 웹사이트, 콘텐츠, 모집 메시지, 운영 리듬이 따로 놀면 신뢰가 떨어집니다.",
        },
        {
          title: "구축",
          body: "홈페이지 구조와 커뮤니티 운영 메시지를 맞추고, 참여자가 이해하기 쉬운 흐름으로 정리합니다.",
        },
        {
          title: "의미",
          body: "디자인과 콘텐츠 운영이 연결되는 지점이라 초기 디자이너가 크게 기여할 수 있는 프로젝트입니다.",
        },
      ],
    },
    {
      title: "ANYON",
      image: projectImage("slit-anyon-case"),
      description:
        "프로젝트 맥락을 계속 업데이트할 수 있도록 독립 케이스 블록으로 둔 SLIT의 실험/구축 포트폴리오.",
      tags: ["Experiment", "Product", "Editable Case"],
      proof: "추가 설명을 붙이기 쉽게 분리한 케이스",
      details: [
        {
          title: "현재 상태",
          body: "ANYON은 사용자가 나중에 구체 설명을 보강할 수 있도록, 지금은 과도한 단정 없이 독립 프로젝트로 둡니다.",
        },
        {
          title: "작성 방식",
          body: "문제, 접근, 결과가 확정되는 대로 같은 구조에 내용을 채우면 됩니다.",
        },
        {
          title: "의미",
          body: "완성된 프로젝트뿐 아니라 실험과 구축의 흔적도 회사 포트폴리오의 일부로 관리한다는 메시지를 줍니다.",
        },
      ],
    },
  ],
  sections: [
    {
      title: "자세히 보기",
      body: [
        "각 프로젝트 카드는 자세히 보기 영역을 열면 문제, 접근, 구축 내용, 결과, 포트폴리오로서의 의미를 확인할 수 있습니다.",
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
    "초기팀의 속도와\n포트폴리오가 되는 산출물",
    "SLIT의 일하는 환경은 아직 대기업식 복지가 아니라, 실제 프로젝트와 성과를 빠르게 자기 결과물로 만들 수 있는 환경에 가깝습니다.\n\n온라인 협업을 기본으로 두고, 필요할 때 내방역 근처 오피스에서 만나 문제를 정리합니다. 자료, 웹, 브랜드, 콘텐츠가 따로 떨어져 있지 않기 때문에 한 사람이 넓게 보고 빠르게 고칠 수 있습니다.",
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
      title: "성장 재료",
      body: [
        "이 역할의 장점은 이미 쌓인 프로젝트와 성과를 포트폴리오로 정리할 재료가 많다는 점입니다.",
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
          title: "넓은 역할",
          body: "브랜드, 웹, 제안서, 제품 소개, 프로젝트 케이스 스터디를 상황에 맞게 넘나듭니다.",
        },
      ],
    },
    {
      title: "아직 확정할 것",
      body: ["보상, 투입 시간, 지원 경로는 협업 형태에 맞춰 업데이트합니다."],
      columns: [
        {
          title: "근무 형태",
          body: "프로젝트, 파트타임, 계약 형태를 열어두고 역할과 투입 시간을 먼저 맞춥니다.",
        },
        {
          title: "지원 경로",
          body: "지원/문의 경로는 업데이트 예정입니다. v1에서는 이 문구를 placeholder로 둡니다.",
        },
      ],
    },
  ],
} satisfies PageContent;

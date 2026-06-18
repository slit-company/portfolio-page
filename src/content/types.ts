export type RouteKey =
  | "home"
  | "about"
  | "culture"
  | "interviews"
  | "life"
  | "journey"
  | "careers";

export type NavItem = {
  readonly label: string;
  readonly href?: string;
  readonly external?: boolean;
  readonly children?: readonly NavItem[];
};

export type StatItem = {
  readonly value: string;
  readonly label: string;
  readonly description: string;
};

export type SectionBlock = {
  readonly eyebrow?: string;
  readonly title: string;
  readonly body?: readonly string[];
  readonly items?: readonly string[];
  readonly columns?: readonly {
    readonly title: string;
    readonly body: string;
  }[];
};

export type LinkCard = {
  readonly title: string;
  readonly description: string;
  readonly href: string;
};

export type InterviewCard = {
  readonly title: string;
  readonly image: string;
  readonly href: string;
};

export type JobPosting = {
  readonly title: string;
  readonly href: string;
  readonly employment: "정규직" | "계약직";
  readonly experience: string;
  readonly status: "Open";
  readonly location: "서울" | "호치민";
};

export type JobGroup = {
  readonly office: string;
  readonly role: string;
  readonly jobs: readonly JobPosting[];
};

export type PageContent = {
  readonly key: RouteKey;
  readonly path: string;
  readonly title: string;
  readonly breadcrumb: string;
  readonly intro?: readonly string[];
  readonly stats?: readonly StatItem[];
  readonly heroImage?: string;
  readonly sections: readonly SectionBlock[];
  readonly linkCards?: readonly LinkCard[];
  readonly interviewCards?: readonly InterviewCard[];
  readonly jobs?: readonly JobGroup[];
};

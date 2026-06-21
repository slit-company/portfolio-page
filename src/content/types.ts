export type RouteKey = "home" | "interviews" | "life" | "careers" | "awards";

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

export type ProjectCaseBlock =
  | { readonly kind: "paragraph"; readonly text: string }
  | { readonly kind: "subheading"; readonly text: string }
  | { readonly kind: "bullets"; readonly items: readonly string[] };

export type ProjectCaseSection = {
  readonly title: string;
  readonly blocks: readonly ProjectCaseBlock[];
};

export type ProjectCaseTier = "flagship" | "major" | "expanding";

export type ProjectCase = {
  readonly slug: string;
  readonly title: string;
  readonly tier: ProjectCaseTier;
  readonly description: string;
  readonly tags: readonly string[];
  readonly headline: string;
  readonly intro?: readonly string[];
  readonly resultTiles: readonly string[];
  readonly sections: readonly ProjectCaseSection[];
  readonly href?: string;
};

export type JobPosting = {
  readonly title: string;
  readonly href: string;
  readonly employment: "프로젝트" | "파트타임" | "계약직";
  readonly experience: string;
  readonly status: "Open";
  readonly location: "온라인" | "내방역" | "온/오프라인";
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
  readonly sections: readonly SectionBlock[];
  readonly linkCards?: readonly LinkCard[];
  readonly projectCases?: readonly ProjectCase[];
  readonly jobs?: readonly JobGroup[];
};

import { mkdirSync, writeFileSync } from "node:fs";
import { pages } from "@/content/pages";
import { projectCases } from "@/content/project-cases";
import { navItems } from "@/content/routes";
import type {
  JobGroup,
  LinkCard,
  PageContent,
  ProjectCase,
  ProjectCaseSection,
  SectionBlock,
  StatItem,
} from "@/content/types";

const outputPath = "notion-export/slit-portfolio-copy-export.md";
const output: string[] = [];

function line(value = "") {
  output.push(value);
}

function bullet(value: string) {
  line(`- ${value}`);
}

function paragraphs(values?: readonly string[]) {
  for (const value of values ?? []) {
    line(value);
    line();
  }
}

function writeStats(stats?: readonly StatItem[]) {
  if (!stats?.length) {
    return;
  }

  line("### Stats");
  for (const stat of stats) {
    bullet(`**${stat.value}** | ${stat.label} | ${stat.description}`);
  }
  line();
}

function writeSection(section: SectionBlock) {
  line(`## ${section.eyebrow ? `${section.eyebrow} · ` : ""}${section.title}`);
  line();
  paragraphs(section.body);

  if (section.items?.length) {
    for (const item of section.items) {
      bullet(item);
    }
    line();
  }

  if (section.columns?.length) {
    for (const column of section.columns) {
      line(`### ${column.title}`);
      line(column.body);
      line();
    }
  }
}

function writeLinkCards(cards?: readonly LinkCard[]) {
  if (!cards?.length) {
    return;
  }

  line("## 링크 카드");
  line();
  for (const card of cards) {
    line(`### ${card.title}`);
    line(card.description);
    line();
    line(`URL: ${card.href}`);
    line();
  }
}

function writeJobs(groups?: readonly JobGroup[]) {
  if (!groups?.length) {
    return;
  }

  line("## 채용 카드");
  line();
  for (const group of groups) {
    line(`### ${group.office} / ${group.role}`);
    line();
    for (const job of group.jobs) {
      bullet(
        `**${job.title}** | ${job.employment} | ${job.experience} | ${job.location} | ${job.status} | ${job.href}`,
      );
    }
    line();
  }
}

function writePage(page: PageContent) {
  line(`# ${page.title}`);
  line();
  bullet(`key: ${page.key}`);
  bullet(`path: ${page.path}`);
  bullet(`breadcrumb: ${page.breadcrumb}`);
  line();

  if (page.intro?.length) {
    line("## Intro");
    line();
    paragraphs(page.intro);
  }

  writeStats(page.stats);
  for (const section of page.sections) {
    writeSection(section);
  }
  writeLinkCards(page.linkCards);
  writeJobs(page.jobs);
}

function writeProjectSection(section: ProjectCaseSection) {
  line(`## ${section.title}`);
  line();
  for (const block of section.blocks) {
    if (block.kind === "paragraph") {
      line(block.text);
      line();
    } else if (block.kind === "subheading") {
      line(`### ${block.text}`);
      line();
    } else {
      for (const item of block.items) {
        bullet(item);
      }
      line();
    }
  }
}

function writeProject(project: ProjectCase) {
  line(`# ${project.title}`);
  line();
  bullet(`slug: ${project.slug}`);
  bullet(`tier: ${project.tier}`);
  bullet(`tags: ${project.tags.join(", ")}`);
  if (project.href) {
    bullet(`externalLink: ${project.href}`);
  }
  line();

  line("## 카드 요약");
  line();
  line(project.description);
  line();
  line("## 헤드라인");
  line();
  line(project.headline);
  line();

  if (project.intro?.length) {
    line("## Intro");
    line();
    paragraphs(project.intro);
  }

  for (const section of project.sections) {
    writeProjectSection(section);
  }

  line("## 결과 타일");
  line();
  for (const tile of project.resultTiles) {
    bullet(tile);
  }
  line();
}

line("# SLIT Portfolio Copy Export");
line();
line(
  "현재 레포 코드에 들어간 페이지/프로젝트 카피를 Notion에서 수정하기 쉽게 Markdown으로 추출한 문서입니다.",
);
line();
line("## Notion 구성 제안");
line();
bullet("상위 페이지: SLIT Portfolio Copy Export");
bullet("하위 페이지 1: 사이트 페이지 카피");
bullet("하위 페이지 2: 프로젝트 케이스 상세 카피");
bullet("하위 페이지 3: 네비게이션/라우트/공통 메모");
line();
line("## 네비게이션");
line();
for (const item of navItems) {
  bullet(`${item.label}${item.href ? `: ${item.href}` : ""}`);
  for (const child of item.children ?? []) {
    bullet(`  - ${child.label}: ${child.href ?? ""}`);
  }
}
line();
line("## 사이트 라우트");
line();
for (const page of pages) {
  bullet(`${page.title}: ${page.path}`);
}
line();
line("---");
line();
line("# 사이트 페이지 카피");
line();
for (const page of pages) {
  writePage(page);
  line("---");
  line();
}
line("# 프로젝트 케이스 상세 카피");
line();
for (const project of projectCases) {
  writeProject(project);
  line("---");
  line();
}

mkdirSync("notion-export", { recursive: true });
writeFileSync(outputPath, `${output.join("\n").trim()}\n`);
console.log(outputPath);

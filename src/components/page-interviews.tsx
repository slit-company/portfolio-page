import Link from "next/link";
import { MotionLift, Reveal } from "@/components/reveal";
import { getProjectCasePath } from "@/content/project-cases";
import type { ProjectCase, ProjectCaseTier } from "@/content/types";

const caseGroups = [
  {
    tier: "flagship",
    title: "대표 사례",
    description:
      "SLIT이 가장 깊게 검증하고 있는 운영 시스템 사례입니다. 결과물보다 어떤 반복을 발견했고 어떤 판단을 남겼는지 먼저 읽히도록 정리했습니다.",
  },
  {
    tier: "major",
    title: "주요 사례",
    description:
      "법률, 운영, 전시처럼 담당자 판단과 사람 검토가 중요한 업무를 다룹니다. 각 사례는 멋진 화면보다 실제 업무에서 줄인 반복을 중심으로 봅니다.",
  },
  {
    tier: "expanding",
    title: "확장 기록",
    description:
      "PoC, 협업, 초기 제품 실험으로 이어지는 기록입니다. 아직 완결된 성과보다 SLIT이 어떤 문제를 AX 대상으로 읽는지 보여주는 자료입니다.",
  },
] satisfies readonly {
  readonly tier: ProjectCaseTier;
  readonly title: string;
  readonly description: string;
}[];

const caseTierLabels = {
  flagship: "대표 사례",
  major: "주요 사례",
  expanding: "확장 기록",
} satisfies Record<ProjectCaseTier, string>;

export function InterviewIntroCallout({
  lines,
}: {
  readonly lines?: readonly string[];
}) {
  const body =
    lines?.[1] ??
    "프로젝트별로 문제, 접근, 구축 내용, 결과와 증빙을 확인할 수 있습니다.";

  return (
    <Reveal className="mt-6 border-y border-[rgba(55,53,47,0.12)] py-6">
      {lines?.[0] ? (
        <p className="mb-3 text-[18px] font-extrabold leading-7 text-[rgb(55,53,47)]">
          {lines[0]}
        </p>
      ) : null}
      <p className="text-[16px] leading-8 text-[rgb(55,53,47)]">{body}</p>
    </Reveal>
  );
}

export function InterviewGrid({
  cards,
}: {
  readonly cards: readonly ProjectCase[];
}) {
  return (
    <div className="mt-20 space-y-20">
      {caseGroups.map((group) => {
        const groupCards = cards.filter((card) => card.tier === group.tier);

        if (groupCards.length === 0) {
          return null;
        }

        return (
          <Reveal delay={group.tier === "flagship" ? 0 : 0.04} key={group.tier}>
            <div className="mb-8 max-w-[720px]">
              <p className="text-[14px] font-extrabold leading-5 text-[rgba(55,53,47,0.55)]">
                {group.title}
              </p>
              <p className="mt-3 break-keep text-[17px] leading-8 text-[rgba(55,53,47,0.8)]">
                {group.description}
              </p>
            </div>
            <div className="space-y-8">
              {groupCards.map((card) => (
                <CaseCard
                  featured={group.tier === "flagship"}
                  key={card.title}
                  project={card}
                />
              ))}
            </div>
          </Reveal>
        );
      })}
    </div>
  );
}

function CaseCard({
  project,
}: {
  readonly featured: boolean;
  readonly project: ProjectCase;
}) {
  return (
    <MotionLift>
      <Link
        className="block text-inherit no-underline"
        href={getProjectCasePath(project.slug)}
      >
        <article className="border-t border-[rgba(55,53,47,0.14)] pt-8 text-inherit transition-colors duration-150 hover:border-[rgba(55,53,47,0.35)]">
          <p className="text-[13px] font-extrabold leading-5 text-[rgba(55,53,47,0.52)]">
            {caseTierLabels[project.tier]}
          </p>
          <h2 className="mt-3 break-keep text-[26px] font-extrabold leading-[1.32] tracking-[-0.01em] text-[rgb(55,53,47)]">
            {project.title}
          </h2>
          <p className="mt-4 break-keep text-[18px] font-extrabold leading-8 text-[rgb(55,53,47)]">
            {project.headline}
          </p>
          <div className="mt-4 space-y-4 text-[16px] leading-8 text-[rgba(55,53,47,0.82)]">
            <p>{project.description}</p>
            <p>{project.summary[0]}</p>
          </div>
          <p className="mt-5 border-l-2 border-[rgb(154,226,196)] pl-3 break-keep text-[15px] font-extrabold leading-7 text-[rgb(55,53,47)]">
            {project.proof}
          </p>
          <p className="mt-5 text-[14px] font-extrabold text-[rgba(55,53,47,0.7)]">
            자세히 읽기
          </p>
        </article>
      </Link>
    </MotionLift>
  );
}

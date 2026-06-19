import Image from "next/image";
import Link from "next/link";
import { MotionLift, Reveal } from "@/components/reveal";
import { getProjectCasePath } from "@/content/project-cases";
import type { ProjectCase } from "@/content/types";

export function InterviewIntroCallout({
  lines,
}: {
  readonly lines?: readonly string[];
}) {
  const body =
    lines?.[1] ??
    "프로젝트별로 문제, 접근, 구축 내용, 결과와 증빙을 확인할 수 있습니다.";

  return (
    <Reveal className="mt-6 rounded-[20px] border border-[rgba(55,53,47,0.12)] p-5">
      {lines?.[0] ? (
        <p className="mb-3 text-[16px] font-bold leading-6 text-[rgb(55,53,47)]">
          {lines[0]}
        </p>
      ) : null}
      <p className="text-[15px] leading-[1.65] text-[rgb(55,53,47)]">{body}</p>
    </Reveal>
  );
}

export function InterviewGrid({
  cards,
}: {
  readonly cards: readonly ProjectCase[];
}) {
  return (
    <Reveal className="mt-20 grid gap-4 md:grid-cols-2">
      {cards.map((card) => (
        <MotionLift key={card.title}>
          <Link
            className="block h-full text-inherit no-underline"
            href={getProjectCasePath(card.slug)}
          >
            <article className="h-full overflow-hidden rounded-[20px] border border-[rgba(55,53,47,0.12)] bg-white text-inherit transition-colors duration-150 hover:border-[rgba(55,53,47,0.28)]">
              <Image
                alt=""
                className="aspect-[446/251] w-full object-cover"
                height={251}
                src={card.image}
                unoptimized
                width={446}
              />
              <div className="p-5">
                <p className="mb-3 text-[13px] font-bold leading-5 text-[rgba(55,53,47,0.55)]">
                  프로젝트 케이스
                </p>
                <h2 className="text-[19px] font-bold leading-7">
                  {card.title}
                </h2>
                <p className="mt-3 text-[15px] leading-6 text-[rgba(55,53,47,0.78)]">
                  {card.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {card.tags.map((tag) => (
                    <span
                      className="rounded bg-[rgba(55,53,47,0.07)] px-2 py-1 text-[13px] font-bold leading-4 text-[rgba(55,53,47,0.72)]"
                      key={tag}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <p className="mt-4 border-l-2 border-[rgb(154,226,196)] pl-3 text-[14px] font-bold leading-6 text-[rgb(55,53,47)]">
                  {card.proof}
                </p>
              </div>
            </article>
          </Link>
        </MotionLift>
      ))}
    </Reveal>
  );
}

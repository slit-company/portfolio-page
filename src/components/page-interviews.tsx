import Image from "next/image";
import { MotionLift, Reveal } from "@/components/reveal";
import type { InterviewCard } from "@/content/types";

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
        <p className="mb-3 text-[15px] font-bold leading-6 text-[rgb(55,53,47)]">
          {lines[0]}
        </p>
      ) : null}
      <p className="text-[14px] leading-[1.65] text-[rgb(55,53,47)]">{body}</p>
    </Reveal>
  );
}

export function InterviewGrid({
  cards,
}: {
  readonly cards: readonly InterviewCard[];
}) {
  return (
    <Reveal className="mt-20 grid gap-4 md:grid-cols-2">
      {cards.map((card) => (
        <MotionLift key={card.title}>
          <article className="h-full overflow-hidden rounded-[20px] border border-[rgba(55,53,47,0.12)] bg-white text-inherit">
            <Image
              alt=""
              className="aspect-[446/251] w-full object-cover"
              height={251}
              src={card.image}
              unoptimized
              width={446}
            />
            <div className="p-4">
              <h2 className="text-[17px] font-bold leading-7">{card.title}</h2>
              {card.description ? (
                <p className="mt-3 text-[14px] leading-6 text-[rgba(55,53,47,0.78)]">
                  {card.description}
                </p>
              ) : null}
              {card.tags ? (
                <div className="mt-4 flex flex-wrap gap-2">
                  {card.tags.map((tag) => (
                    <span
                      className="rounded bg-[rgba(55,53,47,0.07)] px-2 py-1 text-[12px] font-bold leading-4 text-[rgba(55,53,47,0.72)]"
                      key={tag}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              ) : null}
              {card.proof ? (
                <p className="mt-4 border-l-2 border-[rgb(154,226,196)] pl-3 text-[13px] font-bold leading-6 text-[rgb(55,53,47)]">
                  {card.proof}
                </p>
              ) : null}
              {card.details ? (
                <details className="group mt-5 border-t border-[rgba(55,53,47,0.12)] pt-4">
                  <summary className="cursor-pointer list-none text-[14px] font-bold leading-6 text-[rgb(55,53,47)]">
                    <span className="group-open:hidden">자세히 보기</span>
                    <span className="hidden group-open:inline">접기</span>
                  </summary>
                  <div className="mt-4 space-y-4">
                    {card.details.map((detail) => (
                      <section key={detail.title}>
                        <h3 className="text-[14px] font-bold leading-6">
                          {detail.title}
                        </h3>
                        <p className="mt-1 text-[14px] leading-6 text-[rgba(55,53,47,0.78)]">
                          {detail.body}
                        </p>
                      </section>
                    ))}
                    {card.href ? (
                      <a
                        className="inline-flex text-[13px] font-bold text-inherit underline decoration-[rgba(55,53,47,0.28)] underline-offset-2"
                        href={card.href}
                        rel="noreferrer"
                        target="_blank"
                      >
                        공개 자료 보기
                      </a>
                    ) : null}
                  </div>
                </details>
              ) : null}
            </div>
          </article>
        </MotionLift>
      ))}
    </Reveal>
  );
}

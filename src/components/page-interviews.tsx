import Image from "next/image";
import { MotionLift, Reveal } from "@/components/reveal";
import type { InterviewCard } from "@/content/types";

export function InterviewIntroCallout() {
  return (
    <Reveal className="mt-6 rounded-[20px] border border-[rgba(55,53,47,0.12)] p-5">
      <div className="flex gap-3">
        <span aria-hidden="true">🌿</span>
        <p className="text-[14px] leading-[1.65] text-[rgb(55,53,47)]">
          팀민트가 타협하지 않는 것이 있습니다.{" "}
          <strong>
            하루 8시간, 일주일 중 5일을 같이 보내는 동료들과의 관계
          </strong>
          입니다. 서로의 성장과 발전을 도모하며, 단순 업무 협력 이상의 의미를
          만들어갑니다. 본 인터뷰 콘텐츠는 그 속에서{" "}
          <strong>특별한 이야기와 열정</strong>을 가진{" "}
          <strong>Refresh People</strong>을 소개하고 있습니다. 팀민트의 현재이자
          미래인 그들의 이야기에 귀 기울여보세요.
        </p>
      </div>
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
          <a
            className="block overflow-hidden rounded-[20px] border border-[rgba(55,53,47,0.12)] bg-white text-inherit no-underline"
            href={card.href}
            rel="noreferrer"
            target="_blank"
          >
            <Image
              alt=""
              className="aspect-[446/251] w-full object-cover"
              height={251}
              src={card.image}
              unoptimized
              width={446}
            />
            <p className="px-3 py-2 text-[14px] font-bold leading-5 md:truncate">
              {card.title}
            </p>
          </a>
        </MotionLift>
      ))}
    </Reveal>
  );
}

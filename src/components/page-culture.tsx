import Image from "next/image";
import { Reveal } from "@/components/reveal";

const permanentBetaImage =
  "https://oopy.lazyrockets.com/api/v2/notion/image?src=attachment%3Ad8c2ef15-891a-4146-aa54-abfda65999af%3Aimage.webp&blockId=33adb7f5-8f0a-81c6-b50c-fbd24cc80aa1";

export function CultureLead() {
  return (
    <Reveal className="mt-[35px]">
      <h2 className="break-keep border-b border-[rgba(55,53,47,0.12)] pb-5 text-[30px] font-semibold leading-[1.3]">
        우리는 마케팅 시장의
        <br />
        '당연한 문제'에 질문을 던집니다.
      </h2>
      <div className="mt-4 space-y-9 text-[15px] leading-7 text-[rgb(55,53,47)]">
        <p>
          마케팅 에이전시이자 스타트업에서 일한다는 것은 다양하고 과감한 새로운
          문제를 끊임없이 마주한다는 뜻이기도 합니다.
        </p>
        <p className="whitespace-pre-line">
          고객의 문제를 직접 해결해야 하고,{"\n"}업무 환경은 시시각각 변화하며,
          {"\n"}완벽한 매뉴얼이 없는 상태에서 빠르게 판단하고 실행해야 합니다.
        </p>
        <p className="whitespace-pre-line">
          그래서 우리는 모호한 상황에서 방법을 제시하고,{"\n"}문제를 발견하면
          빠르게 공유하고 함께 해결하며,{"\n"}변화에 저항하기 보다 먼저 이해하고
          이끌어 갑니다.
        </p>
      </div>
    </Reveal>
  );
}

export function CulturePermanentBeta() {
  return (
    <Reveal className="mt-[95px] border-t border-[rgba(55,53,47,0.12)] pt-10">
      <h2 className="text-[30px] font-semibold leading-[1.3]">
        팀민트가 지키려는 가치
      </h2>
      <div className="mt-10">
        <h3 className="text-[24px] font-semibold leading-[1.3]">
          Permanent Beta
        </h3>
        <p className="mt-3 text-[15px] italic leading-7 text-[rgba(55,53,47,0.68)]">
          현재에 안주하지 않고 끊임없이 더 나은 방향을 향해 개선해 나가는 태도
        </p>
        <div className="mt-6 grid gap-10 md:grid-cols-[324px_1fr]">
          <Image
            alt=""
            className="w-full rounded-[18px] object-cover"
            height={442}
            src={permanentBetaImage}
            unoptimized
            width={323}
          />
          <div className="space-y-4 text-[16px] leading-7">
            <p>
              <strong>
                퍼머넌트 베타는 영속성을 뜻하는 ‘Permanent’와 미완성을 의미하는
                ‘Beta’의 합성어입니다.
              </strong>{" "}
              우리는 익숙한 관행에 질문을 던지고, 새로운 기준을 만들어 나가고
              있습니다.
            </p>
            <p>
              그 과정이 결코 쉽지 않기에, 끊임없는 배움과 개선이 필요합니다.
              동시에 우리는 아직 완성된 조직이 아닙니다. 지금까지 잘 해왔지만
              여전히 더 나아질 수 있고, 더 나은 방식과 더 좋은 결과를 향해 갈 수
              있습니다.
            </p>
            <p>
              따라서, 우리는 늘 배우고, 개선하고, 도전하는{" "}
              <strong>‘Beta’ 상태</strong>를 유지해야 합니다.
            </p>
          </div>
        </div>
      </div>
    </Reveal>
  );
}

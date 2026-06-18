import Image from "next/image";
import { Reveal } from "@/components/reveal";

const permanentBetaImage = "https://picsum.photos/seed/slit-culture/640/884";

export function CultureLead() {
  return (
    <Reveal className="mt-[35px]">
      <h2 className="break-keep border-b border-[rgba(55,53,47,0.12)] pb-5 text-[30px] font-semibold leading-[1.3]">
        우리는 좁고 어려운 도메인을
        <br />
        끝까지 파고듭니다.
      </h2>
      <div className="mt-4 space-y-9 text-[15px] leading-7 text-[rgb(55,53,47)]">
        <p>
          SLIT에서 일한다는 것은 쉬운 설명보다 실제 문제가 먼저인 프로젝트를
          다룬다는 뜻입니다.
        </p>
        <p className="whitespace-pre-line">
          고객의 업무흐름을 직접 이해해야 하고,{"\n"}용어와 맥락을 제품 언어로
          바꿔야 하며,{"\n"}완벽한 매뉴얼이 없는 상태에서 빠르게 만들어야
          합니다.
        </p>
        <p className="whitespace-pre-line">
          그래서 우리는 모호한 상황에서 가설을 세우고,{"\n"}작게 만들어
          확인하며,
          {"\n"}확인한 것은 문장, 화면, 자료로 남깁니다.
        </p>
      </div>
    </Reveal>
  );
}

export function CulturePermanentBeta() {
  return (
    <Reveal className="mt-[95px] border-t border-[rgba(55,53,47,0.12)] pt-10">
      <h2 className="text-[30px] font-semibold leading-[1.3]">
        SLIT이 지키려는 기준
      </h2>
      <div className="mt-10">
        <h3 className="text-[24px] font-semibold leading-[1.3]">
          Evidence First
        </h3>
        <p className="mt-3 text-[15px] italic leading-7 text-[rgba(55,53,47,0.68)]">
          주장보다 증거를 먼저 만들고, 증거가 쌓이면 더 선명한 이야기로
          정리합니다
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
                SLIT의 성과는 수상 이름이나 프로젝트명만으로 완성되지 않습니다.
              </strong>{" "}
              어떤 문제를 풀었고, 어떤 과정을 거쳤고, 무엇이 남았는지 설명할 수
              있어야 합니다.
            </p>
            <p>
              그래서 우리는 결과물만 남기지 않고 과정도 함께 남기려 합니다.
              디자이너에게도 이 지점이 중요합니다. 포트폴리오는 예쁜 화면보다
              문제를 어떻게 다르게 풀었는지를 보여줄 때 강해집니다.
            </p>
            <p>
              지금 필요한 사람은 이 증거들을 브랜드, 웹, 덱, 콘텐츠로 바꿔
              회사와 본인의 포트폴리오를 함께 키울 사람입니다.
            </p>
          </div>
        </div>
      </div>
    </Reveal>
  );
}

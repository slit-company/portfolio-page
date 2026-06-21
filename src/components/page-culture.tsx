import { Reveal } from "@/components/reveal";

export function CultureLead() {
  return (
    <Reveal className="mt-[35px]">
      <h2 className="break-keep border-b border-[rgba(55,53,47,0.12)] pb-5 text-[32px] font-extrabold leading-[1.3] tracking-[-0.01em]">
        조직 안의 가짜 노동을 끝까지 추적합니다.
      </h2>
      <div className="mt-6 space-y-6 text-[17px] leading-8 text-[rgb(55,53,47)]">
        <p>
          SLIT에서 일한다는 것은 현장의 반복을 무작정 지우기보다, 그 반복이 왜 생겼는지 먼저 읽는 일입니다.
        </p>
        <p>
          보고를 위한 보고, 다시 찾는 자료, 같은 설명의 반복, 담당자 머릿속에만 남은 예외 규칙을 따라갑니다. 그 안에서 시스템이 맡을 일과 사람이 끝까지 가져가야 할 판단을 나눕니다.
        </p>
        <p>
          팔란티어식 AX에서 배울 점도 여기에 있습니다. 데이터, 비즈니스 로직, 실제 애플리케이션이 따로 움직이면 AI는 현장에 남지 않습니다. SLIT은 작은 PoC에서도 이 세 가지가 한 흐름으로 이어지는지 봅니다.
        </p>
      </div>
    </Reveal>
  );
}

export function CulturePermanentBeta() {
  return (
    <Reveal className="mt-[95px] border-t border-[rgba(55,53,47,0.12)] pt-10">
      <h2 className="text-[32px] font-extrabold leading-[1.3] tracking-[-0.01em]">
        SLIT이 지키려는 기준
      </h2>
      <div className="mt-8 space-y-6 text-[17px] leading-8 text-[rgb(55,53,47)]">
        <p>
          SLIT의 성과는 수상 이름만으로 읽히지 않습니다. 어떤 문제를 봤고, 왜 그 접근이 먹혔고, 고객이 어떤 다음 결정을 할 수 있었는지까지 남겨야 합니다.
        </p>
        <p>
          포트폴리오는 결과물 목록보다 과정의 밀도가 중요합니다. 대회에서 1등을 했다면 왜 1등을 했는지, 고객 프로젝트를 했다면 어떤 반복을 줄였는지, PoC를 하고 있다면 무엇을 검증 중인지 보여줘야 합니다.
        </p>
        <p>
          그래서 SLIT의 페이지는 예쁜 화면보다 판단의 기록에 무게를 둡니다. Recova, 법률 상담 초안, Outsome 운영, 전시 준비, 커뮤니티 운영까지 같은 질문으로 읽습니다. 어디에 가짜 노동이 쌓였고, 어떤 시스템이 그 반복을 줄였는지 확인합니다.
        </p>
      </div>
    </Reveal>
  );
}

import Image from "next/image";
import { Reveal } from "@/components/reveal";

const journeyProcessImage = "https://picsum.photos/seed/slit-journey/1200/226";

export function JourneyIntro() {
  return (
    <Reveal className="mt-[63px]">
      <h2 className="border-b border-[rgba(55,53,47,0.12)] pb-5 text-[26.25px] font-semibold leading-[1.3]">
        지원하시기 전에
      </h2>
      <div className="mt-4 space-y-3 text-[14px] leading-[1.65] md:leading-7">
        <p>
          이번 합류 과정은 정해진 자리의 빈칸을 채우는 절차가 아니라, SLIT의
          프로젝트와 지원자의 포트폴리오 방향이 만나는지 확인하는 시간입니다.
        </p>
        <p>
          완성된 결과물만 보지 않습니다. 왜 그렇게 만들었는지, 어떤 제약이
          있었는지, 어떤 과정을 거쳐 더 나은 결과로 바꿨는지를 함께 봅니다.
        </p>
        <ul className="ml-5 list-disc space-y-2">
          <li>과정이 보이는 포트폴리오</li>
          <li>복잡한 프로젝트를 쉽게 설명해본 경험</li>
          <li>브랜드, 웹, 자료, 콘텐츠 중 가장 강한 영역</li>
          <li>초기팀에서 넓게 일할 때 필요한 협업 방식</li>
        </ul>
      </div>
    </Reveal>
  );
}

const journeyDetails = [
  {
    label: "Step1.",
    title: "포트폴리오 공유",
    body: "완성 결과물뿐 아니라 과정과 판단 근거가 보이는 자료를 공유합니다.",
  },
  {
    label: "Step2.",
    title: "커피챗",
    body: "SLIT이 가진 프로젝트 재료와 지원자가 만들고 싶은 포트폴리오 방향이 맞는지 이야기합니다.",
  },
  {
    label: "Step3.",
    title: "작업 방식 인터뷰",
    body: "브랜드, 웹, 자료, 콘텐츠를 문제에 맞게 풀어온 방식과 협업 리듬을 확인합니다.",
  },
  {
    label: "Step4.",
    title: "협업 범위 정리",
    body: "프로젝트, 파트타임, 계약 등 가능한 형태와 기대 산출물을 맞춥니다.",
  },
  {
    label: "Step5.",
    title: "프로젝트 시작",
    body: "작은 산출물부터 함께 만들며 역할과 협업 방식을 조정합니다.",
  },
] satisfies readonly {
  readonly label: string;
  readonly title: string;
  readonly body: string;
}[];

export function JourneyProcess() {
  return (
    <Reveal className="mt-[63px] border-t border-[rgba(55,53,47,0.12)] pt-10">
      <h2 className="text-[26.25px] font-semibold leading-[1.3]">
        채용 프로세스
      </h2>
      <Image
        alt=""
        className="mt-[23px] w-full object-cover"
        height={171}
        src={journeyProcessImage}
        unoptimized
        width={908}
      />
      <div className="mt-16 space-y-8">
        {journeyDetails.map((detail) => (
          <div
            className="grid gap-5 md:grid-cols-[160px_1fr]"
            key={detail.label}
          >
            <h3 className="text-[18px] font-bold leading-7">
              {detail.label}
              <br />
              {detail.title}
            </h3>
            <div>
              <p className="inline bg-[rgba(55,53,47,0.08)] px-1 text-[16px] font-bold">
                {detail.title}
              </p>
              <div className="mt-2 rounded-[20px] border border-[rgba(55,53,47,0.12)] p-5 text-[15px] leading-7">
                {detail.body}
              </div>
            </div>
          </div>
        ))}
      </div>
    </Reveal>
  );
}

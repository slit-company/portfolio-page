import Image from "next/image";
import { Reveal } from "@/components/reveal";

const journeyProcessImage =
  "https://oopy.lazyrockets.com/api/v2/notion/image?src=attachment%3A9b4f648e-f987-4e52-84c5-5cf1309f3df9%3Aimage.png&blockId=33adb7f5-8f0a-8110-ad08-fffc236795a7";

export function JourneyIntro() {
  return (
    <Reveal className="mt-[63px]">
      <h2 className="border-b border-[rgba(55,53,47,0.12)] pb-5 text-[26.25px] font-semibold leading-[1.3]">
        지원하시기 전에
      </h2>
      <div className="mt-4 space-y-3 text-[14px] leading-[1.65] md:leading-7">
        <p>
          채용 과정은 여러분이 합류하셨을 때 서로가 시너지를 내며 일할 수 있을지
          알아보는 자리인 만큼, 지원자분께서 팀민트와 함께 하고 싶은지, 나와 잘
          맞는 회사일지 고민하고 판단하는 과정 또한 중요합니다.
        </p>
        <p>
          팀민트는 경력이나 경험만큼 일에 대한 지원자분의 생각과 관점, 문제를
          해결하는 방식을 중요하게 여깁니다. 따라서, 지원을 결정하시기 전에 아래
          요소를 미리 고민해주신다면 서로에게 더 의미 있는 경험이 될 수 있어요.
        </p>
        <ul className="ml-5 list-disc space-y-2">
          <li>회사를 선택하는 기준</li>
          <li>이 일을 선택하고, 계속 하고 있는 이유</li>
          <li>
            가장 성장했다고 느꼈던 순간 또는 자신이 성장한다고 느끼는 상황/환경
          </li>
          <li>가장 잘 몰입할 수 있는 혹은 어려움을 느끼는 상황/환경</li>
        </ul>
      </div>
    </Reveal>
  );
}

const journeyDetails = [
  {
    label: "Step1.",
    title: "채용 공고 확인",
    body: "지원하기 전, 채용 공고를 꼼꼼하게 살펴봐 주세요. 팀 소개, 업무 내용, 지원 자격, 우대 사항을 확인합니다.",
  },
  {
    label: "Step2.",
    title: "지원 서류 작성",
    body: "경험과 강점이 잘 드러나도록 이력서와 포트폴리오를 준비합니다.",
  },
  {
    label: "Step3.",
    title: "1차 실무자 인터뷰",
    body: "지원자의 경험과 직무 역량, 일하는 방식을 함께 이야기합니다.",
  },
  {
    label: "Step4.",
    title: "2차 컬처핏 인터뷰",
    body: "팀민트가 일하는 방식과 지원자의 가치관, 협업 스타일이 잘 맞는지 확인합니다.",
  },
  {
    label: "Step5.",
    title: "최종 합격",
    body: "처우와 입사 일정을 조율한 뒤 온보딩을 준비합니다. 전형별 결과는 보통 3~7일 내 안내드립니다.",
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
                📋{" "}
                {detail.title === "채용 공고 확인"
                  ? "지원하기 전, 채용 공고를 꼼꼼하게 살펴봐 주세요."
                  : detail.title}
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

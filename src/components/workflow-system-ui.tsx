type WorkflowStep = {
  readonly number: string;
  readonly title: string;
  readonly body: string;
};

const homeSteps = [
  {
    number: "01",
    title: "업무흐름을 먼저 듣습니다.",
    body: "담당자가 실제로 어떤 자료를 보고, 어떤 화면을 오가며, 어떤 기준으로 판단하는지 확인합니다. 이 단계에서는 솔루션을 제안하기보다 일이 흘러가는 순서를 먼저 적습니다.",
  },
  {
    number: "02",
    title: "반복되는 판단을 분리합니다.",
    body: "매번 사람이 다시 확인하는 분류, 우선순위, 예외 처리를 찾아냅니다. AI가 맡을 수 있는 일과 사람이 책임지고 검토해야 하는 일을 나눕니다.",
  },
  {
    number: "03",
    title: "검토 가능한 운영 흐름으로 옮깁니다.",
    body: "AI Agent는 초안과 근거를 만들고, 담당자는 승인·수정·보류 사유를 남깁니다. PoC는 이 흐름이 실제 업무에서 남는지 확인하는 과정입니다.",
  },
] satisfies readonly WorkflowStep[];

const processSteps = [
  {
    number: "01",
    title: "작은 업무흐름 하나를 고릅니다.",
    body: "상담 접수, 계정 검토, 자료 정리처럼 실제로 반복되는 한 구간을 먼저 정합니다. 그 안에서 무엇이 자동화될 수 있는지 봅니다.",
  },
  {
    number: "02",
    title: "사람이 판단해야 하는 지점을 남깁니다.",
    body: "고객 커뮤니케이션, 법적 판단, 최종 승인처럼 책임이 남는 지점은 담당자가 검토할 수 있도록 설계합니다.",
  },
  {
    number: "03",
    title: "AI Agent가 맡을 일을 작게 정의합니다.",
    body: "분류, 답변 초안, 근거 정리, 누락 조건 표시처럼 AI가 반복적으로 도울 수 있는 일을 작게 나눕니다. 결과는 사람이 읽고 고칠 수 있는 형태로 남깁니다.",
  },
  {
    number: "04",
    title: "PoC 이후 운영 기록을 기준으로 넓힙니다.",
    body: "처리 시간, 담당자 수정률, 누락된 예외, 보류 사유를 보면서 다음 자동화 범위를 정합니다. 시스템은 한 번에 완성하기보다 실제 검토 기록을 보며 커집니다.",
  },
] satisfies readonly WorkflowStep[];

function NarrativeSteps({ steps }: { readonly steps: readonly WorkflowStep[] }) {
  return (
    <div className="mt-10 space-y-8">
      {steps.map((step) => (
        <section
          className="grid gap-5 border-t border-[var(--tm-border)] pt-7 md:grid-cols-[72px_1fr]"
          key={step.number}
        >
          <p className="text-[15px] font-bold leading-7 text-[var(--tm-faint)] tabular-nums">
            {step.number}
          </p>
          <div className="max-w-[820px]">
            <h3 className="break-keep text-[22px] font-bold leading-8 text-[var(--tm-text)]">
              {step.title}
            </h3>
            <p className="mt-3 break-keep text-[17px] leading-9 text-[var(--tm-muted)]">
              {step.body}
            </p>
          </div>
        </section>
      ))}
    </div>
  );
}

export function HomeWorkflowPreview() {
  return (
    <section className="mt-16 border-y border-[var(--tm-border)] py-12 md:py-14">
      <div className="max-w-[980px]">
        <p className="text-[14px] font-bold leading-5 text-[var(--tm-faint)]">
          SLIT AX Workflow
        </p>
        <h2 className="mt-4 max-w-[780px] break-keep text-[32px] font-bold leading-[1.32] text-[var(--tm-text)] md:text-[40px]">
          업무흐름을 읽고, 사람이 검토할 수 있는 방식으로 옮깁니다.
        </h2>
        <p className="mt-6 max-w-[780px] break-keep text-[18px] leading-9 text-[var(--tm-muted)]">
          SLIT의 PoC는 담당자가 실제로 판단하는 순서를 듣는 데서 시작합니다. 반복되는 일을 AI Agent가 도울 수 있는 형태로 작게 바꾸고, 중요한 판단은 사람이 검토하고 기록할 수 있게 남깁니다.
        </p>
      </div>
      <NarrativeSteps steps={homeSteps} />
    </section>
  );
}

export function ProcessSystemMock() {
  return (
    <section className="mt-12 border-y border-[var(--tm-border)] py-12 md:py-14">
      <div className="max-w-[980px]">
        <p className="text-[14px] font-bold leading-5 text-[var(--tm-faint)]">
          운영 시스템 전환 방식
        </p>
        <h2 className="mt-4 max-w-[820px] break-keep text-[32px] font-bold leading-[1.34] text-[var(--tm-text)] md:text-[38px]">
          처음부터 거대한 시스템을 만들기보다, 실제로 남는 업무흐름부터 검증합니다.
        </h2>
        <p className="mt-6 max-w-[820px] break-keep text-[18px] leading-9 text-[var(--tm-muted)]">
          좋은 AX 프로젝트는 화려한 화면보다 판단의 책임이 어디에 남는지 분명해야
          합니다. SLIT은 자동화 가능한 구간과 사람이 검토해야 하는 구간을 나누고,
          PoC에서 나온 기록을 보며 운영 범위를 넓힙니다.
        </p>
      </div>
      <NarrativeSteps steps={processSteps} />
    </section>
  );
}

import { Reveal } from "@/components/reveal";
import type { JobGroup } from "@/content/types";

export function Jobs({ groups }: { readonly groups: readonly JobGroup[] }) {
  return (
    <div className="space-y-[107px]">
      {groups.map((group) => (
        <Reveal key={group.office}>
          <h2 className="border-b border-[rgba(55,53,47,0.13)] pb-4 text-[28px] font-semibold leading-[1.3]">
            {group.office}
          </h2>
          <h3 className="mt-7 text-[19px] font-bold leading-[1.45]">
            {group.role}
          </h3>
          <div className="overflow-hidden">
            <div className="hidden border-b border-[rgba(55,53,47,0.12)] py-1.5 text-[15px] text-[rgba(55,53,47,0.55)] md:grid md:grid-cols-[360px_116px_116px]">
              <span>채용 중인 포지션</span>
              <span>구분</span>
              <span>경험</span>
            </div>
            <div className="hidden md:block">
              {group.jobs.map((job) => (
                <a
                  className="grid grid-cols-[360px_116px_116px] border-b border-[rgba(55,53,47,0.12)] py-1.5 text-[15px] leading-[1.35] text-inherit no-underline hover:bg-[rgba(55,53,47,0.04)]"
                  href={job.href}
                  key={job.title}
                  rel="noreferrer"
                  target="_blank"
                >
                  <span className="font-medium underline decoration-[rgba(55,53,47,0.25)] underline-offset-2">
                    {job.title}
                  </span>
                  <span>
                    <span className="rounded bg-[#e4f3df] px-1.5 py-0.5 text-[#276335]">
                      {job.employment}
                    </span>
                  </span>
                  <span>
                    <span className="rounded bg-[rgba(55,53,47,0.08)] px-1.5 py-0.5">
                      {job.experience}
                    </span>
                  </span>
                </a>
              ))}
            </div>
            <div className="grid gap-3 md:hidden">
              {group.jobs.map((job) => (
                <a
                  className="rounded-xl border border-[rgba(55,53,47,0.12)] p-4 text-inherit no-underline"
                  href={job.href}
                  key={job.title}
                  rel="noreferrer"
                  target="_blank"
                >
                  <p className="font-bold leading-6 underline decoration-[rgba(55,53,47,0.25)] underline-offset-2">
                    {job.title}
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2 text-[15px]">
                    {[
                      job.employment,
                      job.experience,
                      job.status,
                      job.location,
                    ].map((value) => (
                      <span
                        className="rounded bg-[rgba(55,53,47,0.08)] px-1.5 py-0.5"
                        key={value}
                      >
                        {value}
                      </span>
                    ))}
                  </div>
                </a>
              ))}
            </div>
          </div>
        </Reveal>
      ))}
    </div>
  );
}

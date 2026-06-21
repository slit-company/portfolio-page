import type { Metadata } from "next";
import { ContactForm } from "@/components/contact-form";
import { PageTitle } from "@/components/page-doc-layout";
import { Reveal } from "@/components/reveal";
import { SiteShell } from "@/components/site-shell";

export const metadata: Metadata = {
  title: "문의하기 — SLIT",
  description:
    "현재 업무가 어떤 순서로 도는지부터 듣고, 자동화할 구간과 사람이 검토할 구간을 함께 정리합니다. SLIT에 문의를 남겨 주십시오.",
};

export default function ContactPage() {
  return (
    <SiteShell>
      <main className="min-h-screen w-full pb-32">
        <p className="px-[14px] pt-[13px] text-[13px] leading-4 text-[rgb(55,53,47)]">
          SLIT / 문의하기
        </p>
        <article className="mx-auto mt-[120px] w-[calc(100%_-_48px)] max-w-[var(--content-max-width)]">
          <header className="flex flex-col gap-4">
            <PageTitle>
              30분이면, 우리 팀에서 사라질 수 있는 일이 보입니다.
            </PageTitle>
            <Reveal delay={0.06}>
              <p className="max-w-[52ch] break-keep text-[15px] leading-[1.65] text-[rgb(55_53_47/0.7)]">
                현재 업무가 어떤 순서로 도는지부터 듣고, 자동화할 구간과 사람이
                검토할 구간을 함께 정리합니다.
              </p>
            </Reveal>
          </header>
          <div className="mt-10">
            <ContactForm />
          </div>
        </article>
      </main>
    </SiteShell>
  );
}

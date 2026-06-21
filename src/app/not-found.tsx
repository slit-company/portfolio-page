import Link from "next/link";
import { SiteShell } from "@/components/site-shell";
import { routePaths } from "@/content/routes";

export default function NotFound() {
  return (
    <SiteShell>
      <main className="min-h-[calc(100dvh-var(--nav-height))] w-full pb-32">
        <p className="px-[14px] pt-[13px] text-[13px] leading-4 text-[rgb(55,53,47)]">
          404
        </p>
        <article className="mx-auto mt-[120px] w-[calc(100%_-_48px)] max-w-[908px]">
          <h1 className="text-[40px] font-bold leading-[1.2] text-[rgb(55,53,47)]">
            404
          </h1>
          <p className="mt-6 text-[15px] leading-[1.65] text-[rgb(55,53,47)]">
            찾으시는 페이지가 없습니다.
          </p>
          <p className="mt-2 text-[15px] leading-[1.65] text-[rgba(55,53,47,0.66)]">
            주소가 바뀌었거나 삭제된 페이지일 수 있습니다.
          </p>
          <Link
            className="mt-8 inline-flex h-10 items-center rounded-lg bg-black px-4 text-[15px] font-bold text-white no-underline"
            href={routePaths.home}
          >
            홈으로
          </Link>
        </article>
      </main>
    </SiteShell>
  );
}

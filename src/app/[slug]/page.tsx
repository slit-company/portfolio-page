import { notFound } from "next/navigation";
import { PageRenderer } from "@/components/page-renderer";
import { SiteShell } from "@/components/site-shell";
import { getPageByPath, pages } from "@/content/pages";

export function generateStaticParams() {
  return pages
    .filter((page) => page.path !== "/")
    .map((page) => ({ slug: page.path.slice(1) }));
}

type PageProps = {
  readonly params: Promise<{
    readonly slug: string;
  }>;
};

export default async function SlugPage({ params }: PageProps) {
  const { slug } = await params;
  const page = getPageByPath(`/${slug}`);

  if (!page) {
    notFound();
  }

  return (
    <SiteShell>
      <PageRenderer page={page} />
    </SiteShell>
  );
}

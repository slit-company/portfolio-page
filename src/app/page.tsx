import { PageRenderer } from "@/components/page-renderer";
import { SiteShell } from "@/components/site-shell";
import { getPageByPath } from "@/content/pages";

export default function Home() {
  const page = getPageByPath("/");

  if (!page) {
    return null;
  }

  return (
    <SiteShell showCta>
      <PageRenderer page={page} />
    </SiteShell>
  );
}

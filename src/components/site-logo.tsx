import Image from "next/image";
import { cn } from "@/lib/utils";

type SiteLogoProps = {
  readonly className?: string;
  readonly imageClassName?: string;
};

export function SiteLogo({ className, imageClassName }: SiteLogoProps) {
  return (
    <span className={cn("inline-flex items-center", className)}>
      <span className="sr-only">SLIT</span>
      <Image
        alt=""
        aria-hidden="true"
        className={cn("h-10 w-auto object-contain", imageClassName)}
        height={190}
        src="/slit_logo.svg"
        unoptimized
        width={416}
      />
    </span>
  );
}

import parse from "html-react-parser";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/Button";
import { HERO_FALLBACK_CONTENT } from "@/consts/hero-fallback-data";
import { replaceDoubleHyphenWithEmDash } from "@/lib/strings";
import { BidcomInfo } from "@/types/bidcom-api";

type HeroContentProps = {
  content: BidcomInfo | null;
};

export default function HeroContent({ content }: HeroContentProps) {
  const data = content || HERO_FALLBACK_CONTENT;
  const headlineText = replaceDoubleHyphenWithEmDash(data.headline);

  return (
    <div className="flex w-[590px] flex-col items-start justify-center gap-y-6">
      <p className="text-sm tracking-[.25em]">{headlineText}</p>

      <h1 className="text-5xl text-balance">{parse(data.title)}</h1>

      <h2>{data.description}</h2>

      <Button size="xl" asChild>
        <Link href={data.button.link}>
          {data.button.title} <ArrowRight />
        </Link>
      </Button>
    </div>
  );
}

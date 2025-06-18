import parse from "html-react-parser";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { replaceDoubleHyphenWithEmDash } from "@/lib/strings";
import { BidcomImage, BidcomInfo } from "@/types/bidcom-api";

import { Button } from "./ui/Button";

type HeroProps = {
  content: BidcomInfo;
  images: BidcomImage[];
};

export default function Hero({ content, images }: HeroProps) {
  const headlineText = replaceDoubleHyphenWithEmDash(content.headline);

  return (
    <section className="5xl:gap-x-[15dvw] mx-auto flex h-screen w-full justify-center gap-x-[5dvw] px-16">
      <div className="flex w-[590px] flex-col items-start justify-center gap-y-6">
        <p className="text-sm tracking-[.25em]">{headlineText}</p>

        <h1 className="text-5xl text-balance">{parse(content.title)}</h1>

        <h2>{content.description}</h2>

        <Button size="xl" asChild>
          <Link href={content.button.link}>
            {content.button.title} <ArrowRight />
          </Link>
        </Button>
      </div>

      <div className="flex items-center">
        <Image
          src="/images/hero-fallback.png"
          alt="A woman in profile with dark hair, wearing a buttoned shirt, is set against a dark background with diagonal yellow lines."
          width={648}
          height={664}
          className="max-h-[80dvh] object-contain"
        />
      </div>
    </section>
  );
}

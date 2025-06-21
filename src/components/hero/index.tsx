import HeroCarousel from "@/components/hero/HeroCarousel";
import HeroContent from "@/components/hero/HeroContent";
import { HERO_FALLBACK_CONTENT } from "@/consts/hero-fallback-data";
import { BidcomImage, BidcomInfo } from "@/types/bidcom-api";

import CallToAction from "../ui/CallToAction";

type HeroProps = {
  content: BidcomInfo | null;
  images: BidcomImage[] | null;
};

export default function Hero({ content, images }: HeroProps) {
  const data = content || HERO_FALLBACK_CONTENT;

  return (
    <section className="5xl:gap-x-[15dvw] mx-auto flex h-screen w-full flex-col items-center justify-center gap-[5dvw] px-4 lg:mt-0 lg:flex-row lg:px-16">
      <HeroContent content={data} />
      <HeroCarousel images={images} />
      <CallToAction
        href={data.button.link}
        text={data.button.title}
        className="animate-fadeInUp lg:hidden"
      />
    </section>
  );
}

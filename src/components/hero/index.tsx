"use client";

import HeroCarousel from "@/components/hero/HeroCarousel";
import HeroContent from "@/components/hero/HeroContent";
import { HERO_FALLBACK_CONTENT } from "@/consts/hero-fallback-data";
import useDeviceScreen from "@/hooks/use-device-screen";
import { BidcomImage, BidcomInfo } from "@/types/bidcom-api";

import HeroCallToAction from "./HeroCallToAction";

type HeroProps = {
  content: BidcomInfo | null;
  images: BidcomImage[] | null;
};

export default function Hero({ content, images }: HeroProps) {
  const data = content || HERO_FALLBACK_CONTENT;
  const { isTabletScreen } = useDeviceScreen();

  return (
    <section className="5xl:gap-x-[15dvw] mx-auto flex h-screen w-full flex-col items-center justify-center gap-[5dvw] px-4 lg:mt-0 lg:flex-row lg:px-16">
      <HeroContent content={data} />
      <HeroCarousel images={images} />
      {isTabletScreen && <HeroCallToAction href={data.button.link} text={data.button.title} />}
    </section>
  );
}

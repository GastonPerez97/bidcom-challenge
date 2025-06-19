import HeroCarousel from "@/components/hero/HeroCarousel";
import HeroContent from "@/components/hero/HeroContent";
import { BidcomImage, BidcomInfo } from "@/types/bidcom-api";

type HeroProps = {
  content: BidcomInfo | null;
  images: BidcomImage[] | null;
};

export default function Hero({ content, images }: HeroProps) {
  return (
    <section className="5xl:gap-x-[15dvw] mx-auto flex h-screen w-full justify-center gap-x-[5dvw] px-16">
      <HeroContent content={content} />
      <HeroCarousel images={images} />
    </section>
  );
}

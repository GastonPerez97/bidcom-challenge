"use client";

import Image from "next/image";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/Carousel";
import ImageWithFallback from "@/components/ui/ImageWithFallback";
import { HERO_FALLBACK_IMAGES } from "@/consts/hero-fallback-data";
import { BidcomImage } from "@/types/bidcom-api";

const CAROUSEL_ITEM_IMAGE_PROPS = Object.freeze({
  fill: true,
  sizes: "(max-width: 768px) 100vw, 70vw",
  className:
    "lg:rounded-tl-[150px] lg:rounded-tr-[50px] lg:rounded-br-[150px] lg:rounded-bl-[50px] rounded-tl-[80px] rounded-tr-[25px] rounded-br-[80px] rounded-bl-[25px] object-cover"
});

type HeroImageDisplayProps = {
  images: BidcomImage[] | null;
};

export default function HeroCarousel({ images }: HeroImageDisplayProps) {
  const hasImages = images && images.length > 0;

  const renderCarouselItem = (
    src: string,
    alt: string,
    index: number,
    useFallback: boolean = false
  ) => (
    <CarouselItem key={index}>
      <div className="relative h-[40dvh] lg:h-[75dvh]">
        {useFallback ? (
          <ImageWithFallback
            src={src}
            alt={alt}
            fallbackSrc={HERO_FALLBACK_IMAGES[index].src}
            fallbackAlt={HERO_FALLBACK_IMAGES[index].alt}
            {...CAROUSEL_ITEM_IMAGE_PROPS}
          />
        ) : (
          <Image src={src} alt={alt} {...CAROUSEL_ITEM_IMAGE_PROPS} />
        )}
      </div>
    </CarouselItem>
  );

  const CarouselItems = hasImages
    ? images.map(({ image }: BidcomImage, index: number) =>
        renderCarouselItem(image, `Carousel image ${index + 1}`, index, true)
      )
    : HERO_FALLBACK_IMAGES.map((image, index: number) =>
        renderCarouselItem(image.src, image.alt, index)
      );

  return (
    <div className="animate-fadeInUp flex items-center">
      <Carousel className="w-[65dvw] lg:w-[40dvw]">
        <CarouselContent>{CarouselItems}</CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}

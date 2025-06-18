"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/Carousel";
import ImageWithFallback from "@/components/ui/ImageWithFallback";
import { HERO_FALLBACK_IMAGES } from "@/consts/hero-fallback-images";
import { BidcomImage } from "@/types/bidcom-api";

type HeroImageDisplayProps = {
  images: BidcomImage[];
};

export default function HeroCarousel({ images }: HeroImageDisplayProps) {
  // TODO: Handle case when images is undefined or empty

  return (
    <div className="flex items-center">
      <Carousel className="w-[35dvw]">
        <CarouselContent>
          {images.map(({ image }: BidcomImage, index: number) => (
            <CarouselItem key={index}>
              <div className="relative h-[80dvh]">
                <ImageWithFallback
                  src={image}
                  alt={`Carousel image ${index + 1}`}
                  fallbackSrc={HERO_FALLBACK_IMAGES[index].src}
                  fallbackAlt={HERO_FALLBACK_IMAGES[index].alt}
                  fill
                  className="rounded-tl-[150px] rounded-tr-[50px] rounded-br-[150px] rounded-bl-[50px] object-cover"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}

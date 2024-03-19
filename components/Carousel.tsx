"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import { ArrowLeftCircle, ArrowRightCircleIcon } from "lucide-react";
import Image from "next/image";
import React from "react";
import Autoplay from "embla-carousel-autoplay";

export function Example() {
  return (
    <Carousel
      plugins={[
        Autoplay({
          delay: 2000,
        }),
      ]}
    >
      // ...
    </Carousel>
  );
}

const CarouselEl = ({ className }: { className?: string }) => {
  return (
    <Carousel
      plugins={[Autoplay({ delay: 3000 })]}
      opts={{
        align: "center",
        loop: true,
      }}
      className={cn("h-[400px] relative ", className)}
    >
      <CarouselContent className="relative">
        {Array.from({ length: 8 }).map((_, index) => (
          <CarouselItem className="relative w-full h-96">
            <Image
              src={`/about/frame-${index + 1}.png`}
              alt="carousel image"
              fill
              className="object-cover w-full"
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselNext className="top-1/2 -translate-y-1/2 right-4">
        <ArrowLeftCircle />
      </CarouselNext>
      <CarouselPrevious className="top-1/2 -translate-y-1/2 left-4">
        <ArrowRightCircleIcon />
      </CarouselPrevious>
    </Carousel>
  );
};

export default CarouselEl;

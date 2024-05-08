"use client";
import * as React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import ProductCard from "./ProductCard";

export function CarouselDemo() {
  return (
    <Carousel className="w-full">
      <CarouselContent className="gap-5">
        {Array.from({ length: 10 }).map((_, index) => (
          <CarouselItem
            key={index}
            className="text-center  w-full basis-[42%] sm:basis-1/4 lg:basis-1/5 xl:basis-1/6   "
          >
            <ProductCard />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}

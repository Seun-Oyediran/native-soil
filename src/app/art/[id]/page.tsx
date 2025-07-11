"use client";
import React from "react";
import Image from "next/image";
import { ArrowLeft } from "@/components/icons/icon";
import assets from "@/lib/assets";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

export default function Page() {
  const [api, setApi] = React.useState<CarouselApi>();
  const [, setCurrent] = React.useState(0);
  const [, setCount] = React.useState(0);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <div className="pt-[5rem] pb-14 flex flex-col gap-[65px]">
      <div className="max-w-[300px] mx-auto w-full">
        <div className="w-full flex gap-8 items-center justify-between">
          <button
            type="button"
            className="w-[20px] h-[20px] justify-center items-center cursor-pointer flex"
            onClick={() => {
              api?.scrollPrev();
            }}
          >
            <ArrowLeft />
          </button>

          <Carousel className="flex-1" setApi={setApi}>
            <CarouselContent>
              {Array.from({ length: 5 }).map((_, index) => (
                <CarouselItem key={index}>
                  <div className="flex-1">
                    <Image src={assets.art} alt="art" className="w-full" />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>

          <button
            type="button"
            className="w-[20px] h-[20px] justify-center items-center cursor-pointer flex"
            onClick={() => {
              api?.scrollNext();
            }}
          >
            <ArrowLeft rotate />
          </button>
        </div>
      </div>

      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-1">
          <div className="max-w-[143px] mx-auto w-full">
            <h3 className="text-xs leading-[16px] tracking-[-1.32px] text-[#6E6E6E] text-center">
              Collection, Piece Name, dimensions.
            </h3>
          </div>
          <p className="text-xs leading-[16px] tracking-[-1.32px] text-[#232323] text-center">
            N25,000 <span className="text-[#6E6E6E]">($20)</span>
          </p>
        </div>

        <div className="flex justify-center">
          <a
            href="https://wa.me/2347065325645?text=I%20am%20a%20god"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button
              type="button"
              className="bg-[#101010] font-normal text-xs leading-[16px] tracking-[-1.32px] text-white py-3 px-4 pointer-events-auto cursor-pointer"
              onClick={() => {}}
            >
              Collect Piece
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

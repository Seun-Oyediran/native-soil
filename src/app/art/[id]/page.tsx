"use client";
import React from "react";
import Image from "next/image";
import { useParams, useSearchParams } from "next/navigation";
import { ArrowLeft } from "@/components/icons/icon";
import { collectionsData } from "@/utils/static";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

export default function Page() {
  const params = useParams();
  const searchParams = useSearchParams();
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);

  // Get collection ID from URL params and piece ID from search params
  const collectionId = parseInt(params.id as string);
  const pieceId = parseInt(searchParams.get("pieceId") || "1");

  // Find the collection and piece
  const collection = collectionsData.find((col) => col.id === collectionId);
  const currentPiece = collection?.pieces.find((piece) => piece.id === pieceId);
  const currentPieceIndex =
    collection?.pieces.findIndex((piece) => piece.id === pieceId) || 0;

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-NG", {
      style: "currency",
      currency: "NGN",
      minimumFractionDigits: 0,
    }).format(price);
  };

  const formatPriceUSD = (price: number) => {
    // Rough conversion NGN to USD (you might want to use real exchange rates)
    const usdPrice = price / 1500; // Approximate rate
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
    }).format(usdPrice);
  };

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  // Set the carousel to show the current piece initially
  React.useEffect(() => {
    if (api && currentPieceIndex !== undefined) {
      api.scrollTo(currentPieceIndex);
    }
  }, [api, currentPieceIndex]);

  // Check if we're at the edges
  const isAtStart = current === 1;
  const isAtEnd = current === collection?.pieces.length;

  // If collection or piece not found, show error or redirect
  if (!collection || !currentPiece) {
    return (
      <div className="pt-[5rem] pb-14 flex flex-col items-center justify-center">
        <p className="text-center text-[#6E6E6E]">Artwork not found</p>
      </div>
    );
  }

  return (
    <div className="pt-[5rem] pb-14 flex flex-col gap-[65px]">
      <div className="max-w-[300px] mx-auto w-full">
        <div className="w-full flex gap-8 items-center justify-between">
          <button
            type="button"
            className={`w-[20px] h-[20px] justify-center items-center flex transition-opacity ${
              isAtStart
                ? "opacity-30 cursor-not-allowed"
                : "cursor-pointer opacity-100 hover:opacity-70"
            }`}
            onClick={() => {
              if (!isAtStart) {
                api?.scrollPrev();
              }
            }}
            disabled={isAtStart}
          >
            <ArrowLeft />
          </button>

          <Carousel className="flex-1 w-full max-w-[220px]" setApi={setApi}>
            <CarouselContent>
              {collection.pieces.map((piece) => (
                <CarouselItem key={piece.id}>
                  <div className="flex-1 relative">
                    <Image
                      src={piece.asset}
                      alt={piece.piecename}
                      className="w-full max-w-[220px]"
                    />
                    {piece.sold_out && (
                      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                        <span className="text-white font-semibold text-sm">
                          SOLD OUT
                        </span>
                      </div>
                    )}
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>

          <button
            type="button"
            className={`w-[20px] h-[20px] justify-center items-center flex transition-opacity ${
              isAtEnd
                ? "opacity-30 cursor-not-allowed"
                : "cursor-pointer opacity-100 hover:opacity-70"
            }`}
            onClick={() => {
              if (!isAtEnd) {
                api?.scrollNext();
              }
            }}
            disabled={isAtEnd}
          >
            <ArrowLeft rotate />
          </button>
        </div>
      </div>

      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-1">
          <div className="max-w-[200px] mx-auto w-full">
            <h3 className="text-xs leading-[16px] tracking-[-1.32px] text-[#6E6E6E] text-center">
              {collection.collection_name},{" "}
              {collection.pieces[current - 1]?.piecename ||
                currentPiece.piecename}
            </h3>
          </div>
          <p className="text-xs leading-[16px] tracking-[-1.32px] text-[#232323] text-center">
            {formatPrice(
              collection.pieces[current - 1]?.price || currentPiece.price
            )}{" "}
            <span className="text-[#6E6E6E]">
              (
              {formatPriceUSD(
                collection.pieces[current - 1]?.price || currentPiece.price
              )}
              )
            </span>
          </p>
        </div>

        <div className="flex justify-center">
          {collection.pieces[current - 1]?.sold_out || currentPiece.sold_out ? (
            <button
              type="button"
              className="bg-[#6E6E6E] font-normal text-xs leading-[16px] tracking-[-1.32px] text-white py-3 px-4 cursor-not-allowed"
              disabled
            >
              Sold Out
            </button>
          ) : (
            <a
              href={`https://wa.me/2348098365218?text=Hi, I'm interested in "${
                collection.pieces[current - 1]?.piecename ||
                currentPiece.piecename
              }" from the ${collection.collection_name} collection.`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <button
                type="button"
                className="bg-[#101010] font-normal text-xs leading-[16px] tracking-[-1.32px] text-white py-3 px-4 pointer-events-auto cursor-pointer"
              >
                Collect Piece
              </button>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

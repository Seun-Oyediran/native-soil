import React from "react";
import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import { routes } from "@/routes";

interface Piece {
  id: number;
  asset: StaticImageData;
  piecename: string;
  sold_out: boolean;
  price: number;
  collectionName: string;
  collectionId: number;
}

interface GridItemProps {
  piece: Piece;
}

export function GridItem({ piece }: GridItemProps) {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-NG", {
      style: "currency",
      currency: "NGN",
      minimumFractionDigits: 0,
    }).format(price);
  };

  return (
    <Link href={`${routes.art.path}/${piece.collectionId}?pieceId=${piece.id}`}>
      <div className="flex flex-col">
        <div className="min-h-[232px] flex justify-center items-center bg-[#F6F6F6] relative">
          <Image
            src={piece.asset}
            alt={piece.piecename}
            className="max-w-[90px]"
          />
          {piece.sold_out && (
            <div className="absolute inset-0 bg-[#F6F6F6] bg-opacity-50 flex items-center justify-center">
              <span className="text-[#232323] font-semibold text-sm">Sold</span>
            </div>
          )}
        </div>
        <div className="">
          <p className="font-normal text-xs leading-[16px] tracking-[-1.32px]">
            {piece.collectionName}, {piece.piecename},{" "}
            {formatPrice(piece.price)}
          </p>
        </div>
      </div>
    </Link>
  );
}

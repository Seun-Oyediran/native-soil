import React from "react";
import Link from "next/link";
import Image from "next/image";
import assets from "@/lib/assets";
import { routes } from "@/routes";

export function GridItem() {
  return (
    <Link href={`${routes.art.path}/1`}>
      <div className="flex flex-col">
        <div className="min-h-[232px] flex justify-center items-center bg-[#F6F6F6]">
          <Image src={assets.art} alt="art" className="max-w-[90px]" />
        </div>
        <div className="">
          <p className="font-normal text-xs leading-[16px] tracking-[-1.32px]">
            Collection Name, number of piece dimensions, Price
          </p>
        </div>
      </div>
    </Link>
  );
}

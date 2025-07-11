import React from "react";
import Link from "next/link";
import { routes } from "@/routes";

export function AccesoriesItem() {
  return (
    <Link href={`${routes.art.path}/3`}>
      <div className="flex flex-col">
        <div className="w-full min-h-[204px] bg-[#F6F6F6]"></div>
        <p className="text-xs leading-[16px] tracking-[-1.32px] text-[#232323]">
          Jean tote bag, Custom made, N20,000 [$20]
        </p>
      </div>
    </Link>
  );
}

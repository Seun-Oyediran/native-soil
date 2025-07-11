import React from "react";
import Link from "next/link";
import { routes } from "@/routes";

export function Header() {
  return (
    <div className="flex justify-between items-center fixed top-[0] left-[0] right-[0] bg-white px-2 py-4 max-w-[1000px] mx-auto z-[99]">
      <Link href={routes.home.path}>
        <h2 className="font-normal text-[13px] leading-[21px] tracking-[-1.32px] text-[#232323]">
          The Native soil collection
        </h2>
      </Link>

      <div className="flex items-center gap-6">
        {/* <Link href={routes.qrCodes.path}>
          <h2 className="font-normal text-[13px] leading-[21px] tracking-[-1.32px] text-[#232323]">
            QR Codes
          </h2>
        </Link> */}

        <Link href={routes.about.path}>
          <h2 className="font-normal text-[13px] leading-[21px] tracking-[-1.32px] text-[#232323]">
            About Adio
          </h2>
        </Link>
      </div>
    </div>
  );
}

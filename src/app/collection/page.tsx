import React from "react";
import { CollectionButton, GridItem } from "@/components/shared";

export default function Home() {
  return (
    <div className="pt-[5rem] pb-14 flex flex-col gap-8">
      <div className="flex flex-col gap-6">
        <p className="font-medium text-[13px] leading-[21px] tracking-[-1.32px] text-[#232323]">
          the cracks
        </p>

        <p className="font-medium text-xs leading-[18px] tracking-[-1.32px] text-[#6E6E6E]">
          Between what was taken and what remains, stories linger. The Cracks is
          a visual meditation on displacement, lineage, and the invisible
          ruptures left by migration.
        </p>
      </div>
      <div className="grid grid-cols-[repeat(auto-fill,minmax(170px,1fr))] gap-x-2 gap-y-[10px]">
        {Array(60)
          .fill(0)
          .map((_, index) => {
            return <GridItem key={index} />;
          })}
      </div>

      <CollectionButton />
    </div>
  );
}

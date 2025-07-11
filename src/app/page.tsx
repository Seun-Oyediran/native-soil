import React from "react";
import { CollectionButton, GridItem } from "@/components/shared";

export default function Home() {
  return (
    <div className="pt-[5rem] pb-14">
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

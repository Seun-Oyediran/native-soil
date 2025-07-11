import React from "react";
import { AccesoriesItem } from "@/components/shared";

export default function Page() {
  return (
    <div className="pt-[65px] pb-14 flex flex-col">
      <div className="grid grid-cols-[repeat(auto-fill,minmax(275px,1fr))] gap-x-2 gap-y-[10px]">
        <AccesoriesItem />
        <AccesoriesItem />
        <AccesoriesItem />
        <AccesoriesItem />
      </div>
    </div>
  );
}

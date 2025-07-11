"use client";
import React, { useState } from "react";
import { collectionData } from "@/utils/static";

export function CollectionButton() {
  const [showCollection, setShowCollection] = useState(false);

  return (
    <div className="fixed bottom-[58px] left-[0] right-[0] flex flex-col gap-2 items-center pointer-events-none">
      {showCollection && (
        <div className="w-full bg-[black] px-4 py-6 max-w-[334px] pointer-events-auto">
          <div className="flex flex-col gap-4">
            <h3 className="font-medium text-xs leading-[21px] tracking-[-1.32px] text-[#6E6E6E]">
              catalogue
            </h3>

            <div className="flex flex-col gap-[2px]">
              <h4 className="font-medium text-xs leading-[21px] tracking-[-1.32px] text-white">
                all
              </h4>
              {collectionData.map((item) => {
                return (
                  <div
                    key={item.id}
                    className="flex items-center justify-between"
                  >
                    <p className="font-medium text-xs leading-[21px] tracking-[-1.32px] text-[#6E6E6E]">
                      {item?.name}
                    </p>

                    <p className="font-medium text-xs leading-[21px] tracking-[-1.32px] text-[#6E6E6E]">
                      {item?.pcs} pcs
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}
      <button
        type="button"
        className="bg-[#101010] font-normal text-xs leading-[16px] tracking-[-1.32px] text-white py-2 px-4 pointer-events-auto cursor-pointer"
        onClick={() => {
          setShowCollection((prev) => !prev);
        }}
      >
        Collection
      </button>
    </div>
  );
}

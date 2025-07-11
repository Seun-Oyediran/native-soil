"use client";
import React, { useState } from "react";
import Link from "next/link";
import { collectionsData } from "@/utils/static";
import { routes } from "@/routes";

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
              <Link href="/" onClick={() => setShowCollection(false)}>
                <h4 className="font-medium text-xs leading-[21px] tracking-[-1.32px] text-white cursor-pointer hover:text-[#CCCCCC] transition-colors">
                  all
                </h4>
              </Link>
              {collectionsData.map((collection) => {
                // Get the first piece of the collection
                const firstPiece = collection.pieces[0];
                return (
                  <Link
                    key={collection.id}
                    href={`${routes.art.path}/${collection.id}?pieceId=${firstPiece.id}`}
                    onClick={() => setShowCollection(false)}
                  >
                    <div className="flex items-center justify-between cursor-pointer hover:bg-[#1A1A1A] p-1 -m-1 rounded transition-colors">
                      <p className="font-medium text-xs leading-[21px] tracking-[-1.32px] text-[#6E6E6E] hover:text-[#AAAAAA] transition-colors">
                        {collection.collection_name}
                      </p>

                      <p className="font-medium text-xs leading-[21px] tracking-[-1.32px] text-[#6E6E6E] hover:text-[#AAAAAA] transition-colors">
                        {collection.no_of_pieces} pcs
                      </p>
                    </div>
                  </Link>
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

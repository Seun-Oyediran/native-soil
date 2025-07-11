import React from "react";
import { CollectionButton, GridItem } from "@/components/shared";
import { collectionsData } from "@/utils/static";

// Function to shuffle array
function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

export default function Home() {
  // Flatten all pieces from all collections
  const allPieces = collectionsData.flatMap((collection) =>
    collection.pieces.map((piece) => ({
      ...piece,
      collectionName: collection.collection_name,
      collectionId: collection.id,
    }))
  );

  // Randomize the pieces
  const randomizedPieces = shuffleArray(allPieces);

  return (
    <div className="pt-[5rem] pb-14">
      <div className="grid grid-cols-[repeat(auto-fill,minmax(170px,1fr))] gap-x-2 gap-y-[10px]">
        {randomizedPieces.map((piece, index) => {
          return (
            <GridItem
              key={`${piece.collectionId}-${piece.id}-${index}`}
              piece={piece}
            />
          );
        })}
      </div>

      <CollectionButton />
    </div>
  );
}

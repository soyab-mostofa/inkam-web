import Image from "next/image";
import React from "react";

const PhotoGrid = () => {
  return (
    <div className="hidden sm:grid sm:grid-cols-1 lg:grid-cols-3 sm:gap-4">
      {Array.from({ length: 8 }).map((_, index) => (
        <div className="relative w-full h-40">
          <Image
            src={`/about/frame-${index + 1}.png`}
            alt="carousel image"
            fill
            className="object-cover w-full aspect-square"
          />
        </div>
      ))}
    </div>
  );
};

export default PhotoGrid;

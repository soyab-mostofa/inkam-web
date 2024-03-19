import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

const ImageBox = ({ className }: { className?: string }) => {
  return (
    <div className={cn("relative h-72 w-full", className)}>
      <div>
        <Image
          src="/inkam-leaders.png"
          width={350}
          height={400}
          className="absolute right-40 top-11 z-20 rounded-xl shadow-2xl"
          alt="inkam leaders"
        />
      </div>
      <div>
        <Image
          src="/about-2.jpeg"
          width={270}
          height={400}
          className="absolute right-8 top-16 rounded-xl"
          alt="inkam leaders"
        />
      </div>
    </div>
  );
};

export default ImageBox;

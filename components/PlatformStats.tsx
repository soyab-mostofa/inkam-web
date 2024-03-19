import React from "react";
import SlotCounter from "react-slot-counter";
import { Card, CardContent, CardFooter } from "./ui/card";
import { cn } from "@/lib/utils";

const items = [
  {
    index: 0,
    count: "17000",
    suffix: "+",
    subheading: "Uddokta on platform",
  },
  {
    index: 1,
    count: "25",
    suffix: "million",
    subheading: "Inkam Earned",
  },
  {
    index: 2,
    count: "99",
    suffix: "%",
    subheading: "Thana covered",
  },
];

const PlatformStats = () => {
  return (
    <div className="container mx-auto py-12">
      <h2 className="text-3xl md:text-center font-bold uppercase pb-4">
        Our Platform Stats
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:flex-row justify-between">
        {items.map((item) => (
          <Card
            className={cn(
              "flex items-center flex-col flex-1 p-8 justify-center bg-gradient-to-r from-blue-800 to-indigo-900 text-white",
              item.index === 2 ? "sm:col-span-2 md:col-span-1 " : ""
            )}
          >
            <CardContent className="flex pb-0 flex-col items-center">
              <div>
                <SlotCounter
                  charClassName="font-semibold text-3xl tracking-tighter"
                  animateOnVisible
                  autoAnimationStart
                  duration={2}
                  startValue={0}
                  value={item.count}
                />
                <span className="ml-0.5">{item.suffix}</span>
              </div>
              <p className="text-center">{item.subheading}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default PlatformStats;

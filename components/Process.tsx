/* eslint-disable @next/next/no-img-element */
import { processApproach } from "@/data";
import React from "react";
import { Button } from "./ui/MovingBorders";

const Process = () => {
  return (
    <div className="pt-20 pb-56">
      <h1 className="heading">
        Mon <span className="text-purple">Approche</span>
      </h1>
      <div className="w-full mt-12 grid grid-cols-1 lg:grid-cols-3 gap-4">
        {processApproach.map((card) => (
          <Button
            key={card.id}
            duration={Math.floor(Math.random() * 10000) + 10000}
            borderRadius="1.75rem"
            className="flex-1 text-white border-neutral-200 dark:border-slate-800"
          >
            <div className="flex flex-col justify-center items-center px-6 py-8 lg:p-8 gap-2 lg:gap-8">
              <div className="h-[130px] flex flex-col items-center justify-center">
                <img
                  src={card.thumbnail}
                  alt={card.thumbnail}
                  className="lg:w-32 md:w-24 w-20 mb-4"
                />
              </div>
              <div className="">
                <h1 className="text-center text-xl md:text-[22px] font-bold">
                  {card.title}
                </h1>
                <p className="text-start text-white text-base font-medium mt-6">
                  {card.desc}
                </p>
              </div>
            </div>
            <div className="absolute left-4 top-4">
              <div className="text-xs font-semibold text-white inline-flex h-8 animate-shimmer items-center justify-center rounded-full border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                Phase {card.id}
              </div>
            </div>
          </Button>
        ))}
      </div>
    </div>
  );
};

export default Process;

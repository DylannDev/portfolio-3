/* eslint-disable @next/next/no-img-element */
import { cn } from "@/lib/utils";
import { PiStar, PiStarFill } from "react-icons/pi";

export const ReviewCard = ({
  img,
  name,
  title,
  body,
  stars,
}: {
  img: string;
  name: string;
  title: string;
  body: string;
  stars: number;
}) => {
  const MAX_STARS = 5;

  return (
    <figure
      className={cn(
        "relative w-[350px] cursor-pointer overflow-hidden rounded-xl border p-6 transition duration-300",
        "bg-slate-900/[0.8] border border-slate-800 backdrop-blur-xl flex flex-col gap-4"
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <img
          className="rounded-full border-2 border-purple-500"
          width="48"
          height="48"
          alt=""
          src={img}
        />
        <div className="flex flex-col gap-1">
          <figcaption className="text-base font-bold text-white">
            {name}
          </figcaption>
          <p className="text-xs font-light text-purple">{title}</p>
        </div>
      </div>
      <div className="flex items-center">
        {[...Array(MAX_STARS)].map((_, index) => (
          <PiStarFill
            key={index}
            className={`${index < stars ? "text-[#ff862f]" : "text-slate-600"}`}
          />
        ))}
      </div>
      <blockquote className="text-white">{body}</blockquote>
    </figure>
  );
};

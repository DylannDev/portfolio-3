/* eslint-disable @next/next/no-img-element */
import { cn } from "@/lib/utils";
import { capitalizeFirstLetter } from "@/utils/helpers";
import { PiStarFill } from "react-icons/pi";
import React, { useState } from "react";

export const ReviewCard = ({
  name,
  title,
  message,
  stars,
}: {
  name: string;
  title: string;
  message: string;
  stars: number;
}) => {
  const MAX_STARS = 5;
  const [imageError, setImageError] = useState(false);

  // Extraire les initiales
  const getInitials = (fullName: string) => {
    return fullName
      .split(" ")
      .map((word) => word[0]?.toUpperCase())
      .join("");
  };

  return (
    <figure
      className={cn(
        "relative w-full sm:w-[400px] cursor-pointer overflow-hidden rounded-2xl border py-8 px-6 transition duration-300",
        "bg-slate-900/[0.8] border border-slate-800 backdrop-blur-xl flex flex-col gap-4"
      )}
    >
      <div className="flex flex-row items-center gap-2">
        {imageError ? (
          <div className="rounded-full bg-black-100 border border-purple flex items-center justify-center w-14 h-14">
            <span className="text-white font-bold text-lg">
              {getInitials(name)}
            </span>
          </div>
        ) : (
          <img
            className="rounded-full border border-purple w-14 h-14"
            alt="client photo"
            src={`/${name}.jpg`}
            onError={() => setImageError(true)}
          />
        )}
        <div className="flex flex-col gap-1">
          <figcaption className="text-lg font-bold text-white capitalize">
            {name}
          </figcaption>
          <p className="text-sm font-light text-purple capitalize">{title}</p>
        </div>
      </div>
      <div className="flex items-center text-lg gap-1">
        {[...Array(MAX_STARS)].map((_, index) => (
          <PiStarFill
            key={index}
            className={`${index < stars ? "text-[#ff862f]" : "text-slate-600"}`}
          />
        ))}
      </div>
      <blockquote className="text-white">
        {capitalizeFirstLetter(message)}
      </blockquote>
    </figure>
  );
};

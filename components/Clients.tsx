"use client";

/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import Marquee from "./ui/marquee";
import { ReviewCard } from "./ui/ReviewCard";
import { fetchReviews } from "@/firebase/fetchReviews";

type Review = {
  id: string;
  name: string;
  title: string;
  message: string;
  stars: number;
};

const Clients = () => {
  const [reviews, setReviews] = useState<Review[]>([]);

  useEffect(() => {
    const getReviews = async () => {
      const reviewsData = await fetchReviews();
      setReviews(reviewsData);
    };

    getReviews();
  }, []);

  return (
    <div className="py-20" id="testimonials">
      <h1 className="heading">
        Quelques <span className="text-purple">témoignages</span> clients
      </h1>
      <div className="relative flex h-[400px] w-full flex-col items-center justify-center overflow-hidden">
        <Marquee pauseOnHover className="[--duration:20s]">
          {reviews.map((review) => (
            <ReviewCard
              key={review.id}
              name={review.name}
              title={review.title}
              message={review.message}
              stars={review.stars}
            />
          ))}
        </Marquee>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/5 bg-gradient-to-r from-black-100 to-black-100/0"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/5 bg-gradient-to-l from-black-100 to-black-100/0"></div>
      </div>
    </div>
  );
};

export default Clients;

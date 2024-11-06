"use client";

/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import Marquee from "./ui/marquee";
import { ReviewCard } from "./ui/ReviewCard";

// const firstRow = reviews.slice(0, reviews.length / 2);
// const secondRow = reviews.slice(reviews.length / 2);

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
    const fetchReviews = async () => {
      try {
        const response = await fetch("/api/getReviews");
        if (response.ok) {
          const data = await response.json();
          setReviews(data);
        } else {
          console.error("Erreur lors de la récupération des avis");
        }
      } catch (error) {
        console.error("Erreur de requête :", error);
      }
    };

    fetchReviews();
  }, []);
  return (
    <div className="py-20" id="testimonials">
      <h1 className="heading">
        Quelques <span className="text-purple">témoignages</span> de mes clients
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

"use client";

import React, { useEffect, useState } from "react";
import BackButton from "@/components/BackButton";
import { PiStarFill } from "react-icons/pi";
import { Button } from "@/components/ui/MovingBorders";
import { reviewsInputsConfig } from "@/data";
import MagicButton from "@/components/ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa";
import Lottie from "react-lottie";
import animationData from "@/data/confetti.json";
import { useRouter } from "next/navigation";
const INITIAL_FORM_DATA = {
  name: "",
  title: "",
  email: "",
  message: "",
  stars: 0,
};

const Testimonials = () => {
  const router = useRouter();
  const [formData, setFormData] = useState(INITIAL_FORM_DATA);
  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleStarChange = (stars: number) => {
    setFormData((prev) => ({
      ...prev,
      stars,
    }));
    if (error) setError(""); // Réinitialise l'erreur si une étoile est sélectionnée
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (formData.stars === 0) {
      setError("Veuillez sélectionner au moins 1 étoile.");
      return;
    }

    try {
      const response = await fetch("/api/submitReview", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData(INITIAL_FORM_DATA);
      } else {
        const errorData = await response.json();
        console.error("Submission error:", errorData.error);
        setError("Erreur lors de l'envoi de l'avis.");
      }
    } catch (err) {
      console.error("Request failed:", err);
      setError("Erreur lors de la soumission de l'avis.");
    }
  };

  // Redirection après 5 secondes une fois le formulaire soumis
  useEffect(() => {
    if (submitted) {
      const timer = setTimeout(() => {
        router.push("/");
      }, 7000);
      return () => clearTimeout(timer);
    }
  }, [submitted, router]);

  return (
    <div className="grid place-content-center grid-cols-1 gap-10 sm:grid-cols-none h-full mt-40 mb-40 relative z-10 w-full">
      <BackButton />
      {!submitted ? (
        <div>
          <h1 className="text-3xl md:text-5xl font-bold text-center mb-10">
            Donnez votre <span className="text-purple">avis</span>
          </h1>
          <Button
            duration={10000}
            borderRadius="1.75rem"
            className="text-white border-white/10 dark:border-slate-800"
            containerClassName="w-full sm:w-[600px]"
          >
            <form
              onSubmit={handleSubmit}
              className="w-full mx-auto p-6 rounded-lg shadow-md space-y-4"
            >
              <div className="flex flex-col gap-4 mb-10">
                {reviewsInputsConfig.map((input, index) =>
                  input.type === "textarea" ? (
                    <textarea
                      key={index}
                      name={input.name}
                      value={formData[input.name as keyof typeof formData]}
                      onChange={handleChange}
                      placeholder={input.placeholder}
                      rows={input.rows}
                      className="w-full p-3 rounded-lg bg-white/10 border border-white/10 placeholder-gray-400"
                      required
                    />
                  ) : (
                    <input
                      key={index}
                      type={input.type}
                      name={input.name}
                      value={formData[input.name as keyof typeof formData]}
                      onChange={handleChange}
                      placeholder={input.placeholder}
                      className="w-full p-3 rounded-lg bg-white/10 border border-white/10 placeholder-gray-400"
                      required
                    />
                  )
                )}
                <div className="flex flex-col justify-center items-center gap-2">
                  <span className="text-gray-300 text-base">
                    Notez votre expérience:
                  </span>
                  <div className="flex gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <PiStarFill
                        key={star}
                        onClick={() => handleStarChange(star)}
                        className={`cursor-pointer text-lg ${
                          formData.stars >= star
                            ? "text-[#ff862f]"
                            : "text-slate-600"
                        }`}
                      />
                    ))}
                  </div>
                  {error && (
                    <p className="text-red-500 text-sm mt-2">{error}</p>
                  )}
                </div>
              </div>
              <div className="flex justify-center">
                <MagicButton
                  title="Soumettre mon avis"
                  icon={<FaLocationArrow className="text-xs" />}
                  position="right"
                />
              </div>
            </form>
          </Button>
        </div>
      ) : (
        <div className="flex flex-col items-center relative">
          <div className="text-center text-2xl text-green-400 font-semibold mb-4">
            Merci pour votre avis !
          </div>

          <Lottie
            options={{
              loop: true,
              autoplay: true,
              animationData,
              rendererSettings: {
                preserveAspectRatio: "xMidYMid slice",
              },
            }}
            height={400}
            width={400}
          />
        </div>
      )}
    </div>
  );
};

export default Testimonials;

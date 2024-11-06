/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { Spotlight } from "./ui/Spotlight";
import { DotBackgroundDemo } from "./ui/DotBackgroundDemo";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import MagicButton from "./ui/MagicButton";
import { PiArrowRight } from "react-icons/pi";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="pb-20 pt-36">
      <div className="">
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="top-10 left-full h-[80vh] w-[50vw]"
          fill="purple"
        />
        <Spotlight className="top-28 left-80 h-[80vh] w-[50vw]" fill="blue" />
      </div>

      <DotBackgroundDemo />

      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <p className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
            Créateur d'Expériences Web Sur-Mesure
          </p>
          <TextGenerateEffect
            className="text-center text-[32px] md:text-5xl lg:text-6xl"
            words="Transformez vos idées en expériences web immersives"
          />
          <p className="text-center mb-8 text-sm lg:text-lg">
            Hello 👋🏻 ! Je suis Dylann, développeur front-end spécialisé en React
            et Next.js
          </p>
          <Link href="#projects">
            <MagicButton
              title="Découvrez mes projets"
              icon={<PiArrowRight />}
              position="right"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;

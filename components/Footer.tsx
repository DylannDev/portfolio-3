/* eslint-disable @next/next/no-img-element */
import React from "react";
import MagicButton from "./ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa";
import { socialMedia } from "@/data";
import { GridBackground } from "./ui/GridBackground";
import SocialMediaLinks from "./SocialMediaLinks";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="w-full pb-10 mb-12 md:mb-5 relative -z-1" id="contact">
      <div className="w-full absolute left-0 -bottom-72 min-h-96 ">
        <img
          src="/footer-grid.svg"
          alt="grid"
          className="w-full h-full opacity-50"
        />
      </div>
      <div className="relative z-10">
        <div className="flex flex-col items-center">
          <h1 className="heading lg:max-w-[45vw]">
            Envie de faire{" "}
            <span className="text-purple">décoller votre projet ?</span> 🚀
          </h1>
          <p className="text-white-200 md:mt-10 my-5 text-center ">
            Discutons dès maintenant de la façon dont je peux vous aider à
            atteindre vos objectifs.
          </p>
          <a href="mailto:d.xavero@hotmail.com">
            <MagicButton
              title="Contactez-moi"
              icon={<FaLocationArrow className="text-xs" />}
              position="right"
            />
          </a>
        </div>

        <div className="flex mt-16 md:flex-row flex-col-reverse justify-between items-center">
          <p className="md:text-base text-sm md:font-normal font-light mt-16 md:mt-0">
            Copyright © {year} | Dylann Xavero
          </p>
          <SocialMediaLinks />
        </div>
      </div>
    </footer>
  );
};

export default Footer;

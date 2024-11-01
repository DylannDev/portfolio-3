import { socialMedia } from "@/data";
import React from "react";

const SocialMediaLinks = () => {
  return (
    <div className="flex items-center md:gap-3 gap-6">
      {socialMedia.map((profile) => (
        <a
          href={profile.link}
          target="_blank"
          key={profile.id}
          className="text-white w-10 h-10 cursor-pointer flex items-center justify-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
        >
          {profile.icon}
        </a>
      ))}
    </div>
  );
};

export default SocialMediaLinks;

"use client";

import { FiExternalLink, FiGithub } from "react-icons/fi";

type ExternalLinksProps = {
  linkDemo: string;
  linkGithub: string;
  className?: string;
};

const ExternalLinks = ({
  linkDemo,
  linkGithub,
  className,
}: ExternalLinksProps) => {
  return (
    <div
      className={`flex items-center text-lg lg:text-base xl:text-lg ${className}`}
    >
      <a
        href={linkDemo !== "" ? linkDemo : undefined}
        onClick={(e) => {
          if (linkDemo === "") {
            e.preventDefault();
          }
        }}
        target="blank_"
        className={`flex justify-center items-center gap-1 ${
          linkDemo === ""
            ? "cursor-not-allowed text-gray-500"
            : "hover:underline underline-offset-4"
        }`}
      >
        <FiExternalLink className="ms-3" color="#CBACF9" />
        <p>Demo</p>
      </a>
      <a
        href={`https://github.com/DylannDev/${linkGithub}`}
        target="blank_"
        className="flex justify-center items-center gap-1 hover:underline underline-offset-4"
      >
        <FiGithub className="ms-3" color="#CBACF9" />
        <p>Github</p>
      </a>
    </div>
  );
};

export default ExternalLinks;

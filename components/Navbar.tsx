import React from "react";
import SocialMediaLinks from "./SocialMediaLinks";
import { FloatingNav } from "./ui/FloatingNav";
import { navItems } from "@/data";

const Navbar = () => {
  return (
    <div className="flex justify-end relative">
      <FloatingNav navItems={navItems} />
      <div className="absolute top-12 z-40 min-[900px]:flex hidden">
        <SocialMediaLinks />
      </div>
    </div>
  );
};

export default Navbar;

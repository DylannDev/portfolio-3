"use client";

import { useRouter } from "next/navigation";
import { PiArrowLeft } from "react-icons/pi";

export default function BackButton(): JSX.Element {
  const router = useRouter();

  return (
    <button
      className="flex items-center gap-1 hover:border-b-[1px] hover:border-purple pb-[2px] absolute z-[9] cursor-pointer lg:mt-20 mt-40 sm:mt-16  text-purple border-b-primary"
      onClick={() => router.push("/")}
    >
      <PiArrowLeft />
      <span>Retour</span>
    </button>
  );
}

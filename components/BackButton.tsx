"use client";

import { useRouter } from "next/navigation";
import { PiArrowLeft } from "react-icons/pi";

export default function BackButton(): JSX.Element {
  const router = useRouter();

  return (
    <button
      className="flex items-center gap-1 border-b-[1px] border-b-transparent hover:border-purple pb-[2px] cursor-pointer text-purple w-fit"
      onClick={() => router.push("/")}
    >
      <PiArrowLeft />
      <span>Retour</span>
    </button>
  );
}

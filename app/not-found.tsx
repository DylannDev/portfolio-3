/* eslint-disable react/no-unescaped-entities */
import BackButton from "@/components/BackButton";
import { PiSmileyXEyes } from "react-icons/pi";

export default function NotFound() {
  return (
    <div className="grid place-content-center h-[100dvh] pt-20">
      <BackButton />
      <div className="flex flex-col items-center gap-6">
        <PiSmileyXEyes className="text-red-500 text-5xl" />
        <h1 className="text-white text-4xl font-bold">
          404 - Page non trouvée.
        </h1>
        <p className="text-xl mt-4">L'URL est invalide.</p>
      </div>
    </div>
  );
}

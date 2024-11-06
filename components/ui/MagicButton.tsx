"use client";

type MagicButtonProps = {
  title: string;
  icon?: React.ReactNode;
  position?: "left" | "right";
  handleClick?: () => void;
  otherClasses?: string;
};

const MagicButton = ({
  title,
  icon,
  position,
  handleClick,
  otherClasses,
}: MagicButtonProps) => {
  return (
    <button
      className="relative inline-flex h-12 w-full md:w-60 overflow-hidden rounded-lg p-[1px] focus:outline-none cursor-pointer"
      onClick={handleClick}
    >
      <div className="absolute z-0 top-[-300%] left-[-300%] right-[-300%] bottom-[-300%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />

      <span
        className={`relative z-10 inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg
             bg-slate-950 px-7 text-sm font-medium text-white backdrop-blur-3xl gap-2 ${otherClasses}`}
      >
        {position === "left" && icon}
        {title}
        {position === "right" && icon}
      </span>
    </button>
  );
};

export default MagicButton;

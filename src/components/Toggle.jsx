import React from "react";

export default function Toggle({ currentPlan, setPlan }) {
  return (
    <div className="flex gap-4 items-center text-neutral-light font-bold">
      Annually
      {/* toggle btn */}
      <div
        className="relative h-6 w-12 primary-gradient rounded-full overflow-hidden group"
        onClick={() =>
          setPlan((prevState) => {
            if (prevState === "annually") {
              return "monthly";
            } else {
              return "annually";
            }
          })
        }
      >
        <div className="absolute inset-0 bg-white pointer-events-none bg-opacity-0 duration-200 ease-in-out group-hover:bg-opacity-30"></div>
        <div
          className={`aspect-square h-[84%] bg-white rounded-full absolute top-[9%] duration-200 ease-in-out ${
            currentPlan === "annually"
              ? "left-[calc(6%)]"
              : "left-[calc(6%+(100%-25px))]"
          }`}
        />
      </div>
      Monthly
    </div>
  );
}

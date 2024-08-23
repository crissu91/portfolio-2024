import React from "react";
import name from "../assets/cristina-gold.png";
import { HERO_CONTENT } from "../constants";
import profile_image from "../assets/cristina-profile.jpg";

export default function Hero() {
  return (
    <div className="border-b border-neutral-800 pb-10 md:pb-20 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center md:items-start gap-4">
            <img
              src={name}
              alt="Cristina Stefan name printed in gold"
              className="w-[500px] h-auto image-cover overflow-visible object-cover"
            />
            <span className="bg-gradient-to-r from-yellow-200 via-slate-300 to-yellow-500 bg-clip-text text-2xl md:text-4xl text-transparent tracking-tight">
              Full Stack Developer
            </span>

            <p className="my-2 md:py-6 max-w-xl text-lg text-balance">
              {HERO_CONTENT}
            </p>
          </div>
        </div>

        <div className="w-full lg:w-1/2 lg:px-8 mt-5 md:mt-0">
          <img
            src={profile_image}
            alt="Cristina Stefan in a blue shirt smiling at camera."
            className="aspect-square object-cover rounded-full"
          />
        </div>
      </div>
    </div>
  );
}

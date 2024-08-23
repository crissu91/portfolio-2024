import React from "react";
import aboutImg from "../assets/about.jpg";
import { ABOUT_TEXT } from "../constants";

export default function About() {
  return (
    <div className="border-b border-neutral-800 py-10 md:py-20 space-y-10">
      <h2 className="text-center text-4xl ">About me</h2>

      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="group flex items-center justify-center">
            <img
              src={aboutImg}
              alt="Cristina Stefan in a white top working on the computer."
              className="rounded-tl-[40px] rounded-br-[40px] scale-105 opacity-80 group-hover:opacity-100 group-hover:scale-100 transition-all ease-in-out duration-700"
            />
          </div>
        </div>

        <div className="w-full lg:w-1/2 py-8 md:px-8 my-auto">
          <p className="text-lg flex justify-center lg:justify-start text-balance">
            {ABOUT_TEXT}
          </p>
        </div>
      </div>
    </div>
  );
}

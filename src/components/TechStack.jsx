import React from "react";
import { RiReactjsLine, RiTailwindCssFill } from "react-icons/ri";
import { FaNodeJs } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";
import { IoLogoJavascript, IoLogoVue } from "react-icons/io5";
import { SiTypescript, SiJest, SiPhp, SiLaravel } from "react-icons/si";
import { TbBrandCss3 } from "react-icons/tb";

export default function TechStack() {
  return (
    <div className="border-b border-neutral-800 py-10 md:py-20 space-y-10 md:space-y-20">
      <h2 className="text-center text-4xl ">Tech Stack</h2>

      <div className="flex flex-wrap items-center justify-center gap-3 md:gap-6">
        <div className="rounded-2xl border border-neutral-800 p-4">
          <RiReactjsLine className="text-4xl md:text-7xl text-cyan-500" />
        </div>

        <div className="rounded-2xl border border-neutral-800 p-4">
          <FaNodeJs className="text-4xl md:text-7xl text-green-600" />
        </div>

        <div className="rounded-2xl border border-neutral-800 p-4">
          <BiLogoPostgresql className="text-4xl md:text-7xl text-cyan-700" />
        </div>

        <div className="rounded-2xl border border-neutral-800 p-4">
          <IoLogoJavascript className="text-4xl md:text-7xl text-yellow-500" />
        </div>

        <div className="rounded-2xl border border-neutral-800 p-4">
          <SiTypescript className="text-4xl md:text-7xl text-cyan-600" />
        </div>

        <div className="rounded-2xl border border-neutral-800 p-4">
          <SiPhp className="text-4xl md:text-7xl text-cyan-800" />
        </div>

        <div className="rounded-2xl border border-neutral-800 p-4">
          <SiLaravel className="text-4xl md:text-7xl text-red-700" />
        </div>

        <div className="rounded-2xl border border-neutral-800 p-4">
          <IoLogoVue className="text-4xl md:text-7xl text-green-600" />
        </div>

        <div className="rounded-2xl border border-neutral-800 p-4">
          <SiJest className="text-4xl md:text-7xl text-red-600" />
        </div>

        <div className="rounded-2xl border border-neutral-800 p-4">
          <TbBrandCss3 className="text-4xl md:text-7xl text-blue-600" />
        </div>

        <div className="rounded-2xl border border-neutral-800 p-4">
          <RiTailwindCssFill className="text-4xl md:text-7xl text-cyan-500" />
        </div>
      </div>
    </div>
  );
}

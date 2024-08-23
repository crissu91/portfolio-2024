import React from "react";
import { RiReactjsLine, RiTailwindCssFill } from "react-icons/ri";
import { FaNodeJs } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";
import { IoLogoJavascript, IoLogoVue } from "react-icons/io5";
import { SiTypescript, SiJest, SiPhp, SiLaravel } from "react-icons/si";
import { TbBrandCss3 } from "react-icons/tb";
import { motion } from "framer-motion";

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

export default function TechStack() {
  return (
    <div className="border-b border-neutral-800 py-10 md:py-20 space-y-10 md:space-y-20">
      <motion.h2
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ x: -200, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="text-center text-4xl "
      >
        Tech Stack
      </motion.h2>

      <motion.ul
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ x: -200, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.5, delay: 1 }}
        className="flex flex-wrap items-center justify-center gap-6"
      >
        <motion.li
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border border-neutral-800 p-4"
        >
          <RiReactjsLine className="text-4xl md:text-7xl text-cyan-500" />
        </motion.li>

        <motion.li
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border border-neutral-800 p-4"
        >
          <FaNodeJs className="text-4xl md:text-7xl text-green-600" />
        </motion.li>

        <motion.li
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border border-neutral-800 p-4"
        >
          <BiLogoPostgresql className="text-4xl md:text-7xl text-cyan-700" />
        </motion.li>

        <motion.li
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border border-neutral-800 p-4"
        >
          <IoLogoJavascript className="text-4xl md:text-7xl text-yellow-500" />
        </motion.li>

        <motion.li
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border border-neutral-800 p-4"
        >
          <SiTypescript className="text-4xl md:text-7xl text-cyan-600" />
        </motion.li>

        <motion.li
          variants={iconVariants(1.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border border-neutral-800 p-4"
        >
          <SiPhp className="text-4xl md:text-7xl text-cyan-800" />
        </motion.li>

        <motion.li
          variants={iconVariants(3)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border border-neutral-800 p-4"
        >
          <SiLaravel className="text-4xl md:text-7xl text-red-700" />
        </motion.li>

        <motion.li
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border border-neutral-800 p-4"
        >
          <IoLogoVue className="text-4xl md:text-7xl text-green-600" />
        </motion.li>

        <motion.li
          variants={iconVariants(1.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border border-neutral-800 p-4"
        >
          <SiJest className="text-4xl md:text-7xl text-red-600" />
        </motion.li>

        <motion.li
          variants={iconVariants(3.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border border-neutral-800 p-4"
        >
          <TbBrandCss3 className="text-4xl md:text-7xl text-blue-600" />
        </motion.li>

        <motion.li
          variants={iconVariants(3)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border border-neutral-800 p-4"
        >
          <RiTailwindCssFill className="text-4xl md:text-7xl text-cyan-500" />
        </motion.li>
      </motion.ul>
    </div>
  );
}

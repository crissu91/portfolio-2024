import React from "react";
import aboutImg from "../assets/about.jpg";
import { ABOUT_TEXT } from "../constants";
import { motion } from "framer-motion";

export default function About({ isVisible }) {
  return (
    <div className="border-b border-neutral-800 py-10 md:py-20 space-y-10 md:space-y-20">
      <motion.h2
        initial={{ x: -200, opacity: 0 }}
        animate={isVisible ? { x: 0, opacity: 1 } : { x: -200, opacity: 0 }}
        transition={{ duration: 1, delay: 0.7 }}
        className="text-center text-4xl "
      >
        About me
      </motion.h2>

      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2 lg:p-8">
          <motion.div
            initial={{ x: -200, opacity: 0 }}
            animate={isVisible ? { x: 0, opacity: 1 } : { x: -200, opacity: 0 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="group flex items-center justify-center"
          >
            <img
              src={aboutImg}
              alt="Cristina Stefan in a white top working on the computer."
              className="aspect-square object-cover rounded-tl-[40px] rounded-br-[40px] scale-105 opacity-80 group-hover:opacity-100 group-hover:scale-100 transition-all ease-in-out duration-700 overflow-hidden"
            />
          </motion.div>
        </div>

        <motion.div
          initial={{ x: 200, opacity: 0 }}
          animate={isVisible ? { x: 0, opacity: 1 } : { x: 200, opacity: 0 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="w-full lg:w-1/2 py-8 lg:px-8 my-auto"
        >
          <p className="text-lg flex justify-center lg:justify-start text-balance">
            {ABOUT_TEXT}
          </p>
        </motion.div>
      </div>
    </div>
  );
}

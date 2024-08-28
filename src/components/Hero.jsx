import React from "react";
import name from "../assets/cristina-gold.png";
import { HERO_CONTENT } from "../constants";
import profile_image from "../assets/cristina-profile.jpg";
import { motion } from "framer-motion";

const container = (delay) => ({
  hidden: { x: -200, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 1, delay: delay },
  },
});

export default function Hero({ isVisible }) {
  return (
    <div className="border-b border-neutral-800 pb-10 md:pb-20 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center md:items-start gap-4">
            <motion.img
              variants={container(1)}
              initial="hidden"
              animate={isVisible ? "visible" : "hidden"}
              src={name}
              alt="Cristina Stefan name printed in gold"
              className="w-[500px] h-auto image-cover overflow-visible object-cover"
            />

            <motion.span
              variants={container(1.5)}
              initial="hidden"
              animate={isVisible ? "visible" : "hidden"}
              className="bg-gradient-to-r from-yellow-200 via-slate-300 to-yellow-500 bg-clip-text text-2xl md:text-4xl text-transparent tracking-tight"
            >
              Full Stack Developer
            </motion.span>

            <motion.p
              variants={container(2)}
              initial="hidden"
              animate={isVisible ? "visible" : "hidden"}
              className="my-2 md:py-6 max-w-xl text-lg text-balance"
            >
              {HERO_CONTENT}
            </motion.p>
          </div>
        </div>

        <div className="w-full lg:w-1/2 lg:px-8 mt-5 md:mt-0">
          <motion.img
            initial={{ x: 100, opacity: 0 }}
            animate={isVisible ? { x: 0, opacity: 1 } : { x: 100, opacity: 0 }}
            transition={{ duration: 1, delay: 1 }}
            src={profile_image}
            alt="Cristina Stefan in a blue shirt smiling at camera."
            className="aspect-square object-cover rounded-full"
          />
        </div>
      </div>
    </div>
  );
}

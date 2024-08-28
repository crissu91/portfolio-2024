import React, { useState } from "react";
import { PROJECTS } from "../constants";
import { motion } from "framer-motion";

export default function Projects({ isVisible }) {
  const [showMore, setShowMore] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    setShowMore(!showMore);
  };

  return (
    <div className="border-b border-neutral-800 py-10 md:py-20 space-y-10 md:space-y-20 flex flex-col items-center justify-center">
      <motion.h2
        animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -200 }}
        transition={{ duration: 1 }}
        className="text-center text-4xl "
      >
        Projects
      </motion.h2>

      <ul className="flex flex-col space-y-16">
        {PROJECTS.map((project, index) => (
          <li
            key={index}
            className={`grid md:grid-cols-3 gap-8 lg:gap-16 ${
              index > 2 && !showMore
                ? "hidden opacity-0"
                : "opacity-100 transition-opacity duration-500 ease-linear"
            }`}
          >
            <motion.div
              animate={
                isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -200 }
              }
              transition={{ duration: 1 }}
              className="group md:col-span-1"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full aspect-square object-cover rounded-xl scale-105 opacity-80 group-hover:opacity-100 group-hover:scale-100 transition-all ease-in-out duration-700"
              />
            </motion.div>

            <motion.div
              animate={
                isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: 200 }
              }
              transition={{ duration: 1 }}
              className="md:col-span-2"
            >
              <h3 className="text-3xl">{project.title}</h3>

              {project.associated_with ? (
                <h4 className="text-md mt-3 lg:mt-6">
                  <span className="text-yellow-600">Associated with: </span>
                  {project.associated_with}
                </h4>
              ) : null}

              <p className="text-neutral-400 max-w-[28em] mt-1 lg:mt-2">
                {project.description}
              </p>

              <ul className="flex gap-2 mt-3 lg:mt-6">
                {project.technologies.map((tech, index) => (
                  <li
                    key={index}
                    className="rounded-md bg-neutral-900 px-2 py-1 text-sm font-medium text-yellow-600"
                  >
                    {tech}
                  </li>
                ))}
              </ul>

              <a
                className="border border-neutral-600 mt-3 lg:mt-6 block w-fit bg-gradient-to-r from-yellow-200 via-slate-300 to-yellow-500 rounded-full px-[12px] py-[3px] bg-clip-text text-transparent hover:text-yellow-950 hover:bg-clip-border font-semibold hover:bg-gradient-to-l hover:scale-110 transition-all ease-in-out duration-700"
                href={project.link}
                target="_blank"
              >
                Visit Website
              </a>
            </motion.div>
          </li>
        ))}
      </ul>

      <motion.div
        animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: 200 }}
        transition={{ duration: 1 }}
        className="group block mt-3 lg:mt-6"
      >
        <button
          onClick={handleClick}
          className="w-fit bg-gradient-to-r from-yellow-200 via-slate-300 to-yellow-500 rounded-full px-5 py-1 text-yellow-950 font-semibold group-hover:bg-gradient-to-l group-hover:scale-110 transition-all ease-in-out duration-700"
        >
          {showMore ? "Show less" : "Show more"}
        </button>
      </motion.div>
    </div>
  );
}

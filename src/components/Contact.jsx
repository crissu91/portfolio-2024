import React from "react";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Contact({ isVisible }) {
  console.log({ Contacts: isVisible });

  return (
    <div className="border-b border-neutral-800 py-10 md:py-20 space-y-10 flex flex-col justify-center items-center">
      <motion.h2
        initial={{ x: -400, opacity: 0 }}
        animate={isVisible ? { x: 0, opacity: 1 } : { x: -400, opacity: 0 }}
        transition={{ duration: 1 }}
        className="text-center text-4xl "
      >
        Get in touch
      </motion.h2>

      <motion.p
        initial={{ x: 400, opacity: 0 }}
        animate={isVisible ? { x: 0, opacity: 1 } : { x: 400, opacity: 0 }}
        transition={{ duration: 1 }}
        className="text-neutral-400 text-xl max-w-[18em]"
      >
        I'm excited to connect with you for project collaborations, job offers,
        or any other exciting opportunities.
        <br />
        Please don't hesitate to reach out.
      </motion.p>

      <motion.div
        initial={{ x: -400, opacity: 0 }}
        animate={isVisible ? { x: 0, opacity: 1 } : { x: -400, opacity: 0 }}
        transition={{ duration: 1 }}
        className="text-yellow-600 text-3xl flex gap-8"
      >
        <a href="mailto:cristinaf.stefan@gmail.com">
          <MdOutlineAlternateEmail />
        </a>

        <a href="https://www.linkedin.com/in/cristinastefan91/" target="_blank">
          <FaLinkedin />
        </a>

        <a href="https://github.com/crissu91" target="_blank">
          <FaGithub />
        </a>
      </motion.div>
    </div>
  );
}

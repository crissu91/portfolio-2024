import React from "react";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { FaLinkedin, FaGithub } from "react-icons/fa";

export default function Contact() {
  return (
    <div className="border-b border-neutral-800 py-10 md:py-20 space-y-10 flex flex-col justify-center items-center">
      <h2 className="text-center text-4xl ">Get in touch</h2>

      <p className="text-neutral-400 text-xl max-w-[18em]">
        I'm excited to connect with you for project collaborations, job offers,
        or any other exciting opportunities.
        <br />
        Please don't hesitate to reach out.
      </p>
      <div className="text-yellow-600 text-3xl flex gap-8">
        <a href="mailto:cristinaf.stefan@gmail.com">
          <MdOutlineAlternateEmail />
        </a>

        <a href="https://www.linkedin.com/in/cristinastefan91/" target="_blank">
          <FaLinkedin />
        </a>

        <a href="https://github.com/crissu91" target="_blank">
          <FaGithub />
        </a>
      </div>
    </div>
  );
}

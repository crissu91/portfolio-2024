import React from "react";
import logo from "../assets/cristina-logo.png";
import { FaLinkedin, FaGithub } from "react-icons/fa";

export default function NavBar() {
  return (
    <nav className="mb-28 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <img
          src={logo}
          alt="Cristina Stefan name printed in gold"
          className="w-fit h-[50px] md:h-[75px] transition-opacity"
        />
      </div>

      <div className="m-8 flex items-center gap-4 justify-center text-2xl">
        <a href="https://www.linkedin.com/in/cristinastefan91/" target="_blank">
          <FaLinkedin />
        </a>

        <a href="https://github.com/crissu91" target="_blank">
          <FaGithub />
        </a>
      </div>
    </nav>
  );
}

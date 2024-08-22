import React from "react";
import logo from "../assets/cristina-logo.png";
import logo_short from "../assets/cristina-logo-short.png";
import { FaLinkedin, FaGithub } from "react-icons/fa";

export default function NavBar() {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <img
          src={logo}
          alt="Cristina Stefan name printed in gold"
          className="hidden md:block w-[300px] h-auto transition-opacity"
        />
        <img
          src={logo_short}
          alt="Cristina Stefan name printed in gold"
          className="md:hidden w-[150px] h-auto"
        />
      </div>

      <div className="m-8 flex items-center gap-4 justify-center text-2xl">
        <FaLinkedin />
        <FaGithub />
      </div>
    </nav>
  );
}

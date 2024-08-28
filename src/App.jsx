import React, { lazy, Suspense, useState } from "react";
import LazyLoad from "./components/LazyLoad";

const NavBar = lazy(() => import("./components/NavBar"));
const Hero = lazy(() => import("./components/Hero"));
const About = lazy(() => import("./components/About"));
const TechStack = lazy(() => import("./components/TechStack"));
const Projects = lazy(() => import("./components/Projects"));
const Contact = lazy(() => import("./components/Contact"));

function App() {
  return (
    <div className="overflow-x-clip text-neutral-200 antialiased selection:bg-yellow-300 selection:text-yellow-900">
      <div className="fixed top-0 -z-10 h-full w-full">
        <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      </div>

      <div className="container mx-auto px-10 md:px-20">
        <Suspense fallback={<div>Loading...</div>}>
          <NavBar />

          <LazyLoad>
            <Hero />
          </LazyLoad>

          <LazyLoad>
            <About />
          </LazyLoad>

          <LazyLoad>
            <TechStack />
          </LazyLoad>

          <LazyLoad>
            <Projects />
          </LazyLoad>

          <LazyLoad>
            <Contact />
          </LazyLoad>
        </Suspense>
      </div>
    </div>
  );
}

export default App;

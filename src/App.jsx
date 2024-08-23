import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import About from "./components/About";
import TechStack from "./components/TechStack";
import Projects from "./components/Projects";

function App() {
  return (
    <div className="overflow-x-clip text-neutral-200 antialiased selection:bg-yellow-300 selection:text-yellow-900">
      <div className="fixed top-0 -z-10 h-full w-full">
        <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      </div>

      <div className="container mx-auto px-10 md:px-20">
        <NavBar />
        <Hero />
        <About />
        <TechStack />
        <Projects />
      </div>
    </div>
  );
}

export default App;

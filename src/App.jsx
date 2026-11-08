
import React, { useEffect } from "react";

import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  useEffect(() => {
    const handleSwarmToggle = () => {
      if (window.__swarmline) {
        window.__swarmline.toggle();
        return;
      }

      const existingScript = document.querySelector(
        'script[data-swarmline-loader]'
      );

      if (existingScript) return;

      const script = document.createElement("script");
      script.src = "/swarmline.js";
      script.async = true;
      script.dataset.swarmlineLoader = "true";

      script.onerror = () => {
        console.error("Unable to load Swarmline animation.");
        script.remove();
      };

      document.body.appendChild(script);
    };

    window.addEventListener("swarmline:toggle", handleSwarmToggle);

    return () => {
      window.removeEventListener("swarmline:toggle", handleSwarmToggle);
    };
  }, []);

  return (
    <>
      <Header />

      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>

      <Footer />
    </>
  );
}

export default App;

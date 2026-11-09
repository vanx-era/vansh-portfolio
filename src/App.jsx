import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import About from "./components/About";
import Experience from "./components/Experience";
import Highlights from "./components/Highlights";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import SwarmMotion from "./components/SwarmMotion";

function App() {
  return (
    <>
      <SwarmMotion />
      <Header />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Experience />
        <Highlights />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
export default App;
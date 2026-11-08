import React from "react";
import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight, FlaskConical, Microscope, ChartNoAxesCombined } from "lucide-react";
import { siteConfig } from "../config/site";

const portrait = "https://raw.githubusercontent.com/vanx-era/vansh-portfolio/23ed8aea2ee09a2a17fe72e93aba30eb65055464/Bg%20Remove.png";

function Hero() {
  const { identity } = siteConfig;
  return (
    <section className="hero" id="home">
      <div className="hero-grid container">
        <motion.div className="hero-copy" initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.75, ease: "easeOut" }}>
          <div className="eyebrow"><span className="status-dot" /> {identity.availability}</div>
          <p className="hero-kicker">PORTFOLIO / 2026—27</p>
          <h1>SCIENCE<br />WITH A<br /><span>NEW</span> PERSPECTIVE<span className="hero-period">.</span></h1>
          <div className="hero-bottom">
            <div>
              <p className="hero-role">{identity.profession} <span>— {identity.location}</span></p>
              <p className="hero-intro">{identity.intro}</p>
            </div>
            <div className="hero-actions">
              <a className="button button-primary" href="#projects">Explore my work <ArrowUpRight size={17} /></a>
              <a className="text-link" href="#about">Discover my approach <ArrowDown size={15} /></a>
            </div>
          </div>
        </motion.div>
        <motion.aside className="hero-visual portrait-visual" initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.9, delay: 0.15 }} aria-label="Portrait of Vansh Gupta and areas of interest">
          <div className="visual-topline"><span>PHARMACY × TECHNOLOGY</span><span>01 / 03</span></div>
          <div className="portrait-glow" />
          <img className="hero-portrait" src={portrait} alt="Vansh Gupta" fetchPriority="high" />
          <div className="portrait-caption"><span className="portrait-name">VANSH GUPTA</span><span>PHARMACEUTICAL SCIENCES</span></div>
          <div className="visual-item visual-item-one"><FlaskConical size={17} /><span>Drug development</span></div>
          <div className="visual-item visual-item-two"><Microscope size={17} /><span>Research & formulation</span></div>
          <div className="visual-item visual-item-three"><ChartNoAxesCombined size={17} /><span>Data & analytics</span></div>
          <div className="visual-foot"><span>CURIOUS BY DESIGN</span><span>MUMBAI, INDIA</span></div>
        </motion.aside>
      </div>
      <a href="#about" className="scroll-cue container"><span>SCROLL TO EXPLORE</span><ArrowDown size={15} /></a>
    </section>
  );
}
export default Hero;

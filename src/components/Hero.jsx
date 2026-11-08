import React from "react";
import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight, FlaskConical, Microscope, ChartNoAxesCombined } from "lucide-react";
import { siteConfig } from "../config/site";

function Hero() {
  const { identity } = siteConfig;

  return (
    <section className="hero" id="home">
      <div className="hero-grid container">
        <motion.div
          className="hero-copy"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: "easeOut" }}
        >
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

        <motion.aside
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.15 }}
          aria-label="Areas of interest"
        >
          <div className="visual-topline"><span>AREAS OF INTEREST</span><span>01 / 03</span></div>
          <div className="orbit orbit-one" /><div className="orbit orbit-two" />
          <div className="visual-core"><span>VG</span><small>PHARMA × TECHNOLOGY</small></div>
          <div className="visual-item visual-item-one"><FlaskConical size={19} /><span>Drug development</span></div>
          <div className="visual-item visual-item-two"><Microscope size={19} /><span>Research & formulation</span></div>
          <div className="visual-item visual-item-three"><ChartNoAxesCombined size={19} /><span>Data & analytics</span></div>
          <div className="visual-foot"><span>CURIOUS BY DESIGN</span><span>MUMBAI, INDIA</span></div>
        </motion.aside>
      </div>
      <a href="#about" className="scroll-cue container"><span>SCROLL TO EXPLORE</span><ArrowDown size={15} /></a>
    </section>
  );
}

export default Hero;

import React from "react";
import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { siteConfig } from "../config/site";

function Hero() {
  const { identity } = siteConfig;

  return (
    <section className="hero" id="home">
      <div className="container hero-container">

        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="hero-status">
            <span className="status-dot"></span>
            {identity.availability}
          </div>

          <p className="hero-eyebrow">
            HELLO, I'M {identity.displayName.toUpperCase()}
          </p>

          <h1 className="hero-title">
            EXPLORING
            <br />
            THE FUTURE
            <br />
            OF <span className="accent">PHARMA.</span>
          </h1>

          <div className="hero-bottom">
            <div className="hero-description">
              <h2>{identity.profession}</h2>
              <p>{identity.intro}</p>
              <span className="hero-location">
                {identity.location}
              </span>
            </div>

            <div className="hero-actions">
              <a href="#projects" className="btn btn-primary">
                Explore My Work
                <ArrowUpRight size={18} />
              </a>

              <a href="#about" className="btn btn-outline">
                More About Me
              </a>
            </div>
          </div>
        </motion.div>

        <a href="#about" className="hero-scroll">
          <span>SCROLL TO EXPLORE</span>
          <ArrowDown size={17} />
        </a>

        <div className="hero-index">
          PORTFOLIO — 2026 / 2027
        </div>

      </div>
    </section>
  );
}

export default Hero;

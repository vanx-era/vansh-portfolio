import React from "react";
import { motion } from "framer-motion";
import { ArrowDown, FlaskConical, Microscope, ChartNoAxesCombined } from "lucide-react";
import { siteConfig } from "../config/site";

const portrait = "https://raw.githubusercontent.com/vanx-era/vansh-portfolio/23ed8aea2ee09a2a17fe72e93aba30eb65055464/Bg%20Remove.png";

function Hero() {
  const { identity } = siteConfig;
  return (
    <section className="hero hero-editorial" id="home">
      <div className="container hero-editorial-inner">
        <div className="hero-meta-row">
          <div><span className="hero-red-label">PHARMACEUTICAL SCIENCES</span><span className="hero-meta-sub">RESEARCH · DEVELOPMENT · TECHNOLOGY</span></div>
          <div className="hero-availability"><span className="status-dot" />{identity.availability}</div>
        </div>
        <div className="hero-stage">
          <div className="hero-name-backdrop" aria-hidden="true">PORTFOLIO</div>
          <img className="hero-portrait hero-portrait-center" src={portrait} alt="Portrait of Vansh Gupta" fetchPriority="high" />
          <motion.div className="hero-editorial-copy" initial={{opacity:0,x:-24}} animate={{opacity:1,x:0}} transition={{duration:0.7,delay:0.15}}>
            <p className="hero-script">Hello, I'm</p>
            <h1>VANSH<br/>GUPTA</h1>
            <p className="hero-role-editorial">B.PHARM STUDENT<br/><strong>PHARMACEUTICAL R&D</strong></p>
            <p className="hero-intro-editorial">{identity.intro}</p>
            <a className="button button-primary" href="#projects">Explore my work <ArrowDown size={16}/></a>
            <p className="hero-location">⌖ &nbsp; MUMBAI, INDIA</p>
          </motion.div>
          <motion.aside className="hero-side-notes" initial={{opacity:0,x:20}} animate={{opacity:1,x:0}} transition={{duration:0.7,delay:0.3}}>
            <div className="hero-purpose"><span className="hero-star">✳</span><p>Curiosity meets<br/>purpose.</p></div>
            <div className="hero-focus"><FlaskConical/><span>Drug development</span></div>
            <div className="hero-focus"><Microscope/><span>Research & formulation</span></div>
            <div className="hero-focus"><ChartNoAxesCombined/><span>Data & analytics</span></div>
          </motion.aside>
        </div>
        <div className="hero-bottomline"><span>INDEPENDENT THINKING. EVIDENCE-LED WORK.</span><a href="#projects">SCROLL TO EXPLORE <ArrowDown size={14}/></a><span>PORTFOLIO / 2026—27</span></div>
      </div>
    </section>
  );
}
export default Hero;
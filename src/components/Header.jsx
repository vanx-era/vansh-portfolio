import React, { useEffect, useState } from "react";
import { Menu, X, ArrowUpRight, Sparkles } from "lucide-react";

const links = [["Work", "#projects"], ["About", "#about"], ["Journey", "#experience"], ["Contact", "#contact"]];

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [motionActive, setMotionActive] = useState(true);
  useEffect(() => {
    const sync = (event) => setMotionActive(Boolean(event.detail?.active));
    window.addEventListener("swarmline:state", sync);
    return () => window.removeEventListener("swarmline:state", sync);
  }, []);
  const toggleMotion = () => {
    const next = !motionActive;
    setMotionActive(next);
    window.dispatchEvent(new CustomEvent("swarmline:toggle", { detail: { active: next } }));
    setMenuOpen(false);
  };
  const closeMenu = () => setMenuOpen(false);
  return (
    <header className="site-header">
      <div className="header-inner container">
        <a href="#home" className="logo" onClick={closeMenu} aria-label="Vansh Gupta, home">VG<span>.</span></a>
        <button className="menu-toggle" type="button" onClick={() => setMenuOpen((open) => !open)} aria-label={menuOpen ? "Close navigation" : "Open navigation"} aria-expanded={menuOpen}>{menuOpen ? <X size={22}/> : <Menu size={22}/>}</button>
        <nav className={menuOpen ? "navigation open" : "navigation"} aria-label="Main navigation">
          {links.map(([label, href]) => <a key={href} href={href} onClick={closeMenu}>{label}</a>)}
          <button type="button" className={motionActive ? "motion-toggle active" : "motion-toggle"} onClick={toggleMotion} aria-pressed={motionActive} title="Toggle the multi-cursor motion experience"><Sparkles size={15}/>{motionActive ? "Motion on" : "Motion off"}</button>
          <a className="header-contact" href="#contact" onClick={closeMenu}>Let's talk <ArrowUpRight size={15}/></a>
        </nav>
      </div>
    </header>
  );
}
export default Header;
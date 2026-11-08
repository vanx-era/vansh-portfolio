import React, { useState } from "react";
import { Menu, X, ArrowUpRight, Sparkles } from "lucide-react";
import { siteConfig } from "../config/site";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [motionActive, setMotionActive] = useState(false);

  const navigation = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" }
  ];

  const closeMenu = () => setMenuOpen(false);

  const toggleMotion = () => {
    setMotionActive((previous) => !previous);
    window.dispatchEvent(new Event("swarmline:toggle"));
    closeMenu();
  };

  return (
    <header className="site-header">
      <div className="header-inner container">

        <a href="#home" className="logo" onClick={closeMenu}>
          {siteConfig.identity.displayName}
          <span>.</span>
        </a>

        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <nav className={menuOpen ? "navigation open" : "navigation"}>
          {navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={closeMenu}
            >
              {item.label}
            </a>
          ))}

          <button
            type="button"
            className={`motion-toggle ${motionActive ? "active" : ""}`}
            onClick={toggleMotion}
            aria-pressed={motionActive}
          >
            <Sparkles size={16} />
            Motion
          </button>

          <a
            href="#contact"
            className="header-contact"
            onClick={closeMenu}
          >
            Let's Connect <ArrowUpRight size={16} />
          </a>
        </nav>

      </div>
    </header>
  );
}

export default Header;

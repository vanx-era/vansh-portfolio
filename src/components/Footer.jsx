import React from "react";
import { ArrowUpRight } from "lucide-react";
import { siteConfig } from "../config/site";

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <a className="footer-mark" href="#home">VANX<span>.</span></a>
        <p>Built with curiosity, code and a passion for pharmaceutical innovation</p>
        <a className="back-top" href="#home">Back to top <ArrowUpRight size={15} /></a>
        <small>© {new Date().getFullYear()} {siteConfig.identity.fullName}. All rights reserved</small>
      </div>
    </footer>
  );
}

export default Footer;
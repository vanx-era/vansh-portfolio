import React from "react";
import { siteConfig } from "../config/site";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <p>
          © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
        </p>

        <p>Built with React & passion for pharmaceutical innovation.</p>
      </div>
    </footer>
  );
};

export default Footer;
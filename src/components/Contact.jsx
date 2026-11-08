import React from "react";
import { siteConfig } from "../config/site";

const Contact = () => {
  return (
    <section id="contact" className="contact section">
      <div className="container">
        <h2>Let's Connect</h2>

        <p>
          I am open to connecting with professionals, researchers, and
          organisations working in pharmaceutical sciences, drug development,
          and healthcare innovation.
        </p>

        <div className="contact-links">
          <a href={`mailto:${siteConfig.email}`}>
            Email Me
          </a>

          <a
            href={siteConfig.linkedin}
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
import React from "react";
import { ArrowUpRight, Mail, Linkedin, Github } from "lucide-react";
import { siteConfig } from "../config/site";

function Contact() {
  const { contact } = siteConfig;
  const socials = [
    { label: "LinkedIn", href: contact.linkedin, icon: Linkedin },
    { label: "GitHub", href: contact.github, icon: Github }
  ].filter((item) => item.href);

  return (
    <section id="contact" className="section contact-section">
      <div className="container contact-inner">
        <div className="section-topline"><span>06 / CONTACT</span><span>LET'S MAKE A CONNECTION</span></div>
        <p className="section-label">HAVE AN IDEA OR AN OPPORTUNITY?</p>
        <h2>Let's start<br /><em>a conversation.</em></h2>
        <div className="contact-bottom">
          <p>I'm always interested in connecting with people working across pharmaceutical sciences, research, drug development and healthcare innovation.</p>
          <div className="contact-actions">
            <a className="button button-primary" href={`mailto:${contact.email}`}><Mail size={17} /> {contact.email} <ArrowUpRight size={16} /></a>
            <div className="social-links">{socials.map(({ label, href, icon: Icon }) => <a href={href} key={label} target="_blank" rel="noreferrer"><Icon size={17} /> {label}</a>)}</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
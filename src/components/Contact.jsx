import React from "react";
import { ArrowUpRight, Mail, Linkedin, Github, MapPin } from "lucide-react";
import { siteConfig } from "../config/site";

function Contact() {
  const { contact } = siteConfig;
  const socials = [
    { label: "LinkedIn", href: contact.linkedin, icon: Linkedin },
    { label: "GitHub", href: contact.github, icon: Github }
  ].filter((item) => item.href);
  return (
    <section id="contact" className="section contact-section contact-editorial">
      <div className="container">
        <div className="section-topline"><span>06 / THE NEXT STEP</span><span>OPEN TO MEANINGFUL CONNECTIONS</span></div>
        <div className="contact-editorial-grid">
          <div className="contact-editorial-heading">
            <p className="section-label">HAVE A QUESTION, IDEA OR OPPORTUNITY?</p>
            <h2>LET'S<br/><em>CONNECT.</em></h2>
            <p className="contact-intro">Good work begins with a conversation. I'm keen to connect with people across pharmaceutical sciences, research, drug development and healthcare innovation.</p>
            <a className="contact-mail-link" href={`mailto:${contact.email}`}>Start a conversation <ArrowUpRight size={17}/></a>
          </div>
          <div className="contact-link-column">
            <p className="contact-column-label">FIND ME HERE</p>
            <a className="contact-link-row" href={`mailto:${contact.email}`}><span className="contact-link-icon"><Mail/></span><span><small>EMAIL</small><strong>{contact.email}</strong></span><ArrowUpRight/></a>
            {socials.map(({label,href,icon:Icon}) => <a className="contact-link-row" href={href} key={label} target="_blank" rel="noreferrer"><span className="contact-link-icon"><Icon/></span><span><small>{label.toUpperCase()}</small><strong>Connect on {label}</strong></span><ArrowUpRight/></a>)}
            <div className="contact-link-row contact-location"><span className="contact-link-icon"><MapPin/></span><span><small>BASED IN</small><strong>Mumbai, India</strong></span></div>
          </div>
          <aside className="contact-aside">
            <span className="contact-aside-index">VG. / 2026—27</span>
            <div className="contact-aside-mark">VG<span>.</span></div>
            <p>Pharmaceutical sciences.<br/>A curious mind.<br/>A research-led approach.</p>
            <span className="contact-aside-bottom">LET'S BUILD BETTER IDEAS.</span>
          </aside>
        </div>
      </div>
    </section>
  );
}
export default Contact;
import React from "react";
import { ArrowUpRight, Mail, Linkedin, Github, MapPin, Instagram, Phone } from "lucide-react";
import { siteConfig } from "../config/site";

function Contact() {
  const { contact } = siteConfig;
  const links = [
    { label: "PHONE / WHATSAPP", value: contact.phone, href: contact.whatsapp, icon: Phone },
    { label: "INSTAGRAM", value: contact.instagramHandle, href: contact.instagram, icon: Instagram },
    { label: "GITHUB", value: contact.githubHandle, href: contact.github, icon: Github },
    { label: "LINKEDIN", value: contact.linkedinHandle, href: contact.linkedin, icon: Linkedin },
    { label: "EMAIL", value: contact.email, href: `mailto:${contact.email}`, icon: Mail }
  ];
  return (
    <section id="contact" className="section contact-section contact-editorial">
      <div className="container">
        <div className="section-topline"><span>06 / THE NEXT STEP</span><span>OPEN TO MEANINGFUL CONNECTIONS</span></div>
        <div className="contact-editorial-grid">
          <div className="contact-editorial-heading">
            <p className="section-label">HAVE A QUESTION, IDEA OR OPPORTUNITY?</p>
            <h2>LET'S<br/><em>CONNECT.</em></h2>
            <p className="contact-intro">Good work begins with a conversation. I'm keen to connect with people across pharmaceutical sciences, research, drug development and healthcare innovation.</p>
            <a className="contact-mail-link" href={contact.whatsapp} target="_blank" rel="noreferrer">Message me on WhatsApp <ArrowUpRight size={17}/></a>
          </div>
          <div className="contact-link-column">
            <p className="contact-column-label">FIND ME HERE</p>
            {links.map(({label,value,href,icon:Icon}) => <a className="contact-link-row" href={href} key={label} target={label === "EMAIL" ? undefined : "_blank"} rel="noreferrer"><span className="contact-link-icon"><Icon/></span><span><small>{label}</small><strong>{value}</strong></span><ArrowUpRight/></a>)}
            <div className="contact-link-row contact-location"><span className="contact-link-icon"><MapPin/></span><span><small>BASED IN</small><strong>{contact.location}</strong></span></div>
          </div>
          <aside className="contact-aside">
            <span className="contact-aside-index">VANX. / 2026—27</span>
            <div className="contact-aside-mark">VANX<span>.</span></div>
            <p>Pharmaceutical sciences.<br/>A curious mind.<br/>A research-led approach.</p>
            <span className="contact-aside-bottom">LET'S BUILD BETTER IDEAS.</span>
          </aside>
        </div>
      </div>
    </section>
  );
}
export default Contact;
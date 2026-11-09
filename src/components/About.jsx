import React from "react";
import { ArrowUpRight } from "lucide-react";
import { siteConfig } from "../config/site";

function About() {
  const { identity } = siteConfig;
  const { education } = siteConfig;

  return (
    <section id="about" className="section about-section">
      <div className="container">
        <div className="section-topline"><span>01 / ABOUT</span><span>THE PERSON BEHIND THE WORK</span></div>
        <div className="about-layout">
          <div className="section-heading">
            <p className="section-label">A LITTLE INTRODUCTION</p>
            <h2>Curiosity<br />drives <em>progress.</em></h2>
          </div>
          <div className="about-copy">
            <p className="about-lead">{identity.about}</p>
            <p>My academic foundation spans medicinal chemistry, pharmacology, biopharmaceutics and pharmacokinetics, pharmaceutical analysis and industrial pharmacy. I am interested in connecting this scientific base with quality-by-design thinking, analytical development and computational tools.</p>
            <p>Beyond the classroom, medical writing, academic coordination, industry exposure and collaborative projects continue to shape how I approach problems and communicate ideas.</p>
            <a className="inline-link" href="#contact">Start a conversation <ArrowUpRight size={16} /></a>
          </div>
        </div>

        <div className="education-strip">
          <div><span className="micro-label">CURRENT EDUCATION</span><strong>{education.qualification}</strong><span>{education.institution} · {education.university}</span></div>
          <div><span className="micro-label">ACADEMIC RECORD</span><strong>{education.academicRecord}</strong><span>{education.recordNote}</span></div>
          <div><span className="micro-label">CURRENT STATUS</span><strong>{education.status}</strong><span>{identity.location}</span></div>
        </div>
      </div>
    </section>
  );
}

export default About;
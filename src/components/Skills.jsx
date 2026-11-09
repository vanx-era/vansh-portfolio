import React from "react";
import { Atom, Microscope, Database, Users } from "lucide-react";

const categories = [
  {
    number: "01",
    title: "Pharmaceutical sciences",
    icon: Atom,
    description: "Scientific foundations for understanding medicines, their action and performance",
    skills: ["Medicinal chemistry", "Pharmacology", "Pharmaceutical analysis", "Biopharmaceutics & pharmacokinetics", "Industrial pharmacy"]
  },
  {
    number: "02",
    title: "Research & development",
    icon: Microscope,
    description: "Methods and frameworks that support systematic pharmaceutical development",
    skills: ["Quality by Design (QbD)", "Analytical Quality by Design (AQbD)", "Chromatographic method development", "Formulation development", "Scientific literature review"]
  },
  {
    number: "03",
    title: "Technology & analytics",
    icon: Database,
    description: "Using computational tools to organise, analyse and communicate information",
    skills: ["Python", "Pandas", "MySQL", "Power BI", "Minitab", "ChemDraw"]
  },
  {
    number: "04",
    title: "Communication & leadership",
    icon: Users,
    description: "Turning technical information into clear, collaborative outcomes",
    skills: ["Medical writing", "Critical appraisal", "Technical presentations", "Team coordination", "Public speaking"]
  }
];

function Skills() {
  return (
    <section id="expertise" className="section expertise-section">
      <div className="container">
        <div className="section-topline"><span>03 / EXPERTISE</span><span>SCIENCE · SYSTEMS · COMMUNICATION</span></div>
        <div className="section-heading split-heading">
          <div><p className="section-label">WHAT I BRING</p><h2>Knowledge in<br /><em>practice</em></h2></div>
          <p className="section-description">A growing skill set across pharmaceutical sciences, research methods, data tools and professional communication</p>
        </div>
        <div className="expertise-grid">
          {categories.map(({ number, title, icon: Icon, description, skills }) => (
            <article className="expertise-card" key={number}>
              <div className="expertise-card-top"><span>{number}</span><Icon size={21} strokeWidth={1.5} /></div>
              <h3>{title}</h3>
              <p>{description}</p>
              <div className="tag-list">{skills.map((skill) => <span key={skill}>{skill}</span>)}</div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
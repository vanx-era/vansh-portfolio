import React from "react";
import { Award, Users, HeartHandshake } from "lucide-react";

const highlights = [
  {
    icon: Award,
    title: "Student leadership",
    detail: "Discipline Committee Member and Assistant Discipline Secretary, recognised with institutional trophies."
  },
  {
    icon: HeartHandshake,
    title: "Community engagement",
    detail: "Volunteer participation in PHO activities, health-check-up initiatives, blood-donation drives and community outreach."
  },
  {
    icon: Users,
    title: "Coordination & teamwork",
    detail: "Class Representative and student coordination experience, including working with peers and academic coordinators."
  }
];

function Highlights() {
  return (
    <section id="recognition" className="section recognition-section">
      <div className="container">
        <div className="section-topline"><span>05 / RECOGNITION</span><span>LEADERSHIP · SERVICE · INITIATIVE</span></div>
        <div className="section-heading split-heading">
          <div><p className="section-label">MORE THAN ACADEMICS</p><h2>People.<br /><em>Purpose.</em></h2></div>
          <p className="section-description">I value the opportunities to take responsibility, contribute to a team and participate in initiatives beyond my academic coursework.</p>
        </div>
        <div className="recognition-grid">
          {highlights.map(({ icon: Icon, title, detail }, index) => (
            <article className="recognition-card" key={title}>
              <span className="recognition-index">0{index + 1}</span>
              <Icon size={23} strokeWidth={1.5} />
              <h3>{title}</h3>
              <p>{detail}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Highlights;
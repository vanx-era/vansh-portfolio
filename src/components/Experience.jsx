import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { experience } from "../data/experience";

function Experience() {
  return (
    <section id="experience" className="section experience-section">
      <div className="container">
        <div className="section-topline"><span>04 / THE JOURNEY</span><span>EXPERIENCE & EXPOSURE</span></div>
        <div className="section-heading split-heading">
          <div><p className="section-label">LEARNING BY DOING</p><h2>Beyond the<br /><em>classroom.</em></h2></div>
          <p className="section-description">Experiences that have helped me connect academic knowledge with communication, collaboration and the pharmaceutical industry.</p>
        </div>
        <div className="timeline">
          {experience.map((item, index) => (
            <motion.article
              className="timeline-item"
              key={item.id}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.5, delay: index * 0.06 }}
            >
              <div className="timeline-index">0{index + 1}</div>
              <div className="timeline-body">
                <div className="timeline-meta"><span>{item.type}</span><span>{item.period}</span></div>
                <div className="timeline-title-row"><div><h3>{item.title}</h3><p className="timeline-org">{item.organization}</p></div><span className={item.status === "In progress" || item.status === "Ongoing" ? "status-pill current" : "status-pill"}>{item.status}</span></div>
                <p className="timeline-description">{item.description}</p>
                {item.highlights?.length > 0 && <ul>{item.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}</ul>}
              </div>
              <ArrowUpRight className="timeline-arrow" size={19} />
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
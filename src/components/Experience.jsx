
import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, BriefcaseBusiness } from "lucide-react";
import { experience } from "../data/experience";

const Experience = () => {
  const visibleExperience = experience.filter(
    (item) => item.status !== "Add verified details"
  );

  return (
    <section id="experience" className="experience section">
      <div className="container">

        <div className="section-heading">
          <p className="section-label">04 / MY JOURNEY</p>
          <h2>Experience & <span className="accent">Leadership.</span></h2>
          <p className="section-intro">
            Academic experiences, professional development and
            opportunities that continue to shape my journey.
          </p>
        </div>

        <div className="experience-list">
          {visibleExperience.map((item, index) => (
            <motion.article
              className="experience-card"
              key={item.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: index * 0.12 }}
            >
              <div className="experience-number">
                0{index + 1}
              </div>

              <div className="experience-content">

                <div className="experience-header">
                  <div>
                    <span className="experience-type">
                      <BriefcaseBusiness size={14} />
                      {item.type}
                    </span>

                    <h3>{item.title}</h3>
                    <h4>{item.organization}</h4>
                  </div>

                  <span className="experience-duration">
                    {item.startDate}
                    {item.endDate ? ` — ${item.endDate}` : " — Present"}
                  </span>
                </div>

                <p>{item.description}</p>

                {item.responsibilities?.length > 0 && (
                  <ul className="experience-highlights">
                    {item.responsibilities.map((responsibility, i) => (
                      <li key={i}>{responsibility}</li>
                    ))}
                  </ul>
                )}

                <span className="experience-status">
                  {item.status}
                </span>
              </div>

              <ArrowUpRight className="experience-arrow" size={22} />
            </motion.article>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Experience;

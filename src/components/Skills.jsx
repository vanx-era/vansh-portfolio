import React from "react";

const skillCategories = [
  {
    title: "Pharmaceutical Sciences",
    skills: [
      "Medicinal Chemistry",
      "Pharmacology",
      "Pharmaceutical Analysis",
      "Formulation Development",
      "Drug Delivery Systems",
      "Biopharmaceutics & Pharmacokinetics",
    ],
  },
  {
    title: "Research & Development",
    skills: [
      "Quality by Design (QbD)",
      "Analytical Method Development",
      "AQbD",
      "Chromatographic Techniques",
      "Literature Review",
      "Scientific Writing",
    ],
  },
  {
    title: "Technology & Analytics",
    skills: [
      "Python",
      "MySQL",
      "Power BI",
      "Data Analysis",
      "Pandas",
      "Matplotlib",
    ],
  },
  {
    title: "Professional Skills",
    skills: [
      "Medical Writing",
      "Research & Critical Appraisal",
      "Team Coordination",
      "Leadership",
      "Communication",
      "Presentation",
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="skills section">
      <div className="container">
        <h2>Skills & Expertise</h2>

        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div className="skill-card" key={index}>
              <h3>{category.title}</h3>

              <div className="skill-tags">
                {category.skills.map((skill, skillIndex) => (
                  <span className="skill-tag" key={skillIndex}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
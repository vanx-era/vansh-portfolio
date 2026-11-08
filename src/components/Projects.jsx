import React from "react";
import { projects } from "../data/projects";

const Projects = () => {
  return (
    <section id="projects" className="projects section">
      <div className="container">
        <h2>Projects & Research</h2>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <article className="project-card" key={index}>
              <span className="project-category">{project.category}</span>

              <h3>{project.title}</h3>

              <p>{project.description}</p>

              {project.technologies && (
                <div className="project-tags">
                  {project.technologies.map((technology, techIndex) => (
                    <span key={techIndex}>{technology}</span>
                  ))}
                </div>
              )}

              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="project-link"
                >
                  View Project →
                </a>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
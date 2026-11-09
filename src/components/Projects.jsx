import React from "react";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { projects } from "../data/projects";

function Projects() {
  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        <div className="section-topline"><span>02 / SELECTED WORK</span><span>RESEARCH & PROJECTS</span></div>
        <div className="section-heading split-heading">
          <div><p className="section-label">IN PROGRESS & COMPLETED</p><h2>Ideas into<br /><em>action.</em></h2></div>
          <p className="section-description">A selection of academic research and interdisciplinary work. Ongoing work is clearly identified as it develops.</p>
        </div>
        <div className="project-list">
          {projects.map((project) => (
            <article className="project-card" key={project.id}>
              <div className="project-number">{project.number}</div>
              <div className="project-main">
                <div className="project-meta"><span>{project.category}</span><span>{project.year}</span></div>
                <h3>{project.title}</h3>
                <p className="project-summary">{project.summary}</p>
                <p className="project-description">{project.description}</p>
                <div className="tag-list project-tags">{project.tools.map((tool) => <span key={tool}>{tool}</span>)}</div>
              </div>
              <div className="project-side"><span className="project-status">{project.status}</span><span className="project-role">{project.role}</span><ArrowUpRight size={22} /></div>
            </article>
          ))}
        </div>
        <a className="inline-link project-foot-link" href="#contact">Discuss a project <ArrowRight size={16} /></a>
      </div>
    </section>
  );
}

export default Projects;
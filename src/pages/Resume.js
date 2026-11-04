import React, { useEffect } from "react";
import { links, openSource, jobs, resume } from "../content_option";

const url = (path) => process.env.PUBLIC_URL + path;
const bare = (href) => href.replace(/^https?:\/\//, "");

function Label({ children }) {
  return <span className="cv-label">{children}</span>;
}

export default function Resume() {
  useEffect(() => {
    const prevTitle = document.title;
    document.title = "Morgan Metz — Resume";
    document.documentElement.dataset.page = "resume";
    return () => {
      document.title = prevTitle;
      delete document.documentElement.dataset.page;
    };
  }, []);

  return (
    <div className="cv-screen">
      <nav className="cv-toolbar">
        <a href={url("/")}>← Home</a>
        <a href={url(links.resumePdf)} download>Download PDF</a>
      </nav>

      <article className="cv-sheet">
        <header className="cv-head">
          <span className="cv-name">Morgan Metz</span>
          <span className="cv-contact">
            <a href={`mailto:${links.email}`}>{links.email}</a>
            <span>{links.phone}</span>
            <a href={links.github}>{bare(links.github)}</a>
            <a href={links.linkedin}>{bare(links.linkedin)}</a>
          </span>
        </header>

        <section className="cv-row cv-section">
          <Label>Profile</Label>
          <p>{resume.profile}</p>
        </section>

        <section>
          <div className="cv-row cv-section cv-section-open">
            <Label>Experience</Label>
          </div>
          {jobs.filter((job) => !job.homeOnly).map((job) => (
            <div className="cv-row cv-entry cv-job" key={job.company}>
              <span className="muted">{job.dates}</span>
              <div className="cv-job-body">
                <div>
                  <span className="strong">{job.company}</span>
                  <span className="muted"> · {job.role}</span>
                </div>
                {job.points.map((point) => (
                  <div className="cv-bullet" key={point}>
                    <span className="muted">-</span>
                    <span>{point}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </section>

        <section>
          <div className="cv-row cv-section cv-section-open cv-gap">
            <Label>Projects</Label>
          </div>
          {resume.projects.map((project) => (
            <div className="cv-row cv-entry" key={project.name}>
              <span className="strong">{project.name}</span>
              <p>{project.text}</p>
            </div>
          ))}
          <div className="cv-row cv-entry">
            <span className="strong">Open source</span>
            <span>{openSource}</span>
          </div>
        </section>

        <section>
          <div className="cv-row cv-section cv-section-tight cv-gap">
            <Label>Skills</Label>
            <span>{resume.skills}</span>
          </div>
          <div className="cv-row cv-entry">
            <Label>Awards</Label>
            <span>{resume.awards}</span>
          </div>
        </section>
      </article>
    </div>
  );
}

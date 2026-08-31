import React from "react";
import { jobs } from "../content_option";
import Reveal from "../components/Reveal";

export default function Experience() {
  return (
    <section id="experience" className="mm-experience">
      <Reveal className="mm-section-head">
        <h2>Experience</h2>
        <span className="mm-rule" />
      </Reveal>
      <div>
        {jobs.map((jb) => (
          <Reveal key={jb.company + jb.dates} className="mm-job">
            <div className="mm-job-meta">
              <span className="mm-job-dates">{jb.dates}</span>
              <span className="mm-job-where">{jb.where}</span>
              {jb.note && <span className="mm-job-note">{jb.note}</span>}
            </div>
            <div className="mm-job-body">
              <div className="mm-job-title">
                <a className="mm-job-company" href={jb.url} target="_blank" rel="noopener noreferrer">
                  {jb.company}
                </a>
                <span className="mm-job-role">{jb.role}</span>
              </div>
              <div className="mm-points">
                {jb.points.map((pt) => (
                  <div key={pt} className="mm-point">
                    <i aria-hidden="true" />
                    <span>{pt}</span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

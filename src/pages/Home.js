import React from "react";
import { links, home, openSource, jobs } from "../content_option";

const url = (path) => process.env.PUBLIC_URL + path;

export default function Home() {
  return (
    <div className="home">
      <main className="home-col">
        <p>{home.greeting}</p>
        <p>{home.aside}</p>
        <p className="muted">
          {home.intro.map((part, i) =>
            part === "github" ? (
              <a key={i} className="link-underline" href={links.github}>
                GitHub
              </a>
            ) : (
              part
            )
          )}
        </p>

        <div className="work">
          {jobs.map((job) => (
            <div className="work-row" key={job.company}>
              <span className="work-company">{job.company}</span>
              <span className="work-role muted">
                {job.role}
                {job.acquirer && (
                  <>
                    {" "}
                    <a className="link-underline" href={job.acquirer.url}>
                      {job.acquirer.name}
                    </a>
                  </>
                )}
              </span>
              <span className="work-years muted">{job.years}</span>
            </div>
          ))}
        </div>

        <div className="oss">
          <span className="muted">Open source</span>
          <span>{openSource}</span>
        </div>

        <nav className="home-links">
          <a className="link-muted" href={`mailto:${links.email}`}>Email</a>
          <a className="link-muted" href={links.github}>GitHub</a>
          <a className="link-muted" href={links.linkedin}>LinkedIn</a>
          <a className="link-muted" href={url(links.resume)}>Resume</a>
        </nav>
      </main>
    </div>
  );
}

import React from "react";
import { now } from "../content_option";
import Reveal from "../components/Reveal";

export default function Now() {
  return (
    <section id="now" className="mm-now">
      <Reveal className="mm-now-card">
        <div className="mm-now-label">
          <span className="mm-now-dot" aria-hidden="true" />
          <span>Now</span>
        </div>
        <div className="mm-now-list">
          {now.map((line) => (
            <span key={line}>{line}</span>
          ))}
        </div>
      </Reveal>
    </section>
  );
}

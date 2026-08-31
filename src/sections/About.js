import React from "react";
import { about, meta } from "../content_option";
import Reveal from "../components/Reveal";
import ImageSlot from "../components/ImageSlot";

export default function About() {
  return (
    <section id="about" className="mm-about">
      <Reveal>
        <h2>About</h2>
        <p className="mm-about-lead">{about.lead}</p>
        <p className="mm-about-body">{about.body}</p>
        <div className="mm-stats">
          {about.stats.map((st) => (
            <div key={st.label}>
              <div className="mm-stat-n">{st.n}</div>
              <div className="mm-stat-label">{st.label}</div>
            </div>
          ))}
        </div>
      </Reveal>
      <Reveal className="mm-portrait">
        <ImageSlot
          src={about.portrait}
          alt={`Portrait of ${meta.name}`}
          fit="cover"
          radius={8}
          position={about.portraitPosition}
          placeholder={about.portraitPlaceholder}
        />
      </Reveal>
    </section>
  );
}

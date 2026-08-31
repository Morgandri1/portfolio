import React from "react";
import { playground, motion } from "../content_option";
import Reveal from "../components/Reveal";
import { Icon } from "../components/icons";

export default function Playground() {
  const items = [...playground.marquee, ...playground.marquee];
  return (
    <section id="play" className="mm-play">
      <Reveal className="mm-section-head">
        <h2>{playground.title}</h2>
        <span className="mm-sub">{playground.subtitle}</span>
      </Reveal>
      <div className="mm-marquee" aria-label={playground.marquee.join(", ")}>
        <div className="mm-marquee-track" style={{ "--marquee-dur": `${motion.marqueeSeconds}s` }}>
          {items.map((mq, i) => (
            <span key={i} className="mm-marquee-item" aria-hidden={i >= playground.marquee.length}>
              {mq} <i>✦</i>
            </span>
          ))}
        </div>
      </div>
      <Reveal className="mm-play-cards">
        {playground.cards.map((pc) => (
          <div key={pc.title} className="card mm-play-card">
            <Icon name={pc.icon} size={24} />
            <div className="mm-kicker">{pc.kicker}</div>
            <h3>{pc.title}</h3>
            <p>{pc.body}</p>
          </div>
        ))}
      </Reveal>
    </section>
  );
}

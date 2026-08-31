import React, { useMemo } from "react";
import { projects } from "../content_option";
import Reveal from "../components/Reveal";
import ImageSlot from "../components/ImageSlot";
import { ArrowUpRight } from "../components/icons";

const SHADES = [
  "var(--color-neutral-800)",
  "var(--color-accent-800)",
  "var(--color-accent-600)",
  "var(--color-accent-400)",
  "var(--color-accent-200)",
];

// Deterministic 52×7 contribution grid (seeded, so it's stable across renders).
function makeContribCells() {
  let seed = 20260830;
  const rnd = () => {
    seed = (seed * 1103515245 + 12345) % 2147483648;
    return seed / 2147483648;
  };
  return Array.from({ length: 364 }, (_, i) => {
    const week = Math.floor(i / 7);
    const day = i % 7;
    const busy = 0.45 + 0.35 * Math.sin(week * 0.4) + (day >= 5 ? -0.25 : 0);
    const r = rnd();
    let lvl = 0;
    if (r < busy) lvl = 1 + Math.floor(rnd() * 4 * Math.min(1, busy));
    return SHADES[Math.min(lvl, 4)];
  });
}

function ContribGraph({ cells }) {
  return (
    <div className="mm-graph">
      <div className="mm-graph-grid" aria-hidden="true">
        {cells.map((bg, i) => (
          <span key={i} style={{ background: bg }} />
        ))}
      </div>
      <div className="mm-graph-legend">
        <span>the last 52 weeks</span>
        <span>
          less
          {SHADES.map((bg) => (
            <i key={bg} style={{ background: bg }} />
          ))}
          more
        </span>
      </div>
    </div>
  );
}

function Visual({ pj, cells }) {
  return (
    <div className="mm-visual" style={{ aspectRatio: pj.aspect || "16/10" }}>
      {pj.graph ? (
        <ContribGraph cells={cells} />
      ) : (
        <>
          <div className="mm-frame">
            <div className={pj.lightImage ? "" : "lighten"}>
              <ImageSlot src={pj.src} alt={pj.title} fit={pj.fit || "cover"} radius={6} placeholder={pj.placeholder} />
            </div>
          </div>
          {pj.mobileSrc && (
            <div className="mm-mobile">
              <ImageSlot src={pj.mobileSrc} alt={`${pj.title} on mobile`} fit="cover" radius={13} placeholder="Drop a mobile screenshot" />
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default function Work() {
  const cells = useMemo(makeContribCells, []);
  const last = String(projects.length).padStart(2, "0");
  return (
    <section id="work" className="mm-work">
      <Reveal className="mm-section-head">
        <h2>Selected work</h2>
        <span className="mm-count">01 — {last}</span>
        <span className="mm-rule" />
      </Reveal>
      <div className="mm-projects">
        {projects.map((pj) => (
          <Reveal as="article" key={pj.index} className="mm-project">
            <div className="mm-project-index" aria-hidden="true">{pj.index}</div>
            <div className="mm-project-copy">
              <div className="mm-kicker">{pj.kicker}</div>
              <h3>{pj.title}</h3>
              <p>{pj.blurb}</p>
              <div className="mm-tags">
                {pj.tags.map((tg) => (
                  <span key={tg} className="tag tag-outline">{tg}</span>
                ))}
              </div>
              <a className="mm-ext" href={pj.url} target="_blank" rel="noopener noreferrer">
                {pj.linkLabel} <ArrowUpRight size={14} />
              </a>
            </div>
            <Visual pj={pj} cells={cells} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}

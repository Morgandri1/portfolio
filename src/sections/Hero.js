import React, { useEffect, useRef } from "react";
import { meta, hero, motion } from "../content_option";
import { ArrowDown } from "../components/icons";

export default function Hero() {
  const nameRef = useRef(null);
  const letters = meta.name.toUpperCase().split("");

  // Letters near the cursor push away from it and settle back.
  useEffect(() => {
    if (!motion.magneticLetters) return undefined;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return undefined;
    const R = 170;
    const F = 44;
    const onMove = (e) => {
      const els = nameRef.current ? nameRef.current.querySelectorAll(".mm-letter") : [];
      els.forEach((el) => {
        const r = el.getBoundingClientRect();
        const dx = r.left + r.width / 2 - e.clientX;
        const dy = r.top + r.height / 2 - e.clientY;
        const d = Math.hypot(dx, dy) || 1;
        if (d < R) {
          const f = (1 - d / R) * F;
          el.style.transform = `translate(${(dx / d) * f}px, ${(dy / d) * f}px) rotate(${(dx / d) * f * 0.3}deg)`;
        } else if (el.style.transform) {
          el.style.transform = "";
        }
      });
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <section id="hero" className="mm-hero">
      <div className="mm-hero-tag">
        <span className="mm-hero-tag-line" />
        <span>{meta.tagline}</span>
      </div>
      <h1 ref={nameRef} className="mm-name" aria-label={meta.name}>
        {letters.map((ch, i) => (
          <span key={i} className="mm-letter" aria-hidden="true">
            {ch === " " ? "\u00A0" : ch}
          </span>
        ))}
      </h1>
      <div className="mm-hero-blurb">
        <p>
          {hero.blurb}
          <span className="mm-caret" aria-hidden="true" />
        </p>
      </div>
      <div className="mm-hero-hint" aria-hidden="true">
        <ArrowDown size={15} /> {hero.scrollHint}
      </div>
    </section>
  );
}

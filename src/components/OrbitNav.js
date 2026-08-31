import React from "react";
import { meta, navs } from "../content_option";
import { Icon } from "./icons";

export const scrollToSection = (id) => {
  const el = document.getElementById(id);
  if (!el) return;
  const top = el.getBoundingClientRect().top + window.scrollY - 20;
  window.scrollTo({ top, behavior: "smooth" });
};

// Four section buttons orbiting a monogram; each button counter-rotates so it
// stays upright while the ring turns.
export default function OrbitNav() {
  return (
    <nav className="mm-orbit" aria-label="Section navigation">
      <div className="mm-orbit-ring" />
      <div className="mm-orbit-core">{meta.initials}</div>
      <div className="mm-orbit-spin">
        {navs.map((nv) => (
          <div key={nv.target} className="mm-orbit-arm" style={{ transform: `rotate(${nv.deg}deg)` }}>
            <div style={{ transform: "translateY(-75px)" }}>
              <div className="mm-orbit-counter">
                <div style={{ transform: `rotate(${-nv.deg}deg)` }}>
                  <button
                    type="button"
                    className="mm-orbit-btn"
                    title={nv.label}
                    aria-label={nv.label}
                    onClick={() => scrollToSection(nv.target)}
                  >
                    <Icon name={nv.icon} size={13} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </nav>
  );
}

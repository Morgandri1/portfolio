import React, { useEffect, useRef } from "react";
import { threadNodes } from "../content_option";

// The vertical line down the left gutter that "draws" itself as you scroll,
// lighting a node beside each section it has reached.
export default function Thread() {
  const threadRef = useRef(null);
  const fillRef = useRef(null);
  const nodeRefs = useRef([]);

  useEffect(() => {
    const thread = threadRef.current;
    const nodes = () => nodeRefs.current.filter(Boolean);

    const placeNodes = () => {
      if (!thread) return;
      const threadTop = thread.getBoundingClientRect().top + window.scrollY;
      nodes().forEach((n) => {
        const sec = document.getElementById(n.dataset.target);
        if (!sec) return;
        const top = sec.getBoundingClientRect().top + window.scrollY + 130;
        n.style.top = `${Math.max(0, top - threadTop)}px`;
      });
    };

    const update = () => {
      const fill = fillRef.current;
      if (!thread || !fill) return;
      const r = thread.getBoundingClientRect();
      const drawn = Math.min(Math.max(window.innerHeight * 0.62 - r.top, 0), r.height);
      fill.style.height = `${drawn}px`;
      nodes().forEach((n) => {
        n.classList.toggle("is-lit", parseFloat(n.style.top || "0") <= drawn);
      });
    };

    const relayout = () => {
      placeNodes();
      update();
    };

    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", relayout);
    window.addEventListener("load", relayout);
    const timer = setTimeout(relayout, 500);
    // Images and fonts loading later shift section positions; follow them.
    const ro = typeof ResizeObserver !== "undefined" ? new ResizeObserver(relayout) : null;
    if (ro) ro.observe(document.body);
    relayout();

    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", relayout);
      window.removeEventListener("load", relayout);
      if (ro) ro.disconnect();
    };
  }, []);

  return (
    <div ref={threadRef} className="mm-thread" aria-hidden="true">
      <div className="mm-thread-track" />
      <div ref={fillRef} className="mm-thread-fill" />
      {threadNodes.map((id, i) => (
        <div
          key={id}
          ref={(el) => {
            nodeRefs.current[i] = el;
          }}
          className="mm-node"
          data-target={id}
        />
      ))}
    </div>
  );
}

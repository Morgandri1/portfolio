import React, { useEffect, useRef } from "react";
import { motion } from "../content_option";

// Fixed layers behind the page: the flow-field canvas, the cursor glow and the
// top scroll-progress bar.
export default function Backdrop() {
  const canvasRef = useRef(null);
  const glowRef = useRef(null);
  const progressRef = useRef(null);

  useEffect(() => {
    const c = canvasRef.current;
    const ctx = c.getContext("2d");
    const mouse = { x: -999, y: -999 };
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let W = 0;
    let H = 0;
    const fit = () => {
      W = c.width = window.innerWidth;
      H = c.height = window.innerHeight;
    };
    fit();

    const css = getComputedStyle(document.documentElement);
    const accent = css.getPropertyValue("--color-accent").trim() || "#9184d9";
    const bg = css.getPropertyValue("--color-bg").trim() || "#161826";
    ctx.fillStyle = bg;
    ctx.fillRect(0, 0, W, H);

    const onMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      if (glowRef.current) glowRef.current.style.transform = `translate(${e.clientX - 260}px, ${e.clientY - 260}px)`;
    };
    const onScroll = () => {
      const h = document.documentElement;
      const max = h.scrollHeight - h.clientHeight;
      if (progressRef.current) progressRef.current.style.width = `${max > 0 ? (h.scrollTop / max) * 100 : 0}%`;
    };
    window.addEventListener("mousemove", onMove);
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", fit);
    onScroll();

    let raf = 0;
    if (!reduceMotion) {
      const N = Math.round(motion.particleDensity);
      const pts = Array.from({ length: N }, () => ({
        x: Math.random() * W,
        y: Math.random() * H,
        life: Math.random() * 200,
      }));
      let t = 0;
      const tick = () => {
        t += 0.0022;
        ctx.globalAlpha = 0.075;
        ctx.fillStyle = bg;
        ctx.fillRect(0, 0, W, H);
        ctx.globalAlpha = 0.34;
        ctx.strokeStyle = accent;
        ctx.lineWidth = 0.8;
        for (const p of pts) {
          const a = Math.sin(p.x * 0.0017 + t * 3) + Math.cos(p.y * 0.0021 - t * 2) + Math.sin((p.x + p.y) * 0.0006 + t);
          let vx = Math.cos(a) * 1.15;
          let vy = Math.sin(a) * 1.15;
          const dx = p.x - mouse.x;
          const dy = p.y - mouse.y;
          const d = Math.hypot(dx, dy);
          if (d < 160 && d > 1) {
            vx += (dx / d) * (1 - d / 160) * 2.2;
            vy += (dy / d) * (1 - d / 160) * 2.2;
          }
          const nx = p.x + vx;
          const ny = p.y + vy;
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(nx, ny);
          ctx.stroke();
          p.x = nx;
          p.y = ny;
          p.life -= 1;
          if (p.x < -20 || p.x > W + 20 || p.y < -20 || p.y > H + 20 || p.life < 0) {
            p.x = Math.random() * W;
            p.y = Math.random() * H;
            p.life = 120 + Math.random() * 240;
          }
        }
        ctx.globalAlpha = 1;
        raf = requestAnimationFrame(tick);
      };
      tick();
    }

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", fit);
    };
  }, []);

  return (
    <>
      <canvas ref={canvasRef} className="mm-field" aria-hidden="true" />
      <div ref={glowRef} className="mm-glow" aria-hidden="true" />
      <div ref={progressRef} className="mm-progress" aria-hidden="true" />
    </>
  );
}

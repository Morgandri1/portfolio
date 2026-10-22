import React from "react";
import Home from "../pages/Home";
import Resume from "../pages/Resume";

// Two pages, no router. On Vercel, /resume is rewritten to index.html
// (see vercel.json).
function currentPath() {
  const base = process.env.PUBLIC_URL || "";
  const path = window.location.pathname.slice(base.length);
  return path.replace(/\/+$/, "") || "/";
}

export default function App() {
  return currentPath() === "/resume" ? <Resume /> : <Home />;
}

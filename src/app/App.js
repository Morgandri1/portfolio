import React from "react";
import Home from "../pages/Home";
import Resume from "../pages/Resume";

// Two pages, no router. On gh-pages, /resume is served by the 404.html copy
// of index.html (see the predeploy script).
function currentPath() {
  const base = process.env.PUBLIC_URL || "";
  const path = window.location.pathname.slice(base.length);
  return path.replace(/\/+$/, "") || "/";
}

export default function App() {
  return currentPath() === "/resume" ? <Resume /> : <Home />;
}

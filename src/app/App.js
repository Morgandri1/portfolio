import React from "react";
import Backdrop from "../components/Backdrop";
import OrbitNav from "../components/OrbitNav";
import Thread from "../components/Thread";
import Hero from "../sections/Hero";
import Work from "../sections/Work";
import Playground from "../sections/Playground";
import About from "../sections/About";
import Experience from "../sections/Experience";
import Quotes from "../sections/Quotes";
import Now from "../sections/Now";
import Contact from "../sections/Contact";

export default function App() {
  return (
    <>
      <Backdrop />
      <OrbitNav />
      <div className="mm-page">
        <Thread />
        <main className="mm-main">
          <Hero />
          <Work />
          <Playground />
          <About />
          <Experience />
          <Quotes />
          <Now />
          <Contact />
        </main>
      </div>
    </>
  );
}

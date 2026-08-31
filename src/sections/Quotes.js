import React from "react";
import { quotes } from "../content_option";
import Reveal from "../components/Reveal";
import { Quotes as QuotesIcon, ArrowUpRight } from "../components/icons";

export default function Quotes() {
  return (
    <section id="quotes" className="mm-quotes">
      <Reveal className="mm-section-head">
        <h2>Kind words</h2>
        <span className="mm-rule" />
      </Reveal>
      <div className="mm-quote-grid">
        {quotes.map((qt) => (
          <Reveal as="figure" key={qt.who} className="card mm-quote">
            <QuotesIcon size={26} />
            <blockquote>{qt.text}</blockquote>
            <figcaption>
              {qt.url ? (
                <a href={qt.url} target="_blank" rel="noopener noreferrer">
                  {qt.who} <ArrowUpRight size={11} />
                </a>
              ) : (
                <span>{qt.who}</span>
              )}
            </figcaption>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

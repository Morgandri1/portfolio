import React from "react";
import { contact } from "../content_option";
import Reveal from "../components/Reveal";
import { ArrowUpRight } from "../components/icons";

export default function Contact() {
  return (
    <section id="contact" className="mm-contact">
      <Reveal>
        <div className="mm-contact-prompt">{contact.prompt}</div>
        <a className="mm-contact-mail" href={`mailto:${contact.email}`}>
          {contact.email} <ArrowUpRight size="0.5em" />
        </a>
        <div className="mm-contact-links">
          {contact.links.map((l) => (
            <a
              key={l.label}
              href={l.url.startsWith("/") ? `${process.env.PUBLIC_URL}${l.url}` : l.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {l.label}
            </a>
          ))}
        </div>
      </Reveal>
      <footer className="mm-footer">
        <span>{contact.footerLeft}</span>
        <span>{contact.footerRight}</span>
      </footer>
    </section>
  );
}

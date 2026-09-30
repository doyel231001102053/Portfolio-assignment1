import React from "react";
import photo from "../assets/WhatsApp Image 2026-09-29 at 10.29.07 AM.jpeg";

const STATS = [
  { value: "91%", label: "test accuracy — skin lesion model" },
  { value: "9", label: "diagnostic classes handled" },
  { value: "5-tier", label: "civic platform, live in production" },
];

export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="hero__text">
        <p className="hero__role">Fourth-year BCA (Honours), Techno India University</p>
        <h1 className="hero__headline">Building systems that read skin and run cities.</h1>
        <p className="hero__bio">
          I'm Doyel. I split my time between deep-learning research, trained on Kaggle's
          GPUs, and full-stack web projects — most recently a nine-class skin lesion
          classifier and a civic waste-management platform built for West Bengal's
          municipality structure.
        </p>
        <div className="hero__actions">
          <a href="#projects" className="btn btn--primary">View projects</a>
          <a href="#contact" className="btn btn--ghost">Contact me</a>
        </div>
        <dl className="hero__stats">
          {STATS.map((s) => (
            <div className="hero__stat" key={s.label}>
              <dt>{s.value}</dt>
              <dd>{s.label}</dd>
            </div>
          ))}
        </dl>
      </div>

      <div className="hero__graphic">
        <img src={photo} alt="Doyel" className="hero__photo" />
      </div>
    </section>
  );
}
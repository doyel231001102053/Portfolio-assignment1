import React from "react";
import photo from "../assets/WhatsApp Image 2026-09-29 at 10.29.07 AM.jpeg";

export default function About() {
  return (
    <section id="about" className="about">
      <div className="about__avatar">
        <img src={photo} alt="Doyel" />
      </div>

      <div className="about__content">
        <h2>About me</h2>
        <p>
          I'm a computer applications student who ended up in two very different corners of
          the field at once: medical imaging research and civic-tech web development.
          Most of my ML work runs on Kaggle's free GPUs — I've learned to work around
          out-of-memory errors and long training runs as a matter of routine, and I care
          about reporting real numbers, not projected ones.
        </p>
        <p>
          On the web side, I like building things that model how an actual system
          works — SwachhAI's five-tier role hierarchy mirrors how a West Bengal
          municipality is actually structured, rather than a generic admin/user split.
        </p>

        <div className="about__education">
          <h3>Education</h3>
          <div className="about__edu-item">
            <p className="about__edu-degree">BCA (Honours), Computer Applications</p>
            <p className="about__edu-school">Techno India University · Currently in fourth year</p>
          </div>
        </div>
      </div>
    </section>
  );
}
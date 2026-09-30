import React, { useState } from "react";

// TODO: replace with your real email, GitHub, and LinkedIn before deploying.
const EMAIL = "doyelhazra2023@gmail.com";
const GITHUB = "https://github.com/Doyel-H19a";
const LINKEDIN = "https://www.linkedin.com/in/doyelhazra/e";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // clipboard access denied — the email is still visible as plain text
    }
  };

  return (
    <section id="contact" className="contact">
      <h2>Get in touch</h2>
      <p className="contact__lead">
        Open to internships, research collaboration, or just a conversation about
        Mamba architectures or civic tech. Reach me here:
      </p>

      <div className="contact__row">
        <button className="btn btn--primary" onClick={handleCopy} type="button">
          {copied ? "Copied!" : "Copy email"}
        </button>
        <span className="contact__email">{EMAIL}</span>
      </div>

      <div className="contact__socials">
        <a href={GITHUB} target="_blank" rel="noreferrer" className="nav-link">GitHub</a>
        <a href={LINKEDIN} target="_blank" rel="noreferrer" className="nav-link">LinkedIn</a>
      </div>
    </section>
  );
}
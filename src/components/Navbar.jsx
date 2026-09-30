import React, { useState } from "react";

const LINKS = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  return (
    <header className="navbar">
      <div className="navbar__inner">
        <a href="#top" className="navbar__brand" onClick={closeMenu}>
          Doyel Hazra
        </a>

        <nav className={`navbar__links ${open ? "navbar__links--open" : ""}`}>
          {LINKS.map((link) => (
            <a key={link.href} href={link.href} className="nav-link" onClick={closeMenu}>
              {link.label}
            </a>
          ))}
          <a href="#contact" className="btn btn--primary navbar__cta" onClick={closeMenu}>
            Say hello
          </a>
        </nav>

        <button
          className={`navbar__toggle ${open ? "navbar__toggle--open" : ""}`}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}
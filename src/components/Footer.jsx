import React from "react";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <p>© {year} Doyel Hazra. Built with React.</p>
      <a href="#top" className="footer__top">Back to top</a>
    </footer>
  );
}
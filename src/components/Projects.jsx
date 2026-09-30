import React from "react";
const PROJECTS = [
  {
    id: "lesionmamba",
    accent: "crimson",
    name: "LesionMamba",
    tagline: "A nine-class skin lesion classifier combining a CNN backbone with a native 2D state-space branch.",
    description:
      "Built on HAM10000, the model pairs a ResNet50 backbone with a true Mamba2D branch, using CBAM attention, ABCDE medical-prior embeddings, and an adaptive state-space fusion layer to combine both branches. Preprocessing runs CLAHE, K-Means, and GrabCut before training.",
    metrics: [
      { value: "91%", label: "test accuracy, EfficientNet-B3 + CBAM" },
      { value: "87%", label: "test accuracy, SkinVMamba variant" },
      { value: "11", label: "ablation configurations tested" },
    ],
    stack: ["TensorFlow", "Python", "OpenCV", "Kaggle GPU"],
    note: "Research paper and presentation in progress.",
    links: [],
  },
  {
    id: "swachhai",
    accent: "teal",
    name: "SwachhAI",
    tagline: "A municipal waste-management platform modeled on West Bengal's real municipality structure.",
    description:
      "Rather than a generic admin/user split, SwachhAI encodes a five-tier role hierarchy that mirrors how a West Bengal municipality actually operates, from ward-level staff up to municipal oversight.",
    metrics: [
      { value: "5", label: "role tiers modeled" },
      { value: "Live", label: "deployed and in use" },
    ],
    stack: ["React", "TypeScript", "Vite", "Supabase", "shadcn/ui"],
    note: null,
    links: [
      { label: "Live site", href: "https://swachhai-psi.vercel.app" },
      { label: "GitHub", href: "https://github.com/Doyel-H19a/Waste-Management2" },
    ],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>
      <div className="projects__list">
        {PROJECTS.map((p) => (
          <article className={`project-card project-card--${p.accent}`} key={p.id}>
            <div className="project-card__header">
              <h3>{p.name}</h3>
              <p className="project-card__tagline">{p.tagline}</p>
            </div>

            <p className="project-card__description">{p.description}</p>

            <dl className="project-card__metrics">
              {p.metrics.map((m) => (
                <div key={m.label}>
                  <dt>{m.value}</dt>
                  <dd>{m.label}</dd>
                </div>
              ))}
            </dl>

            <ul className="project-card__stack">
              {p.stack.map((s) => (
                <li key={s} className="chip chip--on-card">{s}</li>
              ))}
            </ul>

            {p.note && <p className="project-card__note">{p.note}</p>}

            {p.links.length > 0 && (
              <div className="project-card__links">
                {p.links.map((link) => (
                  <a key={link.label} href={link.href} target="_blank" rel="noreferrer">
                    {link.label}
                  </a>
                ))}
              </div>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}
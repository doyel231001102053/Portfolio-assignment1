import React from "react";
const GROUPS = [
  { title: "Languages", items: ["Python", "JavaScript", "Java", "C++"] },
  { title: "ML & data", items: ["TensorFlow", "OpenCV", "Kaggle GPU pipelines"] },
  { title: "Web", items: ["React", "Node.js"] },
  { title: "Certifications", items: ["Udemy — Java", "Udemy — Full-Stack Web Development"] },
];

export default function Skills() {
  return (
    <section id="skills" className="skills">
      <h2>Skills</h2>
      <div className="skills__grid">
        {GROUPS.map((group) => (
          <div className="skills__group" key={group.title}>
            <h3>{group.title}</h3>
            <ul className="skills__chips">
              {group.items.map((item) => (
                <li key={item} className="chip">{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
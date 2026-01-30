import React from "react";

function Skills() {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "UI/UX Design",
    "AI-Assisted Development",
  ];

  return (
    <section className="section skills" id="skills">
      <h2 className="section-title">My Skills</h2>

      <ul className="skills-list">
        {skills.map((skill, index) => (
          <li key={index} className="skill-item">
            {skill}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Skills;


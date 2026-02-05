import React, { useState } from "react";
import ProjectModal from "./ProjectModal";
import teacherImg from "../assets/teacher.png";
import studentImg from "../assets/student.png";

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
    const projects = [
    {
      title: "Personal Portfolio Website (Design System)",
      description:
        "A React-based personal portfolio built with a clear design system. This project focuses on consistent color usage, typography, spacing logic, and reusable components to create a clean, professional, and user-friendly interface.",
      skills: "React • CSS Variables • UI/UX Design • Design Systems",
      designSystem: {
        colors:
          "Primary: Deep Maroon (#701C1C), Background: Soft Beige (#F0EAD6), Neutral tones for readability.",
        typography:
          "Clean sans-serif fonts with clear hierarchy for headings, body text, and UI elements.",
        layout:
          "Grid-based layout with consistent spacing, responsive sections, and clear visual hierarchy.",
        components:
          "Reusable components such as Navbar, Hero, Cards, Buttons, and Modals.",
      },
    },
,
    {
      title: "UI/UX Design Projects (OJT – Learning & Development System)",
      description:
        "Real client UI/UX design projects completed during my On-the-Job Training, focusing on usability, layout, and user experience for a Learning & Development System.",
      skills: "UI/UX Design • Figma • Wireframing • Client Work",
      externalLink:
        "https://docs.google.com/spreadsheets/d/1boonInaD-MhTQIprx6VmXr4z2fZ73i9f7EHmUgqhjek/edit",
    },
,
,
    {
  title: "AI Emotion Detector for Online Classes (Capstone Project)",
  description:
    "An AI-assisted system designed to analyze student emotions during online classes using Face API, helping educators understand engagement and emotional responses.",
  skills: "Face API • API Integration • AI-Assisted Development • UI/UX Design",
  capstone: {
    overview:
      "This system supports two primary users: teachers and students. It uses Face API to detect facial expressions during lesson viewing and translates them into emotional insights.",

    teacherView: {
      title: "Teacher Dashboard",
      description:
        "The teacher view displays lesson materials alongside a summary chart of detected student emotions. It also includes detailed student logs showing individual emotional responses after viewing the lesson.",
      image: teacherImg,
    },

    studentView: {
      title: "Student Interface",
      description:
        "The student view allows learners to access lesson materials while their camera captures facial expressions. Detected emotions are recorded and shown in an emotion log for transparency.",
      image: studentImg,
    },

    aiFlow:
      "Facial data is captured via the user's camera, processed through Face API, and converted into emotional data. The results are then visualized through charts and logs for both students and teachers.",
  },
},

,
  ];


  return (
    <section className="section projects" id="projects">
      <h2 className="section-title">Projects</h2>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="card project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <p className="project-skills">{project.skills}</p>

            {project.externalLink ? (
               <a
                href={project.externalLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn project-btn"
               >
                View Project
              </a>
            ) : (
            <button
              className="btn project-btn"
              onClick={() => setSelectedProject(project)}
            >
              View Project
            </button>
            )} </div>
        ))}
      </div>

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}

export default Projects;

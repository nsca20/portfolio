import React from "react";

function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          ✕
        </button>

        <h2>{project.title}</h2>
        <p className="modal-description">{project.description}</p>

        {project.designSystem && (
          <>
            <h3>Design System</h3>

            <h4>🎨 Color Palette</h4>
            <p>{project.designSystem.colors}</p>

            <h4>🔤 Typography</h4>
            <p>{project.designSystem.typography}</p>

            <h4>📐 Layout & Spacing</h4>
            <p>{project.designSystem.layout}</p>

            <h4>🧩 Components</h4>
            <p>{project.designSystem.components}</p>
          </>

        )} {project.capstone && (
            <>
              <h3>Project Overview</h3>
              <p>{project.capstone.overview}</p>

              <h3>{project.capstone.teacherView.title}</h3>
              <img
                src={project.capstone.teacherView.image}
                alt="Teacher Dashboard"
                className="modal-image"
              />
              <p>{project.capstone.teacherView.description}</p>

              <h3>{project.capstone.studentView.title}</h3>
              <img
                src={project.capstone.studentView.image}
                alt="Student Interface"
                className="modal-image"
              />
              <p>{project.capstone.studentView.description}</p>

              <h3>AI Workflow</h3>
              <p>{project.capstone.aiFlow}</p>
            </>
          )}
      </div>
    </div>
  );
}

export default ProjectModal;

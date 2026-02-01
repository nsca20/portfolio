import React from "react";
import profile from "../assets/profile.png";

function About() {
  return (
    <section className="section about" id="about">
      <div className="about-container">
        
        {/* Photo */}
        <div className="about-image">
          <img
            src={profile}
            alt="Nicole Alejandro"
          />
        </div>

        {/* Content */}
        <div className="about-content">
          <h2 className="section-title">About Me</h2>

          <p>
            Hi! I’m <strong>Nicole Alejandro</strong>, a Junior Web Developer with a
            strong foundation in front-end development, UI/UX design, and
            AI-assisted tools.
          </p>

          <p>
            My journey in technology started during senior high school when I
            pursued the TVL–ICT track, eventually graduating as an honor student.
            I continued this path by earning a Bachelor of Science in Information
            Technology, graduating <strong>cum laude</strong>.
          </p>

          <p>
            After college, I explored different roles such as Office Staff,
            Sales Assistant, barista, and Receiving Clerk. These experiences
            helped me build strong communication skills, adaptability, and
            attention to detail — qualities I now bring into my development work.
          </p>

          <p>
            Today, I am fully committed to pursuing a career in web development.
            I enjoy creating clean, user-friendly interfaces and continuously
            improving my skills using modern and AI-assisted tools.
          </p>

          <ul className="about-highlights">
            <li>🎓 Cum Laude Graduate</li>
            <li>🎨 UI/UX Design Focus</li>
            <li>⚛️ React & Front-End Development</li>
            <li>🤖 AI-Assisted Development</li>
          </ul>
        </div>

      </div>
    </section>
  );
}

export default About;

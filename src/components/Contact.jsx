import React from "react";

function Contact() {
  return (
    <section id="contact" className="contact-section">
      <h2 className="contact-title">Get in Touch</h2>

      <p className="contact-text">
        I’m open to opportunities, collaborations, and learning experiences.
        Feel free to reach out — I’d love to connect!
      </p>

      <div className="contact-info">
        <p>
          📧 Email:{" "}
          <a href="mailto:sherine20cheon@gmail.com">
            sherine20cheon@gmail.com
          </a>
        </p>

        {/* LinkedIn can be added later */}
        {/* <p>
          💼 LinkedIn:{" "}
          <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noreferrer">
            View Profile
          </a>
        </p> */}
      </div>
    </section>
  );
}

export default Contact;

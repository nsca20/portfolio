import "./Home.css";
import profile from "../assets/profile.png"; // your background-removed photo

function Home() {
  return (
    <section className="home">
      <div className="home-container">
        
        {/* LEFT CONTENT */}
        <div className="home-text">
          <p className="intro">Hi, I’m Nicole!</p>

          <h1 className="title">
            Junior Web Developer <br />
            <span>UI/UX Enthusiast • AI-Assisted Developer</span>
          </h1>

          <p className="description">
            I design and build clean, user-focused web experiences with a balance
            of logic, creativity, and modern tools.
          </p>

          <div className="home-buttons">
            <a href="#projects" className="btn primary">View Projects</a>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="home-image">
          <img src={profile} alt="Nicole Alejandro" />
        </div>

      </div>
    </section>
  );
}

export default Home;

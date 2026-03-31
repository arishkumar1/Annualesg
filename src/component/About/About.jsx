import "./About.css";
import "../../common.css";
import  Arish from"../../assets/ar.png"

const About = () => {
  return (
    <section className="hero">
      <div className="hero-container">

        {/* LEFT CONTENT */}
        <div className="hero-text">
          <h1>
            Hi, I'm <span>Arish Kumar</span>
          </h1>
          <p>
            BCA Student & Aspiring Full Stack Developer passionate about building modern web applications.
          </p>

          <div className="hero-buttons">
            <button className="btn primary">View Projects</button>
            <button className="btn secondary">Contact Me</button>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="hero-image">
        
             <img src={Arish} alt="Arish" />
       
        </div>

      </div>
    </section>
  );
};

export default About;
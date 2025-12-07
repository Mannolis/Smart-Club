import "../app.css";
import Navbar from "./navbar";
export default function AboutUs() {
  return (
    <div>
      <Navbar />

      <div className="about-container">
        <main className="about-main">
          <h1 className="about-title">About Us</h1>

          <p className="about-text">
            Smart Club was created by a group of students at AUB Mediterraneo 
            with the goal of improving how students discover clubs and events 
            on campus. We wanted to build a platform that is clean, intuitive, 
            and genuinely useful for everyday student life.
          </p>

          {/* Team Image */}
          <div className="about-image-wrapper">
            <img src="/AboutUs.jpg" alt="Smart Club Team" />
          </div>

          {/* Team Members */}
          <section className="about-team">
            <div className="team-member">
              <h3>Waleed</h3>
              <p>
                Waleed worked on the Event Calendar and News pages. 
                He focused on presenting information in a clear and 
                structured way, making it easy for users to stay up 
                to date with campus activities.
              </p>
            </div>

            <div className="team-member">
              <h3>Zeyad</h3>
              <p>
                Zeyad developed the Discover Clubs and About Us pages. 
                His work centered around helping students explore different 
                campus communities while keeping the user experience simple 
                and visually coherent.
              </p>
            </div>

            <div className="team-member">
              <h3>Emanuel</h3>
              <p>
                Emanuel handled the core structure of the application, 
                including routing, authentication logic, the events system, 
                and the user profile functionality. He ensured the platform 
                worked smoothly across all pages.
              </p>
            </div>
          </section>
        </main>

        <footer className="about-footer">
          <div className="footer-item">📧 smartclub@aubmed.ac.cy</div>
          <div className="footer-item">📍 AUB Mediterraneo, Paphos, Cyprus</div>

          <div className="footer-copyright">
            © {new Date().getFullYear()} Smart Club. All rights reserved.
          </div>
        </footer>
      </div>
    </div>
  );
}

import "../app.css";
import Navbar from "./navbar";

export default function News() {
  return (
    <div>
      <Navbar />
      <section className="news-page">
        <h1 className="news-header">📰 Club News & Announcements</h1>

        <div className="news-card">
          <h2 className="news-title">Culture Fest – November 15th</h2>
          <div className="news-content">
            <div className="news-description">
              <p>
                Club Fest is happening this Friday! 
                Join us for a vibrant showcase of student clubs, performances, and sign-up opportunities. 
                Let's discover your next passion!
              </p>
            </div>
            <div className="news-image">
              {/* Local image from public/newsImages */}
              <img src="/newsImages/cultureFest.png" alt="Club Fest" />
            </div>
          </div>
        </div>

        <div className="news-card">
          <h2 className="news-title">Ohi Day March – October 28</h2>
          <div className="news-content">
            <div className="news-description">
              <p>
                AUB Mediterraneo will be joining the annual Ohi Day march held on October 28! 
                All club members are encouraged to participate and show unity. 
                Let’s make this celebration unforgettable!
              </p>
            </div>
            <div className="news-image">
              <img src="/newsImages/ohiDay.png" alt="Ohi Day March" />
            </div>
          </div>
        </div>

        <div className="news-card">
          <h2 className="news-title">Christmas Party — December 5</h2>
          <div className="news-content">
            <div className="news-description">
              <p>Join us for the final Student Body gathering before exam season begins!  
              We’re hosting a festive Christmas Party on <strong>December 5th 3:00PM-9:00PM</strong>.  
              Expect music, activities, snacks, and a warm celebration to wrap up the semester — don’t miss the last big event of the year!
              </p>
            </div>
            <div className="news-image">
            <img src="/newsImages/christmasParty.png" alt="Christmas Party Celebration" />
            </div>
          </div>
        </div>
      </section>

      <footer className="about-footer">
          <div className="footer-item">📧 smartclub@aubmed.ac.cy</div>
          <div className="footer-item">📍 AUB Mediterraneo, Paphos, Cyprus</div>

          <div className="footer-copyright">
            © {new Date().getFullYear()} Smart Club. All rights reserved.
          </div>
        </footer>
    </div>
  );
}
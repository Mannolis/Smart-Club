import "../app.css";
import Navbar from "./navbar";

export default function News() {
  return (
    <div>
      <Navbar />
      <section className="news-page">
        <h1 className="news-header">📰 Club News & Announcements</h1>

        <div className="news-card">
          <h2 className="news-title">Club Fest – November 15th</h2>
          <div className="news-content">
            <div className="news-description">
              <p>
                Club Fest is happening this Friday! Join us for a vibrant showcase of student clubs, performances, and sign-up opportunities. Don’t miss out on discovering your next passion!
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
                AUB Mediterraneo will be joining the annual Ohi Day march held on October 28! All club members are encouraged to participate and show unity. Let’s make this celebration unforgettable!
              </p>
            </div>
            <div className="news-image">
              {/* Local image from public/newsImages */}
              <img src="/newsImages/ohiDay.png" alt="Ohi Day March" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
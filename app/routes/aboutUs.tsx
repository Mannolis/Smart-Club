import "../app.css"; // CSS file
import Navbar from "./navbar";

export default function AboutUs() {
  return (
    <div>
        <Navbar />
        <div className="about-container">
          <main className="about-main">
            <h1 className="about-title">About Us</h1>
            <p className="about-text">
            We are a passionate team focused on building clean, modern, and
            reliable digital solutions. Our mission is to create simple,
            efficient, and user-friendly experiences for everyone.
            </p>
          </main>


          <footer className="about-footer">
            <div className="footer-item">📧 zeyad@smartclub.com</div>
            <div className="footer-item">📞 +357 999 653 91</div>
            <div className="footer-item">📍 AUB Mediterraneo, Paphos, Cyprus</div>


            <div className="footer-copyright">
            © {new Date().getFullYear()} Smart Club. All rights reserved.
            </div>
          </footer>
        </div>
    </div>
  );
}
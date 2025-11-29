import React from "react";
import { useNavigate } from "react-router";
import "../app.css"; // CSS file

export default function Navbar() {
  const isLoggedIn = false; // change to true to test
  let navigate = useNavigate();
  
  return (
    <nav className="navbar">
      <div className="logo">Smart Club</div>

      <div className="nav-buttons">
        <button onClick={() => navigate("/")}>Home</button>
        <button onClick={() => navigate("/news")}>News</button>
        <button onClick={() => navigate("/discover-clubs")}>Discover Clubs</button>
        <button onClick={() => navigate("/events")}>Events</button>
        <button onClick={() => navigate("/about-us")}>About Us</button>
        <button onClick={() => navigate("/event-calendar")}>Event Calendar</button>
      </div>

  {/* Right Side:  Profile OR Log In */}
  <div className="profile-area">
    {isLoggedIn ? (
      <div className="profile">
        <img src="https://via.placeholder.com/32" alt="Profile" />
        <span>Username</span>
      </div>
    ) : (
      <button className="login-btn">Log In / Sign Up</button>
    )}
  </div>
</nav>
  );
}




import React from "react";
import { useNavigate } from "react-router";
import "../app.css";

export default function Navbar() {
  const navigate = useNavigate();

  // read login state from localStorage each render
  const isLoggedIn =
    typeof window !== "undefined" &&
    localStorage.getItem("isLoggedIn") === "true";

  const username =
    typeof window !== "undefined"
      ? localStorage.getItem("username") || "Profile"
      : "Profile";

  return (
    <nav className="navbar">
      <div className="logo" onClick={() => navigate("/")}>
        Smart Club
      </div>

      <div className="nav-buttons">
        <button onClick={() => navigate("/")}>Home</button>
        <button onClick={() => navigate("/news")}>News</button>
        <button onClick={() => navigate("/discover-clubs")}>
          Discover Clubs
        </button>
        <button onClick={() => navigate("/events")}>Events</button>
        <button onClick={() => navigate("/about-us")}>About Us</button>
        <button onClick={() => navigate("/event-calendar")}>
          Event Calendar
        </button>
      </div>

      <div className="profile-area">
        {isLoggedIn ? (
          <div
            className="profile"
            onClick={() => navigate("/profile")}
            style={{ cursor: "pointer" }}
          >
            <div className="nav-profile-avatar">
              {localStorage
                .getItem("username")
                ?.charAt(0)
                .toUpperCase()}
            </div>
          <span>{localStorage.getItem("username")}</span>
        </div>

        ) : (
          <button
            className="login-btn"
            onClick={() => navigate("/login")}
          >
            Log In / Sign Up
          </button>
        )}
      </div>

    </nav>
  );
}

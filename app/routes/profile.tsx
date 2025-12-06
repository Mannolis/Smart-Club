import React from "react";
import "../app.css";
import Navbar from "./navbar";

export default function ProfilePage() {
  const username = localStorage.getItem("username") || "Student";

  // Placeholder clubs (can be dynamic later)
  const clubs = ["Chess Club", "Music Club", "Robotics Club"];

  return (
    <div>
      {/* ✅ NAVBAR */}
      <Navbar />

      <div className="profile-page">
        <div className="profile-card">
          {/* Header */}
          <div className="profile-header">
            <div className="profile-avatar">
              {username.charAt(0).toUpperCase()}
            </div>

            <div>
              <h1>Hi, {username}</h1>
              <p className="profile-tagline">
                AUB Mediterraneo student · Smart Club member
              </p>
            </div>
          </div>

          {/* Account info */}
          <div className="profile-section">
            <h2 className="profile-section-title">Account</h2>
            <p>
              <strong>Username:</strong> {username}
            </p>
          </div>

          {/* Clubs */}
          <div className="profile-section">
            <h2 className="profile-section-title">Your Clubs</h2>

            {clubs.length === 0 ? (
              <p className="profile-empty">
                You haven’t joined any clubs yet. Explore clubs to get started!
              </p>
            ) : (
              <div className="profile-clubs-list">
                {clubs.map((club, index) => (
                  <span key={index} className="profile-club-pill">
                    {club}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

import React, { useState } from "react";
import { useNavigate } from "react-router";
import "../app.css";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (!username) {
      alert("Please enter a username");
      return;
    }

    localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem("username", username);

    navigate("/");
  }

  return (
    <div className="login-page">
      <div className="login-card">
        <h1>Welcome to Smart Club</h1>
        <p className="login-subtitle">
          Log in or sign up to access events, clubs, and more
        </p>

        <form onSubmit={handleSubmit}>
          <label>
            Username
            <input
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter your username"
            />
          </label>

          <label>
            Password
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
            />
          </label>

          <button type="submit" className="signup-btn login-btn-main">
            Continue
          </button>
        </form>

        <p className="login-footer">
          Don’t have an account? <span>Just enter a username</span>
        </p>
      </div>
    </div>
  );
}

import type { Route } from "./+types/home";
import React from "react";
import { useNavigate } from "react-router";
import "../app.css"; // CSS file
import Navbar from "./navbar";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Smart-Club" },
    { name: "description", content: "Welcome to Smart Club!" },
  ];
}

function SignupButton() {
  const [signedUp, setSignedUp] = React.useState(false);

  function toggleSignup() {
    setSignedUp(!signedUp);
  }

  return (
    <button
      className="signup-btn"
      onClick={toggleSignup}
      style={{
        backgroundColor: signedUp ? "green" : undefined
      }}
    >
      {signedUp ? "Signed up!" : "Sign Up"}
    </button>
  );
}

export default function HomePage() {
  const isLoggedIn = false; // change to true to test
  let navigate = useNavigate();

  return (
  <div>
    <Navbar />
    
  {/* Hero Section */}
  <section className="hero">
  <div className="hero-overlay">
    <h1>Welcome to Smart Club</h1>
    <p>
      Explore a variety of student clubs, connect with your community, and
      discover your next passion.
    </p>
    <button className="hero-button">Explore Clubs</button>

  </div>
</section>


  {/* For You Section */}
  <section className="for-you">
    <h2>For You</h2>

    <div className="event-card">
      <h3 className="event-title">Robotics Club — Workshop Day</h3>
      <p className="event-time">📅 Friday, March 15th — 4:00 PM</p>
      <p className="event-description">
        Join us for a hands-on robotics workshop where we explore Arduino,
        sensors, and build mini-projects. Open to all skill levels!
      </p>

      <div className="event-buttons">
        <SignupButton />
        <button className="contact-btn">Learn More</button>
      </div>
    </div>

    <div className="event-card">
      <h3 className="event-title">Art Society — Creative Jam</h3>
      <p className="event-time">📅 Tuesday, March 19th — 6:00 PM</p>
      <p className="event-description">
        A relaxed evening of painting, drawing, and collaborative art.
        Materials provided — just bring yourself!
      </p>

      <div className="event-buttons">
        <SignupButton />
        <button className="contact-btn">Learn More</button>
      </div>
    </div>

    <div className="event-card">
      <h3 className="event-title">Chess Club — Tournament Night</h3>
      <p className="event-time">📅 Sunday, March 24th — 2:00 PM</p>
      <p className="event-description">
        Test your skills in a friendly, open-bracket chess tournament.
        All ratings welcome.
      </p>

      <div className="event-buttons">
        <SignupButton />
        <button className="contact-btn">Learn More</button>
      </div>
    </div>
  </section>


    </div>
  );
}




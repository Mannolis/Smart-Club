import "../app.css";
import Navbar from "./navbar";
import React from "react";


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

export default function Events() {
  // Placeholder events – newest first
  const events = [
  {
    id: 1,
    title: "Robotics Club – Intro to Autonomous Systems",
    time: "April 5, 2025 · 5:00 PM",
    description:
      "An introductory workshop covering the basics of autonomous robots, sensors, and control systems."
  },
  {
    id: 2,
    title: "Finance and Investment Club – Stock Market Basics",
    time: "April 2, 2025 · 6:30 PM",
    description:
      "Learn the fundamentals of stock markets, portfolio building, and long-term investing strategies."
  },
  {
    id: 3,
    title: "Programming Club – Hack Night",
    time: "March 29, 2025 · 4:00 PM",
    description:
      "Collaborative coding evening focused on solving problems, practicing algorithms, and sharing projects."
  },
  {
    id: 4,
    title: "Chess Club – Open Tournament",
    time: "March 27, 2025 · 3:00 PM",
    description:
      "Friendly chess tournament open to all skill levels. No prior competitive experience required."
  },
  {
    id: 5,
    title: "Business Students Society – Career Networking Session",
    time: "March 25, 2025 · 6:00 PM",
    description:
      "Meet alumni and professionals to discuss career paths, internships, and industry expectations."
  },
  {
    id: 6,
    title: "Psychology Students Society – Mental Health Awareness Talk",
    time: "March 22, 2025 · 5:30 PM",
    description:
      "An open discussion on mental well-being, stress management, and available student support services."
  },
  {
    id: 7,
    title: "Dance Club – Open Practice Session",
    time: "March 20, 2025 · 4:30 PM",
    description:
      "Join the dance club for an open practice session exploring different dance styles and routines."
  },
  {
    id: 8,
    title: "Athletics Club – Campus Fitness Challenge",
    time: "March 18, 2025 · 2:00 PM",
    description:
      "Team-based fitness challenges designed to promote physical health and friendly competition."
  },
  {
    id: 9,
    title: "PPE Society – Debate on Contemporary Global Issues",
    time: "March 15, 2025 · 6:00 PM",
    description:
      "Interactive debate session discussing current political, philosophical, and economic topics."
  }
];

  return (
    <div>
      <Navbar />

      <div style={{ padding: "40px" }}>
        <h1 style={{ color: "var(--aub-maroon)", textAlign: "center" }}>
          Latest Events
        </h1>

        {events.map((event) => (
          <div key={event.id} className="event-card">
            <div className="event-title">{event.title}</div>
            <div className="event-time">{event.time}</div>
            <div className="event-description">{event.description}</div>

            {/* ✅ Uses your existing buttons */}
            <div className="event-buttons">
              <SignupButton />
              <button className="contact-btn">Contact for Details</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

import React, { useEffect, useState } from "react";
import "../app.css";
import Navbar from "./navbar";

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
        backgroundColor: signedUp ? "green" : undefined,
      }}
    >
      {signedUp ? "Signed up!" : "Sign Up"}
    </button>
  );
}


type EventItem = {
  id: number;
  club: string;
  title: string;
  time: string;
  description: string;
  imageData?: string;
};

const STORAGE_KEY = "aubm-events";

const CLUBS_AND_SOCIETIES = [
  "Athletics club",
  "Automotive club",
  "Chess club",
  "Consulting club",
  "Cooking club",
  "Dance club",
  "Finance and Investment club",
  "Math club",
  "MUN club",
  "Music club",
  "Pause the Loop club",
  "Person Branding/Digital Marketing club",
  "Philosophy club",
  "Programming club",
  "Robotics club",
  "Running club",
  "Social Events club",
  "Stargazing club",
  "Tennis and Paddle club",
  "Umoja club",
  "Business Students Society",
  "PPE Society",
  "Psychology Students Society",
];

export default function Events() {
  const [events, setEvents] = useState<EventItem[]>([]);
  const [adminMode, setAdminMode] = useState(false);

  const [newEvent, setNewEvent] = useState({
    club: "",
    title: "",
    time: "",
    description: "",
    imageData: "",
  });

  // Load events from localStorage once
  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) return;

    try {
      const parsed = JSON.parse(stored) as EventItem[];
      if (Array.isArray(parsed)) {
        setEvents(parsed);
      }
    } catch {
      console.error("Invalid stored events");
    }
  }, []);

  // Handle text/select changes
  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) {
    const { name, value } = e.target;
    setNewEvent((prev) => ({ ...prev, [name]: value }));
  }

  // Handle image upload
  function handleImageChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      setNewEvent((prev) => ({
        ...prev,
        imageData: reader.result as string,
      }));
    };
    reader.readAsDataURL(file);
  }

  // Add event
  function handleAddEvent(e: React.FormEvent) {
    e.preventDefault();

    if (!newEvent.club || !newEvent.title || !newEvent.time) {
      alert("Club, title and time are required");
      return;
    }

    const eventToAdd: EventItem = {
      id: Date.now(),
      club: newEvent.club,
      title: newEvent.title,
      time: newEvent.time,
      description: newEvent.description || "No description provided.",
      imageData: newEvent.imageData || undefined,
    };

    setEvents((prev) => {
      const updated = [eventToAdd, ...prev];
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
      return updated;
    });

    setNewEvent({
      club: "",
      title: "",
      time: "",
      description: "",
      imageData: "",
    });
  }

  // Delete event
  function handleDeleteEvent(id: number) {
    if (!window.confirm("Delete this event?")) return;

    setEvents((prev) => {
      const updated = prev.filter((e) => e.id !== id);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
      return updated;
    });
  }

  return (
    <div>
      <Navbar />

      <div className="events-page-container">
        <div className="events-page-header">
          <h1>Events</h1>

          <label className="events-admin-toggle">
            <input
              type="checkbox"
              checked={adminMode}
              onChange={(e) => setAdminMode(e.target.checked)}
            />
            Admin mode
          </label>
        </div>

        {/* Admin form to add events */}
        {adminMode && (
          <form className="event-form" onSubmit={handleAddEvent}>
            <h2>Add Event</h2>

            <div className="form-row">
              <label>
                Club / Society
                <select
                  name="club"
                  value={newEvent.club}
                  onChange={handleChange}
                >
                  <option value="">Select...</option>
                  {CLUBS_AND_SOCIETIES.map((club) => (
                    <option key={club} value={club}>
                      {club}
                    </option>
                  ))}
                </select>
              </label>

              <label>
                Title
                <input
                  name="title"
                  value={newEvent.title}
                  onChange={handleChange}
                />
              </label>
            </div>

            <div className="form-row">
              <label>
                Date & Time
                <input
                  name="time"
                  value={newEvent.time}
                  onChange={handleChange}
                />
              </label>

              <label>
                Image (optional)
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                />
              </label>
            </div>

            <label className="full-width">
              Description
              <textarea
                name="description"
                rows={3}
                value={newEvent.description}
                onChange={handleChange}
              />
            </label>

            <button type="submit" className="signup-btn">
              Add Event
            </button>
          </form>
        )}

        {/* Event cards */}
        {events.length === 0 ? (
          <p>No events yet.</p>
        ) : (
          <div className="events-page-grid">
            {events.map((event) => (
              <div key={event.id} className="events-page-card">
                <div className="events-page-title">
                  {event.title}{" "}
                  <span style={{ fontWeight: 400 }}>({event.club})</span>
                </div>

                <div className="events-page-time">{event.time}</div>

                {event.imageData && (
                  <img
                    src={event.imageData}
                    alt={event.title}
                    className="events-page-image"
                  />
                )}

                <div className="events-page-description">
                  {event.description}
                </div>

                <div className="events-page-buttons">
                  <SignupButton />
                  <button className="contact-btn">Contact for Details</button>

                  {adminMode && (
                    <button
                      className="delete-btn"
                      onClick={() => handleDeleteEvent(event.id)}
                    >
                      Delete
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}

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

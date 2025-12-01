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
};

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
  });

  /* -----------------------------
     Load events from localStorage
  ------------------------------*/
  useEffect(() => {
    if (typeof window === "undefined") return;
    const storedEvents = localStorage.getItem("aubm-events");
    if (storedEvents) {
      try {
        setEvents(JSON.parse(storedEvents));
      } catch {
        setEvents([]);
      }
    }
  }, []);

  /* -----------------------------
     Save events to localStorage
  ------------------------------*/
  useEffect(() => {
    if (typeof window === "undefined") return;
    localStorage.setItem("aubm-events", JSON.stringify(events));
  }, [events]);

  function handleFieldChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) {
    const { name, value } = e.target;
    setNewEvent((prev) => ({ ...prev, [name]: value }));
  }

  function handleAddEvent(e: React.FormEvent) {
    e.preventDefault();

    if (!newEvent.club || !newEvent.title || !newEvent.time) {
      alert("Please fill in club, title, and time.");
      return;
    }

    const eventToAdd: EventItem = {
      id: Date.now(),
      club: newEvent.club,
      title: newEvent.title,
      time: newEvent.time,
      description: newEvent.description || "No description provided.",
    };

    setEvents((prev) => [eventToAdd, ...prev]);

    setNewEvent({
      club: "",
      title: "",
      time: "",
      description: "",
    });
  }

  /* -----------------------------
     DELETE EVENT (ADMIN ONLY)
  ------------------------------*/
  function handleDeleteEvent(eventId: number) {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this event?"
    );
    if (!confirmDelete) return;

    setEvents((prev) => prev.filter((event) => event.id !== eventId));
  }

  return (
    <div>
      <Navbar />

      <div className="events-page">
        <div className="events-header">
          <h1>Events</h1>

          <label className="admin-toggle">
            <input
              type="checkbox"
              checked={adminMode}
              onChange={(e) => setAdminMode(e.target.checked)}
            />
            <span> Admin mode</span>
          </label>
        </div>

        {/* -----------------------------
           ADD EVENT FORM (ADMIN)
        ------------------------------*/}
        {adminMode && (
          <form className="event-form" onSubmit={handleAddEvent}>
            <h2>Add Event</h2>

            <div className="form-row">
              <label>
                Club / Society
                <select
                  name="club"
                  value={newEvent.club}
                  onChange={handleFieldChange}
                >
                  <option value="">Select a club…</option>
                  {CLUBS_AND_SOCIETIES.map((club) => (
                    <option key={club} value={club}>
                      {club}
                    </option>
                  ))}
                </select>
              </label>

              <label>
                Event Title
                <input
                  name="title"
                  value={newEvent.title}
                  onChange={handleFieldChange}
                  placeholder="Event title"
                />
              </label>
            </div>

            <div className="form-row">
              <label>
                Date & Time
                <input
                  name="time"
                  value={newEvent.time}
                  onChange={handleFieldChange}
                  placeholder="April 3, 2025 · 6:00 PM"
                />
              </label>
            </div>

            <div className="form-row">
              <label className="full-width">
                Description
                <textarea
                  name="description"
                  rows={3}
                  value={newEvent.description}
                  onChange={handleFieldChange}
                />
              </label>
            </div>

            <button type="submit" className="signup-btn">
              Add Event
            </button>
          </form>
        )}

        {/* -----------------------------
           EVENTS LIST
        ------------------------------*/}
        {events.length === 0 ? (
          <p>No events have been added yet.</p>
        ) : (
          events.map((event) => (
            <div key={event.id} className="event-card">
              <div className="event-title">
                {event.title}
                <span style={{ fontWeight: 400 }}> ({event.club})</span>
              </div>

              <div className="event-time">{event.time}</div>
              <div className="event-description">{event.description}</div>

              <div className="event-buttons">
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
          ))
        )}
      </div>
    </div>
  );
}

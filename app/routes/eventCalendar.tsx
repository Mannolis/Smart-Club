import React, { useEffect, useState } from "react";
import "../app.css";
import Navbar from "./navbar"; // Make sure the path is correct in your project structure

type CalendarEvent = {
  id: number;
  title: string;
  club: string;
  date: string; // YYYY-MM-DD format
  time: string;
  description: string;
};

// Sample events - you can replace these with events from storage or props
const sampleEvents: CalendarEvent[] = [
  {
    id: 1,
    title: "Welcome Back BBQ",
    club: "Social Events Club",
    date: "2025-09-05",
    time: "6:00 PM",
    description: "Start the year with food and fun!"
  },
  {
    id: 2,
    title: "Chess Tournament",
    club: "Chess Club",
    date: "2025-09-12",
    time: "2:00 PM",
    description: "Open bracket tournament for all skill levels"
  },
  {
    id: 3,
    title: "Robotics Workshop",
    club: "Robotics Club",
    date: "2025-09-15",
    time: "4:00 PM",
    description: "Hands-on Arduino project building"
  },
  {
    id: 4,
    title: "Stargazing Night",
    club: "Stargazing Club",
    date: "2025-09-20",
    time: "8:00 PM",
    description: "Observe the autumn constellations"
  },
  {
    id: 5,
    title: "Finance Seminar",
    club: "Finance and Investment Club",
    date: "2025-10-03",
    time: "5:00 PM",
    description: "Introduction to stock market basics"
  },
  {
    id: 6,
    title: "Cooking Workshop",
    club: "Cooking Club",
    date: "2025-10-10",
    time: "3:00 PM",
    description: "Learn to make Mediterranean cuisine"
  },
  {
    id: 7,
    title: "MUN Conference Prep",
    club: "MUN Club",
    date: "2025-10-18",
    time: "4:00 PM",
    description: "Prepare for upcoming conference"
  },
  {
    id: 8,
    title: "Philosophy Debate",
    club: "Philosophy Club",
    date: "2025-11-07",
    time: "6:00 PM",
    description: "Topic: Ethics in the Digital Age"
  },
  {
    id: 9,
    title: "Hackathon 2025",
    club: "Programming Club",
    date: "2025-11-15",
    time: "9:00 AM",
    description: "24-hour coding challenge"
  },
  {
    id: 10,
    title: "Winter Concert",
    club: "Music Club",
    date: "2025-12-12",
    time: "7:00 PM",
    description: "Annual winter performance showcase"
  },
  {
    id: 11,
    title: "New Year Planning",
    club: "Business Students Society",
    date: "2026-01-15",
    time: "5:00 PM",
    description: "Set your business goals for 2026"
  },
  {
    id: 12,
    title: "Tennis Tournament",
    club: "Tennis and Paddle Club",
    date: "2026-02-08",
    time: "10:00 AM",
    description: "Singles and doubles competitions"
  },
  {
    id: 13,
    title: "Poetry Reading",
    club: "PPE Society",
    date: "2026-02-20",
    time: "6:00 PM",
    description: "Share and discuss contemporary poetry"
  },
  {
    id: 14,
    title: "Spring Dance Show",
    club: "Dance Club",
    date: "2026-03-14",
    time: "7:30 PM",
    description: "Showcase of dance styles from around the world"
  },
  {
    id: 15,
    title: "Math Competition",
    club: "Math Club",
    date: "2026-03-25",
    time: "2:00 PM",
    description: "Team-based problem solving challenge"
  },
  {
    id: 16,
    title: "Car Show",
    club: "Automotive Club",
    date: "2026-04-10",
    time: "11:00 AM",
    description: "Display your ride and talk cars"
  },
  {
    id: 17,
    title: "Charity Run",
    club: "Running Club",
    date: "2026-04-26",
    time: "7:00 AM",
    description: "5K run to raise funds for local charity"
  },
  {
    id: 18,
    title: "Cultural Night",
    club: "Umoja Club",
    date: "2026-05-08",
    time: "6:00 PM",
    description: "Celebrate diversity through food, music, and dance"
  },
  {
    id: 19,
    title: "Wellness Workshop",
    club: "Pause the Loop Club",
    date: "2026-05-15",
    time: "4:00 PM",
    description: "Mental health awareness and mindfulness session"
  },
  {
    id: 20,
    title: "End of Year Gala",
    club: "Social Events Club",
    date: "2026-05-29",
    time: "8:00 PM",
    description: "Celebrate the year's achievements!"
  }
];

const MONTHS = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

const DAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

export default function EventCalendar() {
  // Start at September 2025
  const [currentYear, setCurrentYear] = useState(2025);
  const [currentMonth, setCurrentMonth] = useState(8); // September is month 8 (0-indexed)
  const [selectedDate, setSelectedDate] = useState<string | null>(null);

  // Get days in month
  function getDaysInMonth(year: number, month: number) {
    return new Date(year, month + 1, 0).getDate();
  }

  // Get first day of month (0 = Sunday)
  function getFirstDayOfMonth(year: number, month: number) {
    return new Date(year, month, 1).getDay();
  }

  // Navigate months
  function goToPreviousMonth() {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
  }

  function goToNextMonth() {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
  }

  // Check if navigation should be disabled
  const isBeforeStart = currentYear < 2025 || (currentYear === 2025 && currentMonth < 8);
  const isAfterEnd = currentYear > 2026 || (currentYear === 2026 && currentMonth > 5);

  // Get events for a specific date
  function getEventsForDate(year: number, month: number, day: number) {
    const dateStr = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
    return sampleEvents.filter(event => event.date === dateStr);
  }

  // Get all events for current month
  function getEventsForMonth() {
    return sampleEvents.filter(event => {
      const eventDate = new Date(event.date);
      return eventDate.getFullYear() === currentYear && eventDate.getMonth() === currentMonth;
    });
  }

  // Build calendar grid
  function buildCalendarDays() {
    const daysInMonth = getDaysInMonth(currentYear, currentMonth);
    const firstDay = getFirstDayOfMonth(currentYear, currentMonth);
    const days = [];

    // Empty cells before first day
    for (let i = 0; i < firstDay; i++) {
      days.push(<div key={`empty-${i}`} className="calendar-day empty"></div>);
    }

    // Actual days
    for (let day = 1; day <= daysInMonth; day++) {
      const dateStr = `${currentYear}-${String(currentMonth + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
      const eventsOnDay = getEventsForDate(currentYear, currentMonth, day);
      const hasEvents = eventsOnDay.length > 0;
      const isSelected = selectedDate === dateStr;

      days.push(
        <div
          key={day}
          className={`calendar-day ${hasEvents ? 'has-events' : ''} ${isSelected ? 'selected' : ''}`}
          onClick={() => setSelectedDate(dateStr)}
        >
          <div className="day-number">{day}</div>
          {hasEvents && <div className="event-indicator">{eventsOnDay.length}</div>}
        </div>
      );
    }

    return days;
  }

  // Get events to display
  const eventsToDisplay = selectedDate
    ? sampleEvents.filter(e => e.date === selectedDate)
    : getEventsForMonth();

  return (
    <div>
      {/* 🌟 Navbar has been added here to ensure it displays on this subpage */}
      <Navbar /> 
      <div className="calendar-container">
        <h1 className="calendar-header">Event Calendar</h1>
        <p className="calendar-subheader">Academic Year 2025-2026</p>

        {/* Calendar Navigation */}
        <div className="calendar-nav">
          <button
            onClick={goToPreviousMonth}
            disabled={isBeforeStart}
            className="calendar-nav-btn"
          >
            ← Previous
          </button>
          <h2 className="calendar-month-year">
            {MONTHS[currentMonth]} {currentYear}
          </h2>
          <button
            onClick={goToNextMonth}
            disabled={isAfterEnd}
            className="calendar-nav-btn"
          >
            Next →
          </button>
        </div>

        {/* Calendar Grid */}
        <div className="calendar-grid">
          {/* Day headers */}
          {DAYS.map(day => (
            <div key={day} className="calendar-day-header">
              {day}
            </div>
          ))}
          
          {/* Calendar days */}
          {buildCalendarDays()}
        </div>

        {/* Selected date indicator */}
        {selectedDate && (
          <div className="selected-date-info">
            <span>Showing events for {new Date(selectedDate + 'T00:00:00').toLocaleDateString('en-US', { 
              weekday: 'long', 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}</span>
            <button onClick={() => setSelectedDate(null)} className="clear-selection-btn">
              Show all events this month
            </button>
          </div>
        )}

        {/* Events List */}
        <div className="calendar-events-section">
          <h3 className="events-list-header">
            {selectedDate ? 'Events on this day' : `Events in ${MONTHS[currentMonth]}`}
          </h3>
          
          {eventsToDisplay.length === 0 ? (
            <p className="no-events">No events scheduled for this {selectedDate ? 'day' : 'month'}.</p>
          ) : (
            <div className="calendar-events-list">
              {eventsToDisplay.map(event => (
                <div key={event.id} className="calendar-event-card">
                  <div className="calendar-event-date">
                    {new Date(event.date + 'T00:00:00').toLocaleDateString('en-US', { 
                      month: 'short', 
                      day: 'numeric' 
                    })}
                  </div>
                  <div className="calendar-event-details">
                    <h4 className="calendar-event-title">
                      {event.title}
                      <span className="calendar-event-club"> — {event.club}</span>
                    </h4>
                    <p className="calendar-event-time">🕐 {event.time}</p>
                    <p className="calendar-event-description">{event.description}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
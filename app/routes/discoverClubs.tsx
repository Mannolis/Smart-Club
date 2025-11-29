import "../app.css"; // CSS file
import { Link } from "react-router";
import Navbar from "./navbar";
import clubsData from "../data/clubs.json";
import societiesData from "../data/societies.json"


export default function DiscoverClubs() {
  const clubs = clubsData;
  const societies = societiesData;
  return (
    <div className="clubs">
        <Navbar />
        <h1>Current Clubs</h1>
        {
          clubs.map((club) => (
              <Link to={`/discover-clubs/${club.id}`} className = "club-link">
                {club.name}
              </Link>
          ))
        }

        <h1>Current Societies</h1>
        {
          societies.map((society) => (
              <Link to={`/discover-clubs/${society.id}`} className = "club-link">
                {society.name}
              </Link>
          ))
        }
    </div>
  );
}
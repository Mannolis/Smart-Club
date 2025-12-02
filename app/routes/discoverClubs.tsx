import "../app.css"; // CSS file
import { Link } from "react-router";
import Navbar from "./navbar";
import clubsData from "../data/clubs.json";


export default function DiscoverClubs() {
  const clubs = clubsData;
  return (
    <div className="discover-clubs">
        <Navbar />
        <h1>Current Clubs</h1>
        {
          (() => {
            const elements = [];

            for (let i = 0; i < clubs.length; i++)
            {
              if (clubs[i].id == "501")
                break;
              elements.push(
                <Link to={`/discover-clubs/${clubs[i].id}`} className = "club-link">
                  {clubs[i].name}
                </Link>
              );
            }
            return elements;
          })()
        }

        <h1>Current Societies</h1>
        {
          (() => {
            const elements = [];

            for (let i = clubs.length - 1; i >= 0; i--)
            {
              if (clubs[i].id[0] == '0')
                break;
              
              elements.push(
                <Link to={`/discover-clubs/${clubs[i].id}`} className = "club-link">
                  {clubs[i].name}
                </Link>
              );
            }
            elements.reverse();
            return elements;
          })()
        }
    </div>
  );
}
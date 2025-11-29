import "../app.css"; // CSS file
import Navbar from "./navbar";

export default function DiscoverClubs() {
  return (
    <div className="clubs">
        <Navbar />
        <h1>Current Clubs</h1>
        <ul>
          <li>Athletics club</li>
          <li>Automotive Club</li>
          <li>Chess Club</li>
          <li>Consulting Club</li>
          <li>Cooking club</li>
          <li>Dance club</li>
          <li>Finance and Investment Club</li>
          <li>Math Club</li>
          <li>MUN Club</li>
          <li>Music club</li>
          <li>Pause the Loop Club</li>
          <li>Personal Branding/Digital Marketing Club</li>
          <li>Philosophy Club</li>
          <li>Programming club</li>
          <li>Robotics Club</li>
          <li>Running Club</li>
          <li>Social Events Club</li>
          <li>Stargazing club</li>
          <li>Tennis and Paddle Club</li>
          <li>UMOJA Club</li>
        </ul>

        <h1>Current Societies</h1>
        <ul>
          <li> Business Students Society</li>
          <li>PPE Society</li>
          <li>Psychology Students Society</li>
        </ul>
    </div>
  );
}
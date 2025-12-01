import Navbar from "./navbar";
import { useParams } from "react-router";
import clubsData from "../data/clubs.json"
import { SignupButton } from "./home";

export default function clubPages() {
    const { clubId } = useParams(); //The ID of the club I want
    const club = clubsData.find(c => c.id === clubId); //Getting all the club data from the ID

    if (!club)
    {
        return (
            <div className = "events-container">
                <Navbar />
                <h1>Club not found</h1>
            </div>
        );
    }
    return (
        <div>
            <Navbar />
            <section className = "for-you">
                <h1>{club.name}</h1>
                <p style={{textAlign: "center", fontFamily: "Arial, sans-serif", fontSize: "16px"}}>{club.description}</p>
                {club.events.length === 0 ? (
                    <h2>No events yet.</h2>
                ) : (
                    <>
                    <h2> Upcoming Events</h2>
                    <div className = "events-grid">
                    {club.events.map((event) =>(
                        <div key = {event.id} className = "event-card">
                            <h3 className = "event-title">{event.title}</h3>
                            <p className = "event-description">{event.description}</p>
                            <p className = "event-time">{event.date}</p>
                            <div className="event-buttons">
                                <SignupButton />
                                <button className="contact-btn">Learn More</button>
                            </div>
                        </div>
                    ))}
                    </div>
                    </>
                )
                }
            </section>
        </div>
    )
}
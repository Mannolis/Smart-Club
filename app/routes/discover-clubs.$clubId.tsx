import Navbar from "./navbar";
import { useParams } from "react-router";
import clubsData from "../data/clubs.json"

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
            <p>{club.description}</p>
            <h2>Upcoming Events</h2>
                {club.events.map((event) =>(
                    <div key = {event.id} className = "event-card">
                        <h3 className = "event-title">{event.title}</h3>
                        <p className = "event-description">{event.description}</p>
                        <p className = "event-time">{event.date}</p>
                    </div>
                ))}
            </section>
        </div>
    )
}
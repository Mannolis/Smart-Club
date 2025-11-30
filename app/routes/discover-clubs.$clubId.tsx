import Navbar from "./navbar";
import { useParams } from "react-router";
import clubsData from "../data/clubs.json"

export default function clubPages() {
    const { clubId } = useParams(); //The ID of the club I want
    const club = clubsData.find(c => c.id === clubId); //Getting all the club data from the ID

    console.log(clubId);
    if (!club)
    {
        return (
            <div>
                <Navbar />
                <h1>Club not found</h1>
            </div>
        );
    }
    return (
        <div>
            <Navbar />
            <h1>{club.name}</h1>
            <p>{club.description}</p>
            <h2>Upcoming Events</h2>
                {club.events.map((event) =>(
                    <li key = {event.id}>
                        <h3>{event.title}</h3>
                        <p>{event.description}</p>
                        <p>{event.date}</p>
                    </li>
                ))}
        </div>
    )
}
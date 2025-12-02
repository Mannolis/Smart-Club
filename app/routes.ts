import { type RouteConfig, index } from "@react-router/dev/routes";
import {
    type RouteConfig,
    route,
    index,
    layout,
    prefix
} from "@react-router/dev/routes";


export default [
    index("routes/home.tsx"),
    route("events", "routes/events.tsx"),
    route("about-us", "routes/aboutUs.tsx"),
    route("event-calendar", "routes/eventCalendar.tsx"),
    route("news", "routes/news.tsx"),
    route("discover-clubs", "routes/discoverClubs.tsx"),
    route("discover-clubs/:clubId", "routes/discover-clubs.$clubId.tsx")
] satisfies RouteConfig;

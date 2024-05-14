import { TEventoEvent } from "@/lib/types";
import EventCard from "./event-card";

type EventsListProps = {
    city: string;
};

export default async function EventsList({ city }: EventsListProps) {
    const res = await fetch(
        `https://bytegrad.com/course-assets/projects/evento/api/events?city=${city}`
    );
    const events: TEventoEvent[] = res.ok ? await res.json() : [];

    return (
        <section className="flex flex-wrap justify-center gap-10">
            {events.length === 0 ? (
                <p>No events found in {city}</p>
            ) : (
                events.map((event) => (
                    <EventCard key={event.id} event={event} />
                ))
            )}
        </section>
    );
}

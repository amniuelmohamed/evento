import EventCard from "./event-card";
import Link from "next/link";
import PaginationControls from "./pagination-controls";
import { getEvents } from "@/lib/server-utils";

type EventsListProps = {
    city: string;
    page?: number;
};

export default async function EventsList({ city, page = 1 }: EventsListProps) {
    const { events, totalEvents } = await getEvents(city, page);

    if (events?.length === 0) {
        return (
            <section className="text-center">
                <p className="text-lg">No events found</p>
                <Link
                    href="/"
                    className="block text-lime-500 hover:underline mt-4"
                >
                    Go back home
                </Link>
            </section>
        );
    }

    return (
        <>
            <section className="flex flex-wrap justify-center gap-10 mb-10">
                {events.map((event) => (
                    <EventCard key={event.id} event={event} />
                ))}
            </section>
            <PaginationControls
                city={city}
                page={page}
                eventsCount={totalEvents}
            />
        </>
    );
}

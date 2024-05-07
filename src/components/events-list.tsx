import { TEventoEvent } from "@/lib/types";

type EventsListProps = {
    city: string;
};

export default async function EventsList({ city }: EventsListProps) {
    await new Promise((resolve) => setTimeout(resolve, 2000));

    const res = await fetch(
        `https://bytegrad.com/course-assets/projects/evento/api/events?city=${city}`
    );
    const events: TEventoEvent[] = res.ok ? await res.json() : [];

    return (
        <section className="grid grid-cols-1 gap-5 mt-10 sm:grid-cols-2 lg:grid-cols-3">
            {events.map((event: TEventoEvent) => (
                <div
                    key={event.id}
                    className="flex flex-col gap-3 p-5 bg-gray-950 rounded-lg shadow-md"
                >
                    <h2 className="text-xl font-semibold">{event.name}</h2>
                    <p>{event.city}</p>
                </div>
            ))}
        </section>
    );
}

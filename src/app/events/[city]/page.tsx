import EventsList from "@/components/events-list";
import H1 from "@/components/h1";

type EventsPageProps = {
    params: {
        city: string;
    };
};

export default function EventsPage({ params }: EventsPageProps) {
    const { city } = params;

    return (
        <main className="grow text-center pt-20 px-3 md:px-6">
            <H1>
                {city.toLowerCase() === "all"
                    ? "All Events"
                    : `Events in ${
                          city.charAt(0).toUpperCase() + city.slice(1)
                      }`}
            </H1>

            <EventsList city={city} />
        </main>
    );
}

import Container from "@/components/container";
import EventsList from "@/components/events-list";
import H1 from "@/components/h1";
import { Suspense } from "react";

type EventsPageProps = {
    params: {
        city: string;
    };
};

export default function EventsPage({ params }: EventsPageProps) {
    const { city } = params;

    return (
        <main className="grow text-center py-20">
            <Container>
                <H1 className="mb-28">
                    {city.toLowerCase() === "all"
                        ? "All Events"
                        : `Events in ${
                              city.charAt(0).toUpperCase() + city.slice(1)
                          }`}
                </H1>

                <Suspense fallback={<p className="text-center">Loading...</p>}>
                    <EventsList city={city} />
                </Suspense>
            </Container>
        </main>
    );
}

import Container from "@/components/container";
import EventsList from "@/components/events-list";
import H1 from "@/components/h1";
import SkeletonCard from "@/components/skeleton-card";
import { capitalize } from "@/lib/utils";
import { Metadata } from "next";
import { Suspense } from "react";
import { z } from "zod";

type Props = {
    params: {
        city: string;
    };
};

type EventsPageProps = Props & {
    searchParams: {
        [key: string]: string | string[] | undefined;
    };
};

export function generateMetadata({ params }: Props): Metadata {
    const { city } = params;
    const cityCapitalized = capitalize(city);

    const title =
        city.toLowerCase() === "all"
            ? "All Events"
            : `Events in ${cityCapitalized}`;

    const description =
        city.toLowerCase() === "all"
            ? "Find the best events and book your tickets now!"
            : `Find the best events in ${cityCapitalized} and book your tickets now!`;

    return {
        title,
        description,
    };
}

const pageNumberSchema = z.coerce.number().int().positive().optional();

export default function EventsPage({ params, searchParams }: EventsPageProps) {
    const { city } = params;
    const parsedPage = pageNumberSchema.safeParse(searchParams.page);

    if (!parsedPage.success) {
        throw new Error("Invalid page number");
    }

    return (
        <main className="grow text-center py-20">
            <Container>
                <H1 className="mb-20 lg:mb-28">
                    {city.toLowerCase() === "all"
                        ? "All Events"
                        : `Events in ${capitalize(city)}`}
                </H1>

                <Suspense
                    key={city + parsedPage.data}
                    fallback={
                        <div className="flex flex-wrap justify-center gap-20">
                            {[...Array(6)].map((_, i) => (
                                <SkeletonCard key={i} />
                            ))}
                        </div>
                    }
                >
                    <EventsList city={city} page={parsedPage.data} />
                </Suspense>
            </Container>
        </main>
    );
}

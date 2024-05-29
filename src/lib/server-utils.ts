import "server-only";

import { prisma } from "./client";
import { notFound } from "next/navigation";
import { EVENTS_PER_PAGE } from "./constants";
import { unstable_cache } from "next/cache";
import { capitalize } from "./utils";

/* ========================================================================== */
// Get events from the database using Prisma
/* ========================================================================== */

export const getEvents = unstable_cache(async (city: string, page: number) => {
    const events = await prisma.eventoEvent.findMany({
        where: {
            city: city === "all" ? undefined : capitalize(city),
        },
        orderBy: {
            date: "asc",
        },
        skip: (page - 1) * EVENTS_PER_PAGE,
        take: EVENTS_PER_PAGE,
    });

    // get the total number of events
    const totalEvents = await prisma.eventoEvent.count({
        where: {
            city: city === "all" ? undefined : capitalize(city),
        },
    });

    return {
        events,
        totalEvents,
    };
});

export const getEvent = unstable_cache(async (slug: string) => {
    const event = await prisma.eventoEvent.findUnique({
        where: {
            slug,
        },
    });

    if (!event) {
        return notFound();
    }

    return event;
});

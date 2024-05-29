"use client";

import { EventoEvent } from "@prisma/client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

type EventCardProps = {
    event: EventoEvent;
};

const MotionLink = motion(Link);

export default function EventCard({ event }: EventCardProps) {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["0 1", "1.5 1"],
    });

    const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
    const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.3, 1]);

    return (
        <MotionLink
            ref={ref}
            href={`/event/${event.slug}`}
            className="flex-1 basis-[22rem] h-[380px] max-w-[500px] "
            style={{
                // @ts-ignore
                scale: scaleProgress,
                // @ts-ignore
                opacity: opacityProgress,
            }}
            initial={{ scale: 0.8, opacity: 0 }}
        >
            <section className="relative flex flex-col items-center h-full rounded-xl bg-white/5 overflow-hidden state-effects">
                <Image
                    src={event.imageUrl}
                    alt="Event Image"
                    height={0}
                    width={0}
                    sizes="100vw"
                    style={{
                        width: "100%",
                        height: "220px",
                        objectFit: "cover",
                    }}
                />
                <div className="grow flex flex-col justify-center">
                    <h2 className="text-2xl font-semibold">{event.name}</h2>
                    <p className="text-sm italic text-white/70">
                        By {event.organizerName}
                    </p>
                    <p className="text-sm text-white/50 mt-4">
                        {event.location}
                    </p>
                </div>
                <section className="flex flex-col justify-center absolute top-3 left-3 w-[45px] h-[45px] rounded bg-black/30">
                    <p className="text-xl font-bold leading-none">
                        {new Date(event.date).toLocaleDateString("en-US", {
                            day: "2-digit",
                        })}
                    </p>
                    <p className="text-xs uppercase text-lime-500">
                        {new Date(event.date).toLocaleDateString("en-US", {
                            month: "short",
                        })}
                    </p>
                </section>
            </section>
        </MotionLink>
    );
}

import { TEventoEvent } from "@/lib/types";
import Image from "next/image";
import Link from "next/link";

type EventCardProps = {
    event: TEventoEvent;
};

export default function EventCard({ event }: EventCardProps) {
    return (
        <Link
            href={`/event/${event.slug}`}
            className="flex-1 basis-80 h-[380px] max-w-[500px] state-effects"
        >
            <section className="relative flex flex-col items-center h-full rounded-xl bg-white/5 overflow-hidden">
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
                        {new Date(event.date).toLocaleString("default", {
                            day: "2-digit",
                        })}
                    </p>
                    <p className="text-xs uppercase text-lime-500">
                        {new Date(event.date).toLocaleString("default", {
                            month: "short",
                        })}
                    </p>
                </section>
            </section>
        </Link>
    );
}

import Container from "@/components/container";
import H1 from "@/components/h1";
import { getEvent } from "@/lib/server-utils";
import { capitalize, undashedAndCapitalizedString } from "@/lib/utils";
import { Metadata } from "next";
import Image from "next/image";

type Props = {
    params: {
        slug: string;
    };
};

export function generateMetadata({ params }: Props): Metadata {
    const { slug } = params;

    const eventNameCapitalized = undashedAndCapitalizedString(slug);

    return {
        title: eventNameCapitalized,
        description: `Event page for ${eventNameCapitalized}`,
    };
}

export async function generateStaticParams() {
    return [{ slug: "dj-practice-session" }, { slug: "comedy-extravaganza" }];
}

export default async function EventPage({ params }: Props) {
    const { slug } = params;

    const event = await getEvent(slug);

    return (
        <main className="grow">
            <section className="relative py-16 lg:py-20 overflow-hidden flex justify-center items-center">
                <Image
                    className="blur-3xl object-cover z-[-1]"
                    src={event.imageUrl}
                    alt="background image"
                    quality={50}
                    fill
                    sizes="100vw"
                />
                <div className="flex flex-col justify-center items-center lg:flex-row lg:items-stretch gap-10 lg:gap-20">
                    <Image
                        className="rounded-xl border-2 border-white/50 object-cover"
                        src={event.imageUrl}
                        alt="banner image"
                        height={200}
                        width={300}
                    />
                    <section className="flex flex-col max-w-full">
                        <p className="text-white/70">
                            {new Date(event.date).toLocaleDateString(
                                "default",
                                {
                                    weekday: "long",
                                    month: "long",
                                    day: "2-digit",
                                }
                            )}
                        </p>
                        <H1 className="mb-2 whitespace-nowrap">{event.name}</H1>
                        <p className="text-white/70">
                            Organized by
                            <span className="italic">
                                {" "}
                                {event.organizerName}.
                            </span>
                        </p>
                        <button className="capitalize text-lg bg-white/20 backdrop-blur rounded border-2 border-white/10 py-2 px-3 mt-8 lg:mt-auto state-effects">
                            Get tickets
                        </button>
                    </section>
                </div>
            </section>
            <Container className="text-center mt-20 space-y-20 pb-14">
                <section>
                    <SectionHeading>About this event</SectionHeading>
                    <SectionContent>{event.description}</SectionContent>
                </section>
                <section>
                    <SectionHeading>Location</SectionHeading>
                    <SectionContent>{event.location}</SectionContent>
                </section>
            </Container>
        </main>
    );
}

function SectionHeading({ children }: { children: React.ReactNode }) {
    return (
        <h2 className="text-2xl md:text-3xl font-semibold mb-5 tracking-tight capitalize">
            {children}
        </h2>
    );
}

function SectionContent({ children }: { children: React.ReactNode }) {
    return <p className="text-white/75 leading-loose">{children}</p>;
}

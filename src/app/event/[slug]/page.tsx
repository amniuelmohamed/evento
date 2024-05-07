type EventPageProps = {
    params: {
        slug: string;
    };
};

export default function EventPage({ params }: EventPageProps) {
    const { slug } = params;
    return <main className="grow">Event details page - {slug}</main>;
}

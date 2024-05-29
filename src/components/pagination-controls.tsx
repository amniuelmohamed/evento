import { EVENTS_PER_PAGE } from "@/lib/constants";
import Link from "next/link";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

type PaginationControlsProps = {
    page: number;
    eventsCount: number;
    city: string;
};

type PaginationButtonProps = {
    children: React.ReactNode;
    href: string;
};

export default function PaginationControls({
    page,
    eventsCount,
    city,
}: PaginationControlsProps) {
    return (
        <section className="flex justify-between">
            {page > 1 ? (
                <PaginationButton href={`/events/${city}?page=${page - 1}`}>
                    <FaArrowLeft />
                    Previous
                </PaginationButton>
            ) : (
                <div />
            )}
            {eventsCount > page * EVENTS_PER_PAGE ? (
                <PaginationButton href={`/events/${city}?page=${page + 1}`}>
                    Next
                    <FaArrowRight />
                </PaginationButton>
            ) : (
                <div />
            )}
        </section>
    );
}

function PaginationButton({ children, href }: PaginationButtonProps) {
    return (
        <Link
            href={href}
            className="flex items-center gap-x-2 bg-white/10 py-2 px-3 rounded-md text-sm opacity-75 hover:opacity-100 transition-opacity"
        >
            {children}
        </Link>
    );
}

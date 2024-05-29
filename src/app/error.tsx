"use client"; // Error components must be Client Components

import H1 from "@/components/h1";
import { useEffect } from "react";

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    useEffect(() => {
        // Log the error to an error reporting service
        console.error(error);
    }, [error]);

    return (
        <main className="grow flex flex-col items-center justify-center">
            <H1>{error.message || "An error occurred"}</H1>
            <button
                className="text-lime-500 hover:underline mt-10"
                onClick={
                    // Attempt to recover by trying to re-render the segment
                    () => reset()
                }
            >
                Try again
            </button>
        </main>
    );
}

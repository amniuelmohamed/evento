"use client";

import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

export default function SearchForm() {
    const [searchText, setSearchText] = useState("");
    const router = useRouter();

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!searchText.trim()) return;

        router.push(`/events/${searchText.trim().toLowerCase()}`);
    };

    return (
        <form className="w-full max-w-[550px]" onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Search events in any city..."
                spellCheck={false}
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                className="py-5 px-6 rounded-lg w-full bg-white/[7%] focus:bg-white/10 focus:outline-none focus:ring-2 focus:ring-lime-500/50 transition-colors duration-200"
            />
        </form>
    );
}

"use client";

import Link from "next/link";
import Logo from "./logo";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import Container from "./container";
import { cn } from "@/lib/utils";

const links = [
    {
        name: "Home",
        path: "/",
    },
    {
        name: "All Events",
        path: "/events/all",
    },
];

export default function Header() {
    const activePathname = usePathname();

    return (
        <header className="h-14 border-b border-b-white/10">
            <Container className="flex items-center justify-between h-full">
                <Logo />
                <nav className="h-full">
                    <ul className="flex gap-x-5 text-sm h-full">
                        {links.map((link) => (
                            <li
                                key={link.path}
                                className={cn(
                                    "flex items-center relative hover:text-white transition-colors",
                                    {
                                        "text-white":
                                            activePathname === link.path,
                                        "text-white/50":
                                            activePathname !== link.path,
                                    }
                                )}
                            >
                                <Link href={link.path}>{link.name}</Link>
                                {activePathname === link.path && (
                                    <motion.div
                                        layoutId="active-nav-link"
                                        className="absolute bottom-0 w-full h-1 bg-lime-500"
                                    ></motion.div>
                                )}
                            </li>
                        ))}
                    </ul>
                </nav>
            </Container>
        </header>
    );
}

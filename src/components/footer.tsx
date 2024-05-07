import Link from "next/link";

const footerLinks = [
    { name: "Privacy Policy", path: "/privacy-policy" },
    { name: "Terms of Service", path: "/terms-of-service" },
];

export default function Footer() {
    return (
        <footer className="flex items-center justify-between h-14 px-5 md:px-9 border-t border-t-white/10 text-white/25 text-xs">
            <small className="text-xs">&copy; 2024 - All rights reserved</small>
            <ul className="flex items-center gap-x-4">
                {footerLinks.map((link) => (
                    <li key={link.path}>
                        <Link
                            href={link.path}
                            className="hover:text-white/75 transition-colors duration-200"
                        >
                            {link.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </footer>
    );
}

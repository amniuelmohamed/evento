import Link from "next/link";

export default function NotFound() {
    return (
        <main className="grow flex flex-col items-center justify-center">
            <h1 className="text-4xl font-bold mb-4">404 Not Found</h1>
            <p className="text-lg">
                Sorry, the page you are looking for does not exist.
            </p>
            <Link href="/" className="block text-lime-500 hover:underline mt-4">
                Go back home
            </Link>
        </main>
    );
}

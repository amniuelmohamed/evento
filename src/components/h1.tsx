export default function H1({ children }: { children: React.ReactNode }) {
    return (
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tighter">
            {children}
        </h1>
    );
}

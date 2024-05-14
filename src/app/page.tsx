import H1 from "@/components/h1";
import SearchForm from "@/components/search-form";
import Link from "next/link";

export default function Home() {
    return (
        <main className="grow flex flex-col items-center text-center pt-56 px-3 md:px-6 ">
            <H1>Find events around you</H1>
            <p className="text-xl sm:text-2xl lg:text-[1.7rem] text-white/70 mt-7 mb-10">
                Browse more than{" "}
                <span className="font-bold italic underline text-lime-500">
                    10,000 events
                </span>{" "}
                worldwide
            </p>
            <SearchForm />
            <section className="flex items-center gap-x-3 mt-5 text-white/50 text-sm">
                <p>Popular:</p>
                <div className="flex items-center gap-2 flex-wrap font-semibold">
                    <Link href={"/events/austin"}>Austin</Link>
                    <Link href={"/events/seattle"}>Seattle</Link>
                </div>
            </section>
        </main>
    );
}

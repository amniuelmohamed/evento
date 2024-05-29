import Skeleton from "@/components/skeleton";

export default function Loading() {
    return (
        <div className="grow mt-32 flex flex-col items-center gap-5">
            <Skeleton className="w-[400px] md:w-[550px]" />
            <Skeleton className="w-[300px] md:w-[400px]" />
            <Skeleton className="w-[330px] md:w-[430px]" />
        </div>
    );
}

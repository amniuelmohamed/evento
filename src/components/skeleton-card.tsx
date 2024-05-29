import Skeleton from "./skeleton";

export default function SkeletonCard() {
    return (
        <div className="space-y-4">
            <Skeleton className="h-12 md:h-12 w-12 md:w-12 rounded-full" />
            <Skeleton className="w-[300px] md:w-[400px]" />
            <Skeleton className="w-[330px] md:w-[430px]" />
        </div>
    );
}

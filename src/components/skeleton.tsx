import { cn } from "@/lib/utils";

type SkeletonProps = {
    className?: string;
};

export default function Skeleton({ className }: SkeletonProps) {
    return (
        <div
            className={cn(
                "animate-pulse h-3 md:h-4 w-[400px] md:w-[550px] max-w-full bg-white/5 rounded-md",
                className
            )}
        />
    );
}

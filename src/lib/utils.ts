import clsx, { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export function capitalize(str: string) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

export function undashedAndCapitalizedString(name: string) {
    return name
        .split("-")
        .map((word) => capitalize(word))
        .join(" ");
}

import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

// utility function to get the last 50 years
export function getAllYears() {
  return Array.from({ length: 50 }, (_, i) =>
    (new Date().getFullYear() - i).toString()
  );
}

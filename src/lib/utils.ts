import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Fungsi: cn (Class Name Merger)
 * Input : Daftar class Tailwind (string, object, atau undefined)
 * Process: Menyatukan class dengan clsx, lalu menyelesaikan bentrokan class dengan twMerge.
 * Output: String class Tailwind yang bersih dan tidak saling menimpa.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
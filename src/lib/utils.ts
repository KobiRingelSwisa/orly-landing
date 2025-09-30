import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatPhone(phone: string): string {
  // Remove all non-digits
  const cleaned = phone.replace(/\D/g, "");

  // Israeli phone number formatting
  if (cleaned.startsWith("972")) {
    return `+${cleaned.slice(0, 3)}-${cleaned.slice(3, 6)}-${cleaned.slice(6)}`;
  } else if (cleaned.startsWith("0")) {
    return `0${cleaned.slice(1, 4)}-${cleaned.slice(4)}`;
  }

  return phone;
}

export function validateIsraeliPhone(phone: string): boolean {
  const cleaned = phone.replace(/\D/g, "");

  // Israeli phone patterns
  const patterns = [
    /^0[23489][0-9]{7}$/, // 0X-XXX-XXXX
    /^0[5][0-9]{8}$/, // 05X-XXX-XXXX (mobile)
    /^972[23489][0-9]{7}$/, // +972-X-XXX-XXXX
    /^972[5][0-9]{8}$/, // +972-5X-XXX-XXXX (mobile)
  ];

  return patterns.some((pattern) => pattern.test(cleaned));
}

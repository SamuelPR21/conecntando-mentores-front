import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const defaultValuesAuthForm = {
  user_name: '',
  username: '',
  user_apellido: '',
  password: '',
}

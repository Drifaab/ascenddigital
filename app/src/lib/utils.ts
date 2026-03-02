import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function parseCounterValue(value: string): { num: number; suffix: string; prefix: string } {
  const trimmed = value.trim()
  
  // Extract prefix (non-numeric chars at start like +, -, $, etc)
  const prefixMatch = trimmed.match(/^[^\d\s,\.]+/)
  const prefix = prefixMatch ? prefixMatch[0] : ''
  
  // Extract suffix (non-numeric chars at end like %, x, +, etc)
  const suffixMatch = trimmed.match(/[^\d\s,\.]+$/)
  const suffix = suffixMatch ? suffixMatch[0] : ''
  
  // Extract numeric part
  const numericPart = trimmed.replace(/^[^\d\s,\.]+/, '').replace(/[^\d\s,\.]+$/, '').trim()
  
  // Parse number (handle both comma and dot as decimal separator)
  const num = parseFloat(numericPart.replace(',', '.')) || 0
  
  return { num, suffix, prefix }
}

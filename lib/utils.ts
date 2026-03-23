import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// For GitHub Pages deployment with basePath
const basePath = ''

export function withBasePath(path: string): string {
  if (!basePath) return path
  if (path.startsWith(basePath)) return path
  return `${basePath}${path}`
}

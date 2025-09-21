/**
 * Generic asset utility that automatically handles base path
 * Reads from Vite's BASE_URL environment variable
 *
 * @param path - The asset path (without leading slash)
 * @returns The full path with proper base URL handling
 *
 * Examples:
 * asset('logo.png') -> '/fbwebsite/logo.png' (if BASE_URL is '/fbwebsite/')
 * asset('images/hero.jpg') -> '/images/hero.jpg' (if BASE_URL is '/')
 */
export const asset = (path: string): string => {
  // Type assertion for Vite environment
  const base = (import.meta as any).env?.BASE_URL || '/';

  // Remove leading slash from path if present to avoid double slashes
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;

  // If base is just '/', return with leading slash
  if (base === '/') {
    return `/${cleanPath}`;
  }

  // Otherwise, combine base with path (base already includes trailing slash from Vite)
  return `${base}${cleanPath}`;
};
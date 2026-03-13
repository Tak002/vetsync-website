const basePath = process.env.NODE_ENV === "production" ? "/vetsync-website" : "";

export function asset(path: string) {
  return `${basePath}${path}`;
}

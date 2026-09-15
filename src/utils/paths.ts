const rawBase = import.meta.env.BASE_URL;

const base = rawBase.endsWith("/") ? rawBase : `${rawBase}/`;

export function withBase(path: string): string {
  if (
    path.startsWith("http://") ||
    path.startsWith("https://") ||
    path.startsWith("mailto:") ||
    path.startsWith("tel:") ||
    path.startsWith("#")
  ) {
    return path;
  }

  return `${base}${path.replace(/^\/+/, "")}`;
}

export function stripBase(pathname: string): string {
  const baseWithoutSlash =
    base === "/" ? "" : base.replace(/\/$/, "");

  let result = pathname;

  if (baseWithoutSlash && result.startsWith(baseWithoutSlash)) {
    result = result.slice(baseWithoutSlash.length);
  }

  if (!result.startsWith("/")) {
    result = `/${result}`;
  }

  return result || "/";
}
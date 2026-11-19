export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || "";
const BUILD_ID = process.env.NEXT_PUBLIC_BUILD_ID || "";

export function asset(path: string) {
  const p = path.startsWith("/") ? path : `/${path}`;
  const v = BUILD_ID ? `?v=${BUILD_ID}` : "";

  return `${BASE_PATH}${p}${v}`;
}
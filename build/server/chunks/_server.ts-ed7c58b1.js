import { e as error } from './index-36410280.js';

function GET({ url }) {
  const min = Number(url.searchParams.get("min") ?? "0");
  const max = Number(url.searchParams.get("max") ?? "11");
  const d = max - min;
  if (isNaN(d) || d < 0) {
    throw error(400, "min and max must be numbers, and min must be less than max");
  }
  const random = min + Math.random() * d;
  return new Response(String(random));
}

export { GET };
//# sourceMappingURL=_server.ts-ed7c58b1.js.map

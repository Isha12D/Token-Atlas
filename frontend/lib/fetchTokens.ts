// frontend/lib/fetchTokens.ts
import { Token } from "./types";

export async function fetchTokens(): Promise<Token[]> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/tokens`);
  if (!res.ok) {
    throw new Error("Failed to fetch tokens");
  }
  return res.json();
}

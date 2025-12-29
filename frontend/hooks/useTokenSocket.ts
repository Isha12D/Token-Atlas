// frontend/hooks/useTokenSocket.ts
import { useEffect, useState } from "react";
import { Token } from "@/lib/types";

export function useTokenSocket() {
  const [tokens, setTokens] = useState<Token[]>([]);

  useEffect(() => {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL;
    if (!apiUrl) {
      console.error("NEXT_PUBLIC_API_URL is not defined!");
      return;
    }

    // Fetch initial tokens from backend
    const fetchInitial = async () => {
      try {
        const res = await fetch(`${apiUrl}/api/tokens`);
        const data: Token[] = await res.json();
        setTokens(data);
      } catch (err) {
        console.error("Error fetching tokens:", err);
      }
    };

    fetchInitial();

    // Connect to WebSocket
    const wsUrl = apiUrl.replace(/^http/, "ws");
    const ws = new WebSocket(wsUrl);
    ws.onmessage = (event) => {
      const updatedTokens: Token[] = JSON.parse(event.data);
      setTokens(updatedTokens);
    };

    return () => ws.close();
  }, []);

  return tokens;
}

import { WebSocketServer } from "ws";
import type WebSocket from "ws";
import { Token, IToken } from "../models/Token";
import type http from "http";

export function setupTokenWebSocket(server: http.Server): void {
  const wss = new WebSocketServer({ server });

  wss.on("connection", (ws: WebSocket) => {
    console.log("🔌 Client connected to WebSocket");

    const sendUpdate = async (): Promise<void> => {
      const tokens: IToken[] = await Token.find();

      const updatedTokens = await Promise.all(
        tokens.map(async (token) => {
          const change = +(Math.random() * 2 - 1).toFixed(2);

          token.price += change;
          token.priceChange = change;
          await token.save();

          return {
            id: token._id.toString(),
            name: token.name,
            symbol: token.symbol,
            price: token.price,
            priceChange: token.priceChange,
            volume: token.volume,
            marketCap: token.marketCap,
            status: token.status,
          };
        })
      );

      ws.send(JSON.stringify(updatedTokens));
    };

    const interval = setInterval(sendUpdate, 3000);

    ws.on("close", () => {
      console.log("❌ WebSocket disconnected");
      clearInterval(interval);
    });
  });
}

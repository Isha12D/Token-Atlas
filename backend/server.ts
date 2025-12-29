import express, { Application } from "express";
import http from "http";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

import tokenRoutes from "./routes/tokens.js";
import { setupTokenWebSocket } from "./ws/tokenWebSocket.js";

dotenv.config();

const app: Application = express();
app.use(cors());
app.use(express.json());

app.use("/api/tokens", tokenRoutes);

const server = http.createServer(app);
setupTokenWebSocket(server);

const PORT: number = parseInt(process.env.PORT || "5000", 10);
const MONGO_URI: string | undefined = process.env.MONGO_URI;

if (!MONGO_URI) {
  throw new Error("❌ MONGO_URI is missing");
}

mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log("✅ MongoDB connected");
    server.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
  })
  .catch((err) => console.error("Mongo error:", err));

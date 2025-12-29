import mongoose from "mongoose";
import dotenv from "dotenv";
import { Token } from "./models/Token";

dotenv.config();

const MONGO_URI = process.env.MONGO_URI;

if (!MONGO_URI) {
  throw new Error("MONGO_URI missing in .env");
}

mongoose.connect(MONGO_URI)
  .then(async () => {
    console.log("✅ MongoDB connected");

    // Clear old tokens
    await Token.deleteMany({});

    // Insert sample tokens
    const tokens = [
      { name: "Bitcoin", symbol: "BTC", price: 30000, priceChange: 0, volume: 50000000, marketCap: 600000000, status: "active" },
      { name: "Ethereum", symbol: "ETH", price: 2000, priceChange: 0, volume: 30000000, marketCap: 300000000, status: "active" },
      { name: "Ripple", symbol: "XRP", price: 0.5, priceChange: 0, volume: 10000000, marketCap: 20000000, status: "active" },
      { name: "Litecoin", symbol: "LTC", price: 150, priceChange: 0, volume: 2000000, marketCap: 10000000, status: "active" },
      { name: "Cardano", symbol: "ADA", price: 1.2, priceChange: 0, volume: 4000000, marketCap: 15000000, status: "active" },
      { name: "Solana", symbol: "SOL", price: 30, priceChange: 0, volume: 5000000, marketCap: 25000000, status: "active" }
    ];

    await Token.insertMany(tokens);
    console.log("✅ Tokens seeded successfully");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

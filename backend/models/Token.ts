import mongoose, { Schema, Document, Model } from "mongoose";

export interface IToken extends Document {
  name: string;
  symbol: string;
  price: number;
  priceChange: number;
  volume: number;
  marketCap: number;
  status: "active" | "inactive";
}

const TokenSchema: Schema<IToken> = new Schema({
  name: { type: String, required: true },
  symbol: { type: String, required: true },
  price: { type: Number, required: true },
  priceChange: { type: Number, required: true },
  volume: { type: Number, required: true },
  marketCap: { type: Number, required: true },
  status: { type: String, enum: ["active", "inactive"], default: "active" },
});

export const Token: Model<IToken> = mongoose.model<IToken>("Token", TokenSchema);

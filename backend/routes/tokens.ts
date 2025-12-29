import express, { Request, Response, Router } from "express";
import { Token, IToken } from "../models/Token.js";

const router: Router = express.Router();

// GET all tokens
router.get("/", async (_req: Request, res: Response) => {
  try {
    const tokens: IToken[] = await Token.find();

    const formatted = tokens.map((t) => ({
      id: t._id.toString(),
      name: t.name,
      symbol: t.symbol,
      price: t.price,
      priceChange: t.priceChange,
      volume: t.volume,
      marketCap: t.marketCap,
      status: t.status,
    }));

    res.json(formatted);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch tokens" });
  }
});

// POST: insert new token
router.post("/", async (req: Request, res: Response) => {
  try {
    const token: IToken = new Token(req.body);
    const savedToken = await token.save();

    res.status(201).json(savedToken);
  } catch (err) {
    console.error(err);
    res.status(400).json({ error: "Failed to create token" });
  }
});

export default router;

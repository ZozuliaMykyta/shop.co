import type { Request, Response } from "express";
import Card from "../models/cardModel";

const handleError = (res: Response, err: string, errorDetails?: any) => {
  console.error(errorDetails);
  res.status(500).json({ error: err, details: errorDetails });
};

const getCard = async (req: Request, res: Response): Promise<void> => {
  try {
    const cards = await Card.find().sort({ title: 1 });
    res.status(200).json(cards);
  } catch (error) {
    handleError(res, "Something went wrong", error);
  }
};

export default getCard;

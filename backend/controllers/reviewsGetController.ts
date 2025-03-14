import type { Request, Response } from "express";
import Review from "../models/reviewsModel.ts";

const handleError = (res: Response, err: string, errorDetails?: any) => {
  console.error(errorDetails);
  res.status(500).json({ error: err, details: errorDetails });
};

const getReview = async (req: Request, res: Response): Promise<void> => {
  try {
    const sortOrder = req.query.sort === "Newest" ? -1 : 1;
    const Reviews = await Review.find().sort({ date: sortOrder });
    res.status(200).json(Reviews);
  } catch (error) {
    handleError(res, "Something went wrong", error);
  }
};

export default getReview;

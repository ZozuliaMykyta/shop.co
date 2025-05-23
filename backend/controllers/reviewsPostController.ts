import type { Request, Response } from "express";
import Review from "../models/reviewsModel";

const handleError = (res: Response, err: string, errorDetails?: any) => {
  console.error(errorDetails);
  res.status(500).json({ error: err, details: errorDetails });
};

const postReview = async (req: Request, res: Response): Promise<void> => {
  try {
    const newReview = new Review(req.body);
    await newReview.save();
    res.status(201).json({ message: "Review was added", review: newReview });
  } catch (error) {
    handleError(res, "Error adding review", error);
  }
};

export default postReview;

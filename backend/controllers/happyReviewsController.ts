import type { Request, Response } from "express";
import HappyReview from "../models/happyReviewsModel";

const handleError = (res: Response, err: string, errorDetails?: any) => {
  console.error(errorDetails);
  res.status(500).json({ error: err, details: errorDetails });
};

const getHappyReview = async (req: Request, res: Response): Promise<void> => {
  try {
    const happyReviews = await HappyReview.find().sort({ title: 1 });
    res.status(200).json(happyReviews);
  } catch (error) {
    handleError(res, "Something went wrong", error);
  }
};

export default getHappyReview;

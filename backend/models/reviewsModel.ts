import mongoose, { Document, Schema } from "mongoose";

interface IReviews extends Document {
  full_name: string;
  comment: string;
  date: string;
  rating: number;
}

const reviewsSchema = new Schema<IReviews>({
  full_name: {
    type: String,
    required: true,
  },
  comment: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    default: new Date().toISOString(),
  },
  rating: { type: Number, required: true },
});

const Review = mongoose.model<IReviews>("Review", reviewsSchema, "reviews");

export default Review;

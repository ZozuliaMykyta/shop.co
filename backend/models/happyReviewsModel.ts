import mongoose, { Document, Schema } from "mongoose";

interface IHappyReview extends Document {
  _id: string;
  first_name: string;
  last_name: string;
  text: string;
  rating: number;
}

const HappyReviewSchema = new Schema<IHappyReview>({
  _id: {
    type: String,
    required: true,
  },
  first_name: {
    type: String,
    required: true,
  },
  last_name: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
  },
});

const HappyReview = mongoose.model<IHappyReview>(
  "HappyReview",
  HappyReviewSchema,
  "happy_reviews"
);

export default HappyReview;

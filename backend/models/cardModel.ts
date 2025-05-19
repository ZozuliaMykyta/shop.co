import mongoose, { Document, Schema } from "mongoose";

interface ICard extends Document {
  _id: string;
  category: string;
  title: string;
  description: string;
  imageUrl: string;
  price: number;
}

const cardSchema = new Schema<ICard>({
  _id: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  imageUrl: { type: String, required: true },
  price: { type: Number, required: true },
});

const Card = mongoose.model<ICard>("Card", cardSchema, "cards");

export default Card;

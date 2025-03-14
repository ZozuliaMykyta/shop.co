import dotenv from "dotenv";
import mongoose from "mongoose";
import express from "express";
import cors from "cors";
import cardsRoutes from "./routes/cardRoutes.ts";
import happyReviewsRoutes from "./routes/happyReviewsRoutes.ts";
import reviewsRoutes from "./routes/reviewsRoutes.ts";

dotenv.config();

const PORT: Number = Number(process.env.PORT) || 3000;

const app = express();
app.use(express.json());
app.use(cors());
app.use(cardsRoutes);
app.use(happyReviewsRoutes);
app.use(reviewsRoutes);

mongoose
  .connect(process.env.DATABASE_URL as string)
  .then(() => console.log("Connected to DB"))
  .catch((err) => console.log(`DB connection error: ${err}`));

app.listen(PORT, (err?: Error) => {
  err ? console.log(err) : console.log(`Server is running on port ${PORT}`);
});

import express from "express";
import getHappyReview from "../controllers/happyReviewsController.ts";

const router = express.Router();

router.get("/happyreviews", getHappyReview);

export default router;

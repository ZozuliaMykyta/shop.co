import express from "express";
import getReview from "../controllers/reviewsGetController.ts";
import postReview from "../controllers/reviewsPostController.ts";

const router = express.Router();

router.get("/reviews", getReview);
router.post("/reviews", postReview);

export default router;

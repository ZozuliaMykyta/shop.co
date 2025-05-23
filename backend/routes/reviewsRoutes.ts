import express from "express";
import getReview from "../controllers/reviewsGetController";
import postReview from "../controllers/reviewsPostController";

const router = express.Router();

router.get("/reviews", getReview);
router.post("/reviews", postReview);

export default router;

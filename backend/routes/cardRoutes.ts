import express from "express";
import getCard from "../controllers/cardController.ts";

const router = express.Router();

router.get("/cards", getCard);

export default router;

import express from "express";
import getCard from "../controllers/cardController";

const router = express.Router();

router.get("/cards", getCard);

export default router;

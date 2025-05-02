import express from "express";
import { getUser } from "../controllers/userController.js";
const router = express.Router();

router.get("/cutiepie", getUser);

export default router;

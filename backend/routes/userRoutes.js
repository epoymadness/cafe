import express from "express";
import { getUser, postUser } from "../controllers/userController.js";
const router = express.Router();

router.get("/cutiepie", getUser);
router.post("/saveuser", postUser);

export default router;

import express from "express";
import { getUser, postUser, loginUser } from "../controllers/userController.js";
const router = express.Router();
import { Auth } from "../middleware/verify.js";

router.get("/cutiepie", Auth, getUser);
router.post("/saveuser", postUser);
router.post("/loginuser", loginUser);

export default router;

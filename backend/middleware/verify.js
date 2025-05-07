import { PrismaClient } from "../generated/prisma/client.js";
import jwt from "jsonwebtoken";
const JWT_ACCESS_SECRET = process.env.JWT_ACCESS_SECRET;

const prisma = new PrismaClient();

export function Auth(req, res, next) {
  const auth = req.headers["authorization"];
  const token = auth?.split(" ")[1];
  if (!token) return res.status(401).json({ error: "No token" });

  try {
    const decoded = jwt.verify(token, JWT_ACCESS_SECRET);
    req.user = decoded;
    next();
  } catch {
    res.status(403).json({ error: "invalid or expired" });
  }
}

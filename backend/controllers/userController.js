import { PrismaClient } from "../generated/prisma/client.js";
const JWT_ACCESS_SECRET = process.env.JWT_ACCESS_SECRET;
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { Check } from "../function/checkRefreshToken.js";

const prisma = new PrismaClient();
export const getUser = (req, res) => {
  res.json({ username: req.user });
};

export const postUser = async (req, res) => {
  const newUser = req.body;
  const password = await bcrypt.hash(newUser.password, 10);

  const saveUser = await prisma.user.create({
    data: { ...newUser, password: password },
  });
  res.json(newUser);
};

export const loginUser = async (req, res) => {
  const userLog = req.body;
  const email = userLog.email;

  const user = await prisma.user.findUnique({
    where: { email },
  });

  const result = await bcrypt.compare(userLog.password, user.password);
  if (!result) return res.status(401).json({ error: "Invalid password" });

  const accessToken = jwt.sign({ username: user.username }, JWT_ACCESS_SECRET, {
    expiresIn: "15m",
  });

  const rToken = await prisma.token.findFirst({
    where: { tokenId: user.id },
  });

  const refreshToken = await Check(
    rToken,
    rToken?.refreshToken,
    user.id,
    user.username
  );

  return res.json({ accessToken, refreshToken });
};

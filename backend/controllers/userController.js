import { PrismaClient } from "../generated/prisma/client.js";
const prisma = new PrismaClient();
export const getUser = (req, res) => {
  res.json({ message: "Jefferson Yabut" });
};

export const postUser = async (req, res) => {
  const newUser = req.body;
  const saveUser = await prisma.user.create({
    data: newUser,
  });
  res.json(newUser);
};

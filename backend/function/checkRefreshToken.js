import jwt from "jsonwebtoken";
import { PrismaClient } from "../generated/prisma/client.js";
const prisma = new PrismaClient();
const JWT_REFRESH_SECRET = process.env.JWT_ACCESS_SECRET;

export async function Check(param, refreshToken, id, userName) {
  if (param) return refreshToken;

  if (!param && !refreshToken) {
    const newRefreshToken = jwt.sign(
      { username: userName },
      JWT_REFRESH_SECRET,
      {
        expiresIn: "30d",
      }
    );
    await prisma.token.create({
      data: {
        tokenId: id,
        refreshToken: newRefreshToken,
      },
    });
    return newRefreshToken;
  }
}

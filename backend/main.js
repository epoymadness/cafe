import express from "express";
import cors from "cors";
import userRoutes from "./routes/userRoutes.js";
import jwt from "jsonwebtoken";

const app = express();

//middleware
app.use(cors());
app.use(express.json());

app.use("/", userRoutes);

app.get("/token", async (req, res) => {
  const username = {
    username: "epoymadness",
    iss: "login",
  };

  const accessToken = jwt.sign(username, JWT_ACCESS_SECRET, {
    expiresIn: "10s",
  });

  const refreshToken = jwt.sign(username, JWT_REFRESH_SECRET, {
    expiresIn: "1d",
  });

  return res.json({ accessToken, refreshToken });
});

app.get("/verify-token", async (req, res) => {
  const token = req.header("Authorization")?.split(" ")[1];

  if (!token) {
    return res.status(401).json({ message: "No token provided" });
  }

  const decoded = jwt.verify(token, JWT_ACCESS_SECRET);

  return res.json({ decoded });
});

app.get("/refresh-token", async (req, res) => {
  const refreshToken = req.header("Authorization")?.split(" ")[1];

  if (!refreshToken) {
    return res.status(401).json({ message: "No refresh token provided" });
  }

  const decoded = jwt.verify(refreshToken, JWT_REFRESH_SECRET);

  if (!decoded) {
    return res.status(401).json({ message: "Invalid refresh token" });
  }

  const accessToken = jwt.sign(
    {
      username: "epoymadness",
      iss: "refresh",
    },
    JWT_ACCESS_SECRET,
    {
      expiresIn: "10s",
    }
  );

  return res.json({ accessToken });
});

export default app;

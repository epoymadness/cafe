import express from "express";
import cors from "cors";
import userRoutes from "./routes/userRoutes.js";

const app = express();

//middleware
app.use(cors());
app.use(express.json());

app.use("/", userRoutes);

export default app;

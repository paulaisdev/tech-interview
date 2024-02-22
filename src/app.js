import express from "express";
const app = express();

import cors from "cors";
app.use(cors());

import questionsRoutes from "./routes/questionsRoutes.js";

app.use(express.json());

app.use("/api", questionsRoutes);

export default app;

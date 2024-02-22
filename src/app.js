import express from "express";
const app = express();

import cors from "cors";
app.use(cors());

app.use(express.json());

import questionsRoutes from "./routes/questionsRoutes.js";
app.use("/api", questionsRoutes);

const PORT = 8080;

app.listen(5000, () => {
  console.log(`Servidor rodando na porta${PORT}`);
});

export default app;

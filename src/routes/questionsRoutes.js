import express from "express";
const router = express.Router();

import controllers from "../controllers/questionsController.js";

router.get("/", controllers.getAll);
router.get("/question", controllers.getOneQuestion);

export default router;

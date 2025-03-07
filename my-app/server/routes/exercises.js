import express from "express";
import {
  createExercise,
  getAllExercises,
  getExerciseById,
  updateExercise,
  deleteExercise,
} from "../controllers/exerciseController.js";

const router = express.Router();

router.post("/exercise", createExercise);
router.get("/exercise", getAllExercises);
router.get("/exercise/:id", getExerciseById);
router.put("/exercise/:id", updateExercise);
router.delete("/exercise/:id", deleteExercise);

export default router;

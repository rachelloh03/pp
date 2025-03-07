// standardized response function
import {
    createExerciseService,
    getAllExercisesService,
    getExerciseByIdService,
    updateExerciseService,
    deleteExerciseService,
  } from "../models/exerciseModel.js";
  
  const handleResponse = (res, status, message, data = null) => {
    res.status(status).json({
      status,
      message,
      data,
    });
  };
  
  export const createExercise = async (req, res, next) => {
    const { username, exercise, weight, reps } = req.body;
    try {
      const newExercise = await createExerciseService(username, exercise, weight, reps);
      handleResponse(res, 201, "Exercise created successfully", newExercise);
    } catch (err) {
      next(err);
    }
  };
  
  export const getAllExercises = async (req, res, next) => {
    try {
      const exercises = await getAllExercisesService();
      handleResponse(res, 200, "Exercise fetched successfully", exercises);
    } catch (err) {
      next(err);
    }
  };
  
  export const getExerciseById = async (req, res, next) => {
    try {
      const exercise = await getExerciseByIdService(req.params.id);
      if (!exercise) return handleResponse(res, 404, "Exercise not found");
      handleResponse(res, 200, "Exercise fetched successfully", exercise);
    } catch (err) {
      next(err);
    }
  };
  
  export const updateExercise = async (req, res, next) => {
    const { username, exercise, weight, reps } = req.body;
    try {
      const exercise = await updateExerciseService(
        req.params.id,
        username, 
        exercise,
        weight,
        reps
      );
      if (!exercise) return handleResponse(res, 404, "Exercise not found");
      handleResponse(res, 200, "Exercise updated successfully", exercise);
    } catch (err) {
      next(err);
    }
  };
  
  export const deleteExercise = async (req, res, next) => {
    try {
      const exercise = await deleteExerciseService(req.params.id);
      if (!exercise) return handleResponse(res, 404, "Exercise not found");
      handleResponse(res, 200, "Exercise deleted successfully", exercise);
    } catch (err) {
      next(err);
    }
  };
  
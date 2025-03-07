import pool from "../config/db.js";

export const getAllExercisesService = async () => {
  const result = await pool.query("SELECT * from exercises");
  return result.rows;
};

export const getExerciseByIdService = async (id) => {
  const result = await pool.query("SELECT * FROM exercises where id=$1", [id]);
  return result.rows[0];
};

export const createExerciseService = async (username, exercise, weight, reps) => {
  const result = await pool.query(
    "INSERT INTO exercises (username, exercise, weight, reps) VALUES ($1, $2, $3, $4) RETURNING *",
    [username, exercise, weight, reps]
  );
  return result.rows[0];
};

export const updateExerciseService = async (username, exercise, weight, reps, id) => {
  const result = await pool.query(
    "UPDATE exercises SET username=$1, exercise=$2, weight=$3, reps=$4 WHERE id=$5 RETURNING *",
    [username, exercise, weight, reps, id]
  );
  return result.rows[0];
};

export const deleteExerciseService = async (id) => {
  const result = await pool.query(
    "DELETE FROM exercises WHERE id = $1 RETURNING *",
    [id]
  );
  return result.rows[0];
};

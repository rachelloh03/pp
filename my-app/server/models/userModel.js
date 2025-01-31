import pool from "../config/db.js";

export const getAllUsersService = async () => {
  const result = await pool.query("SELECT * from users");
  return result.rows;
};

export const getUserByIdService = async (id) => {
  const result = await pool.query("SELECT * FROM users where id=$1", [id]);
  return result.rows[0];
};

export const createUserService = async (username, password, email) => {
  const result = await pool.query(
    "INSERT INTO users (username, password, email) VALUES ($1, $2, $3) RETURNING *",
    [username, password, email]
  );
  return result.rows[0];
};

export const updateUserService = async (username, password, email, id) => {
  const result = await pool.query(
    "UPDATE users SET username=$1, password=$2, email=$3 WHERE id=$4 RETURNING *",
    [username, password, email, id]
  );
  return result.rows[0];
};

export const deleteUserService = async (id) => {
  const result = await pool.query(
    "DELETE FROM users WHERE id = $1 RETURNING *",
    [id]
  );
  return result.rows[0];
};

//sometimes also known as index.js file

import express from "express";
import cors from "cors";
import userRoutes from "./routes/users.js";
import dotenv from "dotenv";
import pool from "./config/db.js";
import errorHandling from "./middlewares/errorHandler.js";

dotenv.config();
const app = express();
const PORT = 8080;

//middlewares
app.use(express.json());
app.use(cors());

//routes
app.use("/api", userRoutes);

//error handling middleware
app.use(errorHandling);

//testing postgres connection
app.get("/", async (req, res) => {
  console.log("Start");
  const result = await pool.query("SELECT current_database()");
  console.log("End");
  res.send(`The database name is ${result.rows[0].current_database}`);
});

//server running
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});

export default app;

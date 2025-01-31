//sometimes also known as index.js file

import express from "express";
<<<<<<< HEAD
// import bodyParser from "body-parser";

const app = express();
const PORT = 8080;
||||||| 3e1ae74
import bodyParser from "body-parser";

const app = express();
const PORT = 8080;
import cors from "cors";
import userRoutes from "./routes/users.js";
=======
import cors from "cors";
import userRoutes from "./routes/users.js";
import dotenv from "dotenv";
import pool from "./config/db.js";
import errorHandling from "./middlewares/errorHandler.js";
>>>>>>> backend3

<<<<<<< HEAD
// import cors from "cors";
// import userRoutes from "./routes/users.js";
// eslint-disable-next-line @typescript-eslint/no-require-imports
import client from "./connection.js";

// app.use(cors());
// app.use(bodyParser.json());
// app.use("/users", userRoutes);
||||||| 3e1ae74
app.use(cors());
app.use(bodyParser.json());
app.use("/users", userRoutes);
=======
dotenv.config();
const app = express();
const PORT = 8080;

//middlewares
app.use(express.json());
app.use(cors());
>>>>>>> backend3

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
<<<<<<< HEAD
client.connect();

app.get("/users", (req, res) => {
  client.query("Select * from users", (err, result) => {
    if (!err) {
      res.send(result.rows);
      console.log("hello");
    }
  });
  client.end();
});
||||||| 3e1ae74
=======

export default app;
>>>>>>> backend3

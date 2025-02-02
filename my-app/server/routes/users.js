import express from "express";
import {
  createUser,
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser,
} from "../controllers/userController.js";

const router = express.Router();

<<<<<<< HEAD
// Mock database
const users = [];

import pg from "pg";

const client = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "user_db",
  password: "Fangpi_123",
  port: 5432,
});
client.connect();

// Getting the list of users from the mock database
// router.get("/", (req, res) => {
//   res.send(users);
// });

// router.get("/", (req, res) => {
//   client.query("Select * from users", (err, result) => {
//     if (!err) {
//       res.send(result.rows);
//       console.log("hello");
//     }
//   });
//   client.end();
// });

router.post("/", (req, res) => {
  const user = req.body;
  users.push({ ...user });
  res.send(`${user.username} has been added to user_db`);
});

router.get("/:username", (req, res) => {
  const { username } = req.params;
  const foundUser = users.find((user) => user.username === username);
  res.send(foundUser);
});

router.delete("/:username", (req, res) => {
  const { username } = req.params;
  users = users.filter((user) => user.username !== username);
  res.send(`${username} deleted successfully from database`);
});

router.patch("/:username2", (req, res) => {
  const { username2 } = req.params;
  const { username, password, email } = req.body;
  const user = users.find((user) => user.username === username2);

  if (username) user.username = username;
  if (password) user.password = password;
  if (email) user.email = email;

  res.send(`User with the ${username} has been updated`);
});
||||||| 3e1ae74
// Mock database
const users = [];

// Getting the list of users from the mock database
router.get("/", (req, res) => {
  res.send(users);
});

router.post("/", (req, res) => {
  const user = req.body;
  users.push({ ...user });
  res.send(`${user.username} has been added to user_db`);
});

router.get("/:username", (req, res) => {
  const { username } = req.params;
  const foundUser = users.find((user) => user.username === username);
  res.send(foundUser);
});

router.delete("/:username", (req, res) => {
  const { username } = req.params;
  users = users.filter((user) => user.username !== username);
  res.send(`${username} deleted successfully from database`);
});

router.patch("/:username2", (req, res) => {
  const { username2 } = req.params;
  const { username, password, email } = req.body;
  const user = users.find((user) => user.username === username2);

  if (username) user.username = username;
  if (password) user.password = password;
  if (email) user.email = email;

  res.send(`User with the ${username} has been updated`);
});
=======
router.post("/user", createUser);
router.get("/user", getAllUsers);
router.get("/user/:id", getUserById);
router.put("/user/:id", updateUser);
router.delete("/user/:id", deleteUser);
>>>>>>> backend3

// Getting the list of users from the mock database
// router.get("/", (req, res) => {
//   client.query("Select * from users", (err, result) => {
//     if (!err) {
//       res.send(result.rows);
//       console.log("hello");
//     }
//   });
//   client.end();
// });

export default router;

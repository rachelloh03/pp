import express from "express";
const router = express.Router();

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

export default router;

import { user } from "../models";
const User = user;
// const Op = Sequelize.Op;

// Create and Save a new User
export function create(req, res) {
  //validate request
  if (!req.body.username || !req.body.password || !req.body.email) {
    res.status(400).send({
      message: "Username, password, and email cannot be empty",
    });
    return;
  }

  //create a User
  const user = {
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
  };

  //save User in database
  User.create(user)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while creating User",
      });
    });
}

// Retrieve all Users from the database.
export function findAll(req, res) {
  const username = req.query.username;

  User.findAll({ where: username }) // check if this works
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving users",
      });
    });
}

// Find a single User with username
export function findOne(req, res) {
  const username = req.params.username;

  User.findByPk(username)
    .then((data) => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find User with username=${username}`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || `Error retrieving User with username=${username}`,
      });
    });
}

// Update a User by the username in the request
export function update(req, res) {
  const username = req.params.username;

  User.update(req.body, {
    where: { username: username },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "User was updated successfully.",
        });
      } else {
        res.send({
          message: `Cannot update User with username=${username}. Maybe User was not found or req.body is empty!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Error updating User with username=" + username,
      });
    });
}

// Delete a User with the specified username in the request
const _delete = (req, res) => {
  const username = req.params.username;

  User.destroy(req.body, {
    where: { username: username },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "User was deleted successfully.",
        });
      } else {
        res.send({
          message: `Cannot delete User with username=${username}. Maybe User was not found!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Error deleting User with username=" + username,
      });
    });
};
export { _delete as delete };

// Delete all Users from the database.
export function deleteAll(req, res) {
  User.destroy({
    where: {},
    truncate: false,
  })
    .then((nums) => {
      res.send({ message: `${nums} Users were deleted successfully!` });
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while removing all users.",
      });
    });
}

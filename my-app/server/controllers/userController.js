// standardized response function
import {
  createUserService,
  getAllUsersService,
  getUserByIdService,
  updateUserService,
  deleteUserService,
} from "../models/userModel.js";

const handleResponse = (res, status, message, data = null) => {
  res.status(status).json({
    status,
    message,
    data,
  });
};

export const createUser = async (req, res, next) => {
  const { username, password, email } = req.body;
  try {
    const newUser = await createUserService(username, password, email);
    handleResponse(res, 201, "user created successfully", newUser);
  } catch (err) {
    next(err);
  }
};

export const getAllUsers = async (req, res, next) => {
  try {
    const users = await getAllUsersService();
    handleResponse(res, 200, "user fetched successfully", users);
  } catch (err) {
    next(err);
  }
};

export const getUserById = async (req, res, next) => {
  try {
    const user = await getUserByIdService(req.params.id);
    if (!user) return handleResponse(res, 404, "user not found");
    handleResponse(res, 200, "user fetched successfully", user);
  } catch (err) {
    next(err);
  }
};

export const updateUser = async (req, res, next) => {
  const { username, password, email } = req.body;
  try {
    const user = await updateUserService(
      req.params.id,
      username,
      password,
      email
    );
    if (!user) return handleResponse(res, 404, "user not found");
    handleResponse(res, 200, "user updated successfully", user);
  } catch (err) {
    next(err);
  }
};

export const deleteUser = async (req, res, next) => {
  try {
    const user = await deleteUserService(req.params.id);
    if (!user) return handleResponse(res, 404, "user not found");
    handleResponse(res, 200, "user deleted successfully", user);
  } catch (err) {
    next(err);
  }
};

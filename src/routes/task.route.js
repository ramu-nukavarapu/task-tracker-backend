import express from "express";
import { userValidation } from "../middlewares/auth.middleware.js";
import { deleteTask, editTask, getTask } from "../controllers/task.controller.js";

export const taskRouter = express.Router();

taskRouter.get("/:id", userValidation, getTask);
taskRouter.put("/:id", userValidation, editTask);
taskRouter.delete("/:id", userValidation, deleteTask);
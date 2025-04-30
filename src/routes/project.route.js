import express from "express";
import { createProject, deleteProject, getAllProjects, getAllTasks } from "../controllers/project.controller.js";
import { userValidation } from "../middlewares/auth.middleware.js";
import { addTask } from "../controllers/task.controller.js";

export const projectRouter = express.Router();

projectRouter.get("/", userValidation, getAllProjects);
projectRouter.post("/", userValidation, createProject);
projectRouter.get("/:id", userValidation, getAllTasks);
projectRouter.delete("/:id", userValidation, deleteProject)
projectRouter.post("/:id/task", userValidation, addTask);


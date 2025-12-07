import express from "express";
import Authenticate from "../middleware/Authenticate.js";
import {
  createTask,
  getTasks,
  getTaskById,
  updateTask,
  deleteTask,
} from "../controller/tasckController.js";

const router = express.Router();

router.post("/", Authenticate, createTask);
router.get("/", Authenticate, getTasks);
router.get("/:id", Authenticate, getTaskById);
router.put("/:id", Authenticate, updateTask);
router.delete("/:id", Authenticate, deleteTask);

export default router;

import Task from "../models/Tasks.js";

export const createTask = async (req, res) => {
  try {
    const userId = req.user.id;
    const { title, description, status, due_date } = req.body;

    if (!title) {
      return res.status(400).json({ message: "Title is required" });
    }

    const task = await Task.create({
      user_id: userId,
      title,
      description,
      status,
      due_date,
    });

    res.status(201).json({ message: "Task created", task });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const getTasks = async (req, res) => {
  try {
    const userId = req.user.id;

    const tasks = await Task.findAll({
      where: { user_id: userId }});
    res.status(200).json({ tasks });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const getTaskById = async (req, res) => {
  try {
    const userId = req.user.id;
    const { id } = req.params;

    const task = await Task.findOne({
      where: { id, user_id: userId },
    });

    if (!task) return res.status(404).json({ message: "Task not found" });

    res.json({ task });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const updateTask = async (req, res) => {
  try {
    const userId = req.user.id;
    const { id } = req.params;

    const task = await Task.findOne({
      where: { id, user_id: userId },
    });

    if (!task) return res.status(404).json({ message: "Task not found" });

    await task.update(req.body);

    res.json({ message: "Task updated", task });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const deleteTask = async (req, res) => {
  try {
    const userId = req.user.id;
    const { id } = req.params;

    const task = await Task.findOne({
      where: { id, user_id: userId },
    });

    if (!task) return res.status(404).json({ message: "Task not found" });

    await task.destroy();

    res.json({ message: "Task deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

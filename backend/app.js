import express  from "express";
import cors from "cors";
import userRoutes  from "./Routes/userRoutes.js"
import taskRoutes from "./Routes/taskRoutes.js";

const app =express();
app.use(cors());
app.use(express.json());

app.use("/api", userRoutes);
app.use("/api/tasks", taskRoutes);




export default app;
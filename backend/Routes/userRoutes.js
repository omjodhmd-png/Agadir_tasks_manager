import express from "express";
import login from "../controller/userController.js";
import {register} from "../controller/userController.js"


const routers = express.Router();
routers.post("/register", register);
routers.post("/login", login);

export default routers;
import { Router } from "express";
import { createUser, getUserById } from "../controllers/user.controller.js";

const routerUser = Router()

routerUser.post("/", createUser)
routerUser.get("/:id", getUserById)

export default routerUser
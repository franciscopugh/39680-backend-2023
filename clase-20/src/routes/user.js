import { Router } from "express";
import { createUser } from "../controllers/user.controller.js";

const routerUser = Router()

routerUser.post("/", createUser)

export default routerUser
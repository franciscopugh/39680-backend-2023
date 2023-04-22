import { Router } from "express";
import { loginUser, registerUser } from "../controllers/session.js";
const routerSession = Router()

routerSession.post("/register", registerUser)
routerSession.post("/login", loginUser)


export default routerSession
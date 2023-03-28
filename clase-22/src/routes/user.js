import { Router } from "express";
import { createUser, getUserById } from "../controllers/user.controller.js";
import passport from "passport";

const routerUser = Router()

routerUser.post("/register", passport.authenticate('register'), createUser)
routerUser.get("/:id", getUserById)

export default routerUser
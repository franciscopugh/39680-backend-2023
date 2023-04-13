import { Router } from 'express'
import { getUsers, postUser } from "../controllers/user.js";

const routerUsers = Router()

routerUsers.get('/', getUsers)
routerUsers.post("/", postUser)

export default routerUsers
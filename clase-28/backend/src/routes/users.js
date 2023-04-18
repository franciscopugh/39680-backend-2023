import { Router } from 'express'
import { getUsers } from "../controllers/user.js";

const routerUsers = Router()

routerUsers.get('/', getUsers)

export default routerUsers
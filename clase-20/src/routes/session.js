import { Router } from "express";
import { getSession, testLogin, destroySession, register, home } from "../controllers/session.controller.js";

const routerSession = Router()

routerSession.get('/', getSession)
routerSession.post('/login', testLogin)
routerSession.get('/home', home)
routerSession.get('/logout', destroySession)
routerSession.get('/register', register)

export default routerSession
import { Router } from "express";
import { getSession, testLogin, destroySession } from "../controllers/session.controller.js";

const routerSession = Router()

routerSession.get('/', getSession)
routerSession.get('/login', getSession)
routerSession.post('/testlogin', testLogin)
routerSession.get('/logout', destroySession)

export default routerSession
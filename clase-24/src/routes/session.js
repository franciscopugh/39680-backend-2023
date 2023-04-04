import { Router } from "express";
import passport from "passport";
import { destroySession, getSession, testLogin } from "../controllers/session.controller.js";
import { passportError, authorization } from "../utils/messageErrors.js";

const routerSession = Router()

routerSession.post("/login", passport.authenticate('login'), testLogin)
routerSession.get("/logout", destroySession)
//Consultar las cookies de mi navegador
routerSession.get('/testJWT', passport.authenticate('jwt', { session: false }, (req, res) => {
    res.send(req.user)
}))
routerSession.get("/current", passportError('jwt'), authorization('Admin'), (req, res) => {
    res.send(req.user)
})
export default routerSession
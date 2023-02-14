import { Router } from "express";

const routerSocket = Router()

routerSocket.get("/", (req,res) => {
    res.render("index", {})
})

export default routerSocket
import "dotenv/config"
import express from "express";
import { Socket } from "socket.io";
import { getManagerMessages } from "./dao/daoManager";
//import { ManagerMessageMongoDB } from "./dao/MongoDB/models/Message"; NO SE HACE POR QUE DEBO CONSULTAR A DAO
//const managerMessage = new ManagerMessageMongoDB()
const app = express()

const managerMessage = new getManagerMessages()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.set("port", process.env.PORT || 5000)

const server = app.listen(app.get("port"), () => console.log(`Server on port ${app.get("port")}`))

const io = Socket(server)

io.on("connection", (socket) => {
    socket.on("message", info => {
        managerMessage.addElements([info]).then(() => {
            managerMessage.getElements().then((mensajes) => {
                console.log(mensajes)
                socket.emmit("allMessages", mensajes)
            })
        })
    })
})
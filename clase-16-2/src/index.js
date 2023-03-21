import "dotenv/config"
import express from "express";
import { Server } from "socket.io";
import { getManagerMessages } from "./dao/daoManager.js";
import routerProducto from "./routes/products.js";
import routerCart from './routes/cart.js'
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.set("port", process.env.PORT || 5000)
app.use('/products', routerProducto)
app.use('/cart', routerCart)
const server = app.listen(app.get("port"), () => console.log(`Server on port ${app.get("port")}`))

const io = new Server(server)

io.on("connection", async (socket) => {
    socket.on("message", async (info) => {
        const data = await getManagerMessages()
        const managerMessage = new data.ManagerMessageMongoDB
        managerMessage.addElements([info]).then(() => {
            managerMessage.getElements().then((mensajes) => {
                console.log(mensajes)
                socket.emmit("allMessages", mensajes)
            })
        })
    })
})
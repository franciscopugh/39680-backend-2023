import express from 'express'
import routerUser from './routes/user.js'
import db from './db/db.js'

const main = async () => {
    const app = express()

    app.use(express.json())

    app.get("/", (req, res) => {
        res.json({ mensaje: "Bienvenidos a sequelize" })
    })

    app.use("/users", routerUser)

    app.listen(4000, () => {
        console.log("Server on port 4000")
    })

    await db.sync().then(() => {
        console.log("DB conectada")
    })


}

main()

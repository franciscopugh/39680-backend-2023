import 'dotenv/config'
import express from 'express'
import session from 'express-session'
import cookieParser from 'cookie-parser'
import MongoStore from 'connect-mongo'
import multer from 'multer'
import { engine } from 'express-handlebars'
import { __dirname } from './path.js'
import * as path from 'path'
import routerSession from './routes/session.js'
import routerProducto from './routes/products.js'
import routerUser from './routes/user.js'
import routerCart from './routes/cart.js'

const app = express()

app.use(cookieParser(process.env.SIGNED_COOKIE))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(session({
    store: MongoStore.create({
        mongoUrl: process.env.MONGODBURL,
        mongoOptions: { useNewUrlParser: true, useUnifiedTopology: true },
        ttl: 30,
    }),
    secret: process.env.SESSION_SECRET,
    resave: true,
    saveUninitialized: true
}))

app.engine("handlebars", engine())
app.set("view engine", "handlebars")
app.set("views", path.resolve(__dirname, "./views"))

app.set("port", process.env.PORT || 5000)

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'src/public/img')
    },
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}${file.originalname}`)
    }
})

const upload = multer({ storage: storage })

//Routes
app.use('/product', routerProducto)
app.use('/user/', routerUser)
app.use('/api/cart', routerCart)
app.use('/api/session', routerSession)
const server = app.listen(app.get("port"), () => console.log(`Server on port ${app.get("port")}`))

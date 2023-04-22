import 'dotenv/config.js'
import express from 'express'
import connectionMongoose from './db/mongoose.js'
import sequelize from './db/sequelize.js'
import cookieParser from 'cookie-parser'
import routerToys from './routes/juguete.js'
import routerUsers from './routes/users.js'
import routerSession from './routes/session.js'
import passport from 'passport'
import initializePassport from './config/passport.js'
import cors from 'cors'


const whiteList = ['http://localhost:3000'] //Rutas validas a mi servidor

const corsOptions = { //Reviso si el cliente que intenta ingresar a mi servidor esta o no en esta lista
    origin: (origin, callback) => {
        if (whiteList.indexOf(origin) !== -1) {
            callback(null, true)
        } else {
            callback(new Error('Not allowed by Cors'))
        }
    }
}

const app = express()

app.use(express.json())
app.use(cors(corsOptions))

sequelize.sync().then(connect => console.log("Sequelize conectado"))
connectionMongoose().then(connect => console.log("Mongoose conectado"))

app.use(cookieParser(process.env.JWT_SECRET))
app.use(passport.initialize())
initializePassport(passport)
app.use('/users', routerUsers)
app.use('/toys', routerToys)
app.use('/auth', routerSession)


app.listen(4000, () => {
    console.log(`Server on port 4000`)
})


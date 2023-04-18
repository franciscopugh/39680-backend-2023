import 'dotenv/config.js'
import express from 'express'
import mongoose from 'mongoose'
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

const connectionMongoose = async () => {
    await mongoose.connect(process.env.MONGODBURL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
        .catch((err) => console.log(err));
}

connectionMongoose()

app.use(cookieParser(process.env.JWT_SECRET))
app.use(passport.initialize())
initializePassport(passport)
app.use('/users', routerUsers)
app.use('/toys', routerToys)
app.use('/auth', routerSession)


app.listen(4000, () => {
    console.log(`Server on port 4000`)
})


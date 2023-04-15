import 'dotenv/config.js'
import express from 'express'
import mongoose from 'mongoose'
import cookieParser from 'cookie-parser'
import routerToys from './routes/juguete.js'
import routerUsers from './routes/users.js'
import routerSession from './routes/session.js'
import passport from 'passport'
import initializePassport from './config/passport.js'
const app = express()

app.use(express.json())

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


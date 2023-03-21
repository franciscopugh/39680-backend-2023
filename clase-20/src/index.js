import 'dotenv/config'
import express from 'express'
import session from 'express-session'
import cookieParser from 'cookie-parser'
//import FileStore from 'session-file-store'
import MongoStore from 'connect-mongo'
import routerSession from './routes/session.js'

const app = express()

//const fileStorage = FileStore(session)

app.use(cookieParser(process.env.SIGNED_COOKIE)) // Puedo implementar cookies en mi app
app.use(express.json())
console.log(process.env.URL_MONGODB_ATLAS)
app.use(session({
    //Lugar guardado   Time to Live    Intentos de lectura
    //store: new fileStorage({ path: './sessions', ttl: 30000, retries: 1 }),
    store: MongoStore.create({
        mongoUrl: process.env.URL_MONGODB_ATLAS,
        mongoOptions: { useNewUrlParser: true, useUnifiedTopology: true },
        ttl: 30,
    }),
    secret: process.env.SESSION_SECRET,
    resave: true,
    saveUninitialized: true
}))

app.use('/api/session', routerSession)
app.listen(4000, () => console.log("Server on port 4000"))

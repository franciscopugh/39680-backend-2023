import 'dotenv/config.js'
import express from 'express'
import mongoose from 'mongoose'

import routerToys from './routes/juguete.js'
import routerUsers from './routes/users.js'

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

app.use('/users', routerUsers)
app.use('/toys', routerToys)

app.listen(4000, () => {
    console.log(`Server on port 4000`)
})


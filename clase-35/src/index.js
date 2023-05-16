import express from 'express'
import { addLogger } from './utils/logger.js'

const app = express()

app.use(addLogger)

app.get("/", (req, res) => {
    req.logger.warning("Alerta!")
    res.send("Hola")
})

app.get("/suma", (req, res) => {
    let suma = 0
    for (let i = 0; i < 10000; i++) {
        suma += i
    }
    res.send(suma)
})

app.get("/multiplicacion", (req, res) => {
    let multiplicacion = 1
    for (let i = 1; i < 400; i++) {
        multiplicacion *= i
    }
    res.send(multiplicacion)
})
app.listen(4000, () => console.log("DB is connected"))
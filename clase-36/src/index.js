import express from 'express'
import { addLogger } from './utils/logger.js'
import cluster from 'cluster'
import { cpus } from 'os'


const numHilos = cpus().length

if (cluster.isPrimary) {
    console.log("Hola, soy un cluster primario")
    for (let i = 0; i < numHilos; i++) {
        cluster.fork()
    }

} else {

    const app = express()
    app.get("/multiplicacion", (req, res) => {
        let suma = 0
        for (let i = 1; i < 1000; i++) {
            suma += i
        }
        console.log({ status: "success", message: `Hola, soy un fork con el id ${process.pid} con el resultado ${suma}` })
        res.send("Hola")
    })
    app.listen(4000, () => console.log("Server is connected"))

}


//app.use(addLogger)
/*
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
*/
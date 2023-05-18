import cluster from 'cluster'
import { cpus } from 'os'

const numHilos = cpus().length

if (cluster.isPrimary) {
    console.log("Hola, soy un cluster primario")
    for (let i = 0; i < numHilos; i++) {
        cluster.fork()
    }

} else {
    console.log(`Hola, soy un fork con el id ${process.pid}`)
}
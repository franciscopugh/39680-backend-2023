import express from 'express'
import { fork } from 'node:child_process'

const app = express()

app.get("/suma", (req, res) => {
    const child = fork('./calculoMatematico.js') //Genero los hilos de ejecucion en esta funcion
    child.send("Ejecutate") //Enviar mensaje para ejecutar
    child.on('message', resultado =>
        res.send(`${resultado}`)
    )
})

app.listen(4000, () => {
    console.log("Server on port 4000")
})
/*import { Command } from 'commander'

const program = new Command() //Generar un nuevo comando

program
    .option('-d', "Variable para el debug", false) //"x" significa flag, descripcion del comando, valor por defecto
    .option('-p <port>', "Puerto de mi aplicacion", 4000)
    .option('--mode <mode>', "Modo de trabajo", 'production')
    .requiredOption('-u <user>', "Usuario de mi aplicacion", "No se ingreso ningun usuario") //tercer argumento es para errores
    .option('-l', "Ingrese letras", " ")
program.parse() //Finalizar toda la configuracion

console.log(program.opts())
console.log(program.args)*/
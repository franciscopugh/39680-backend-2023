/*const fs  = require('fs')

const busqueda = async () => {
    if(fs.existsSync('./ejemplo.txt')) {
        let consulta = await fs.promises.readFile('./ejemplo.txt', 'utf-8')
        let aux = JSON.parse(consulta)
        
        if(aux.some(producto => producto.id === idParametro)) {
            //Operaciones aqui si existe
        } else {
            console.log("PRODUCTO NO ENCONTRADO")
        }
    } else {
        console.log("Archivo no encontrado")
    }
    
}
*/

const http = require('http')
//import * as http from 'http'
const PORT = 5000
const server = http.createServer((request, response) => {
    response.end("Hola, buenas dias!")
})

server.listen(PORT, () => {
    console.log(`Server on port ${PORT}`)
})


/*class Persona {
    constructor(nombre, apellido) {
        this.nombre = nombre
        this.apellido = apellido
        this.id = Persona.incrementarID()
    }

    static incrementarID() {
        if(this.idIncrement) { //Undefined lo creo, si es verdadera +1
            this.idIncrement++
        } else {
            this.idIncrement = 1
        }
        return this.idIncrement
    }
}

const persona1 = new Persona("Fran", "Pugh")
const persona2 = new Persona("Pedro", "Parker")
const persona3 = new Persona("Ana", "Alvarez")
const persona4 = new Persona("Luis", "Lagos")

console.log(persona1, persona2, persona3, persona4)*/
/*
//FS SINCRONICO
const fs = require('fs')
fs.writeFileSync('./ejemplo.txt', "Hola, buenas tardes") //Escribe si exista si no lo crea
fs.existsSync('./ejemplo.txt') //array.some() pero para textos
if(fs.existsSync('./ejemplo.txt')) {
    let contenido = fs.readFileSync('./ejemplo.txt', 'utf-8') //Lectura del fichero
    console.log(contenido)

    fs.appendFileSync('./ejemplo.txt', `
    \nSon las 20:40hs
    \nDe este hermoso 2023
    \nEscribiendo codigo desde Argentina
    `) //Agregar contenido al fichero
    contenido = fs.readFileSync('./ejemplo.txt', 'utf-8')
    console.log(contenido)

    fs.unlinkSync('./ejemplo.txt') //Eliminar fichero
}
*/

const fs = require('fs')

fs.writeFile('./ejemplo.txt', "Hola, buenas tardes",  (error) => {
   if(error) 
    return console.log("Error en escritura de archivo")
    fs.readFile('./ejemplo.txt', 'utf-8', (error, resultado) => {
        if(error) 
            return console.log("Error en lectura de archivo")
        console.log(resultado)
        fs.appendFile('./ejemplo.txt', '\nSon casi las 9pm', (error) => {
            if(error) 
                return console.log("Error en update de archivo")
            fs.readFile('./ejemplo.txt', 'utf-8', (error, resultado) => {
                if(error) 
                    return console.log("Error en segunda lectura")
                    console.log(resultado)
                fs.unlink('./ejemplo.txt', (error) => {
                    if(error) 
                        return console.log("Error en eliminar archivo")
                })
            })
            
        })
    })
})

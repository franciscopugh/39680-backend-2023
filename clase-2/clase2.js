import {Electrico, Fuego} from "./Pokemon.js"

//const pokemon1 = new Pokemon("Pika pika", 20, 5)

const pikachu1 = new Electrico("Pika pika", 20, 5, 10)
const charmander1 = new Fuego("Fueguito", 17, 4, 9)
console.log(pikachu1)
console.log(charmander1)

//pikachu1.saludar()
//pikachu1.impactrueno()

//pikachu1 = Object.freeze(pikachu1)
/*
pikachu1.nombre = "La ratita"
pikachu1.vidas = Object.freeze(pikachu1.vidas)
pikachu1.saludar = null
pikachu1.vidas = 50
//console.log(pikachu1)
console.log(pikachu1.saludar())

console.log(pikachu1)*/
/*var user = "Francisco"
var user = "Fran"

let user = "Francis"

const user1 = "Frank"
user1 = null
*/

const user = {
    nombre: "Francisco", 
    apellido: "Pugh",
    email: "f@f.com",
    password: "1234",
    pokemon: 
    [
        {nombre: "Pika pika", tipo: "Electrico", ataqueBase : 10},
        {nombre: "Fueguito", tipo: "Fuego", ataqueBase : 12}
    ]
}

//0x0800

const user1 = structuredClone(user)

user1.pokemon[0] = null

console.log(user1)
console.log(user)

let numero = 5
numero = "5"
numero = true

const empleado = {
    nombre: "Francisco", 
    apellido: "Pugh",
    email: "f@f.com",
    password: "1234",
    sueldo: undefined
}

console.log(4000 + undefined + 4000)

const empleados = [empleado, empleado]
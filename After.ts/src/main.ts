
let mensaje: String = "Hola"

console.log(mensaje)

function sumar(num1: number, num2: number): number {
    return num1 + num2
}

let resultado: number = sumar(5, 5)

console.log(resultado)

interface Animal {
    nombre: string
    respirar(): void
}


class Gato implements Animal {
    nombre: string

    constructor(nombre: string) {
        this.nombre = nombre
    }

    respirar(): void {
        console.log("Soy un gatito feliz respirando")
    }
}

class Perro implements Animal {
    nombre: string

    constructor(nombre: string) {
        this.nombre = nombre
    }

    respirar(): void {
        console.log("Soy un perrito feliz que dice guau guau")
    }
}

const gato1: Animal = new Gato("Pelusa")
gato1.respirar()

const perro1: Animal = new Perro("Sabueso")
perro1.respirar()

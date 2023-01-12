//ECMA 6
class Empleado {
    #sueldo
    constructor(nombre, apellido, edad, sueldo) {
        this.nombre = nombre
        this.apellido = apellido
        this.edad = edad
        this.#sueldo = sueldo
    }

    actualizarSueldo(porcentaje) {
        this.sueldo *= porcentaje
    }

    get obtenerSueldo() {
        return this.#sueldo
    }

    set modificarSueldo(nuevoSueldo) {
        this.sueldo = nuevoSueldo
    }

}

const empleado1 = new Empleado("Pedro", "Parker", 25, 12000)
//empleado1.sueldo = 18000
console.log(empleado1.sueldo)
console.log(empleado1.obtenerSueldo)
/*
//ECMA 7

console.log(Math.pow(5,3))
console.log(5**3)

//ECMA 8

const reciboSueldo = {
    id: 1,
    fecha: "01/08/2020",
    monto: 14000,
    idEmpleado: 4
}

const reciboSueldo2 = {...reciboSueldo}

const recibos = [reciboSueldo, reciboSueldo2]

console.log(Object.keys(reciboSueldo)) //Claves o nombres de atr
console.log(Object.values(reciboSueldo)) //Valores atr
console.log(Object.entries(reciboSueldo)) //Atr o clave/valor
console.log(Object.fromEntries(recibos)) //Clave/valor de obj en arrays


//ECMA 9

const reciboSueldo = {
    id: 1,
    fecha: "01/08/2020",
    monto: 14000,
    idEmpleado: 4
}

const reciboSueldo2 = {...reciboSueldo}

function crearReciboSueldo (id, fecha, monto, ...recibo) {
    console.log(recibo)
}

crearReciboSueldo(4, "11/01/2023",4000, 4, 5, "Francisco", "Pugh", reciboSueldo )

//ECMA 10

let nombre = "  Francisco "
console.log(nombre)
console.log(nombre.trim())

const reciboSueldo = {
    id: 1,
    fecha: "01/08/2020",
    monto: 14000,
    idEmpleado: 4,
    familia: [5, 6, , [5,4]]
    
}

const reciboSueldo2 = {...reciboSueldo}
const reciboSueldo3 = {...reciboSueldo}

const recibos = [reciboSueldo, [5, 6, , [5,4], ], reciboSueldo3]

console.log(recibos.flat())

//import '' from ''

let booleano = true
if(booleano) {
    import('./mensaje.js').then((modulo) =>{ 
        console.log(modulo)
        modulo.mostrarMensaje
    })
} else {
    console.log("No es valido")
}

const sueldos = [
    {sueldo: 1000},
    {sueldo: 2000},
    {sueldo: 3000},
    {sueldo: 4000},
    {sueldo: undefined},
]
let acum = 0
let cantUnd = 0
sueldos.forEach(empl => {
    acum += empl.sueldo ?? 0
    if(empl.sueldo == undefined) {
        cantUnd++
    }
})

let carrito = localStorage.getItem("carrito") ?? []
                //Si no existe devuelve null
console.log(acum)*/
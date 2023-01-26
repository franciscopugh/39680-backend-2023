/*
    Proceso de encriptacion

    Algoritmo: forma de encriptacion
    Key: valor unico
    IV: Vector complejidad codigo encriptado

*/

const crypto = require('crypto')

console.log(crypto.getCiphers().length)

const algoritmo = 'aes-256-cbc'
const key=  crypto.randomBytes(32)
const iv = crypto.randomBytes(16)

const encriptar = (password) => {
    const cipher = crypto.createCipheriv(algoritmo, Buffer.from(key),iv ) //Creacion de objeto Cipher utilizado para el cifrado de datos
    let encriptacion = cipher.update(password) //Metodo que actualiza el cifrado con el valor del parametro
    encriptacion = Buffer.concat([encriptacion, cipher.final()]) //Concatena el valor ingresado con el valor del objeto cifrado 
    return {
        iv: iv.toString('hex'), passwordEncriptado: encriptacion.toString('hex')
    }

}

const hackerman = (password) => {
    let iv = Buffer.from(password.iv, 'hex')
    let valor = Buffer.from(password.passwordEncriptado, 'hex')

    let decipher = crypto.createDecipheriv(algoritmo, Buffer.from(key), iv)

    let desencriptar = decipher.update(valor)
    desencriptar =  decipher.final()

    return desencriptar.toString()
}

const password = "Francisco!"
const passwordEncriptado = encriptar(password)

console.log(hackerman(passwordEncriptado))

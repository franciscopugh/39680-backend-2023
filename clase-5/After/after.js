import {promises as fs} from 'fs'

const persona1 = {
    nombre: "Fran",
    apellido: "Pugh"
}
const productos = [{id: 1, nombre: "Arroz", marca:"Arrocin"}, {id:2, nombre: "Lenteja", marca:"Lentejin"}]

const consultasTXT = async () => {
    await fs.writeFile('./ejemplo.txt', "")
    let resultado = await fs.readFile('./ejemplo.txt', 'utf-8')
    console.log(resultado)
    await fs.appendFile('./ejemplo.txt', JSON.stringify(productos))
    resultado = await fs.readFile('./ejemplo.txt', 'utf-8')
    let product = JSON.parse(resultado)
    if(product.some(producto => producto.id === 1)) {
        product = product.filter(producto => producto.id !== 1)
        console.log(product)
    } else {
        console.log("No existe el producto")
    }
    product.push({id: 3, nombre: "Arroz", marca:"Arrocin"})
    await fs.writeFile('./ejemplo.txt', JSON.stringify(product))
    //await fs.unlink('./ejemplo.txt')
}

consultasTXT()




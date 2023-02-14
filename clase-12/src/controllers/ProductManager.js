import {promises as fs} from 'fs'

export class ProductManager {
    constructor(path) {
        this.path = path
    }

    static incrementarID() {
        if(this.idIncrement) {
            this.idIncrement++
        } else {
            this.idIncrement = 1
        }
        return this.idIncrement
    }

    async addProduct(producto) {
        const prods = JSON.parse(await fs.readFile(this.path, 'utf-8'))
        producto.id = ProductManager.incrementarID()
        prods.push(producto)
        await fs.writeFile(this.path, JSON.stringify(prods))
        return "Producto creado"
    }

    async getProducts() {
        try {
            const prods = JSON.parse(await fs.readFile(this.path, 'utf-8'))
            return prods
        } catch(error) {
            return error
        }
        
    }

    async getProductById(id) {
        const prods = JSON.parse(await fs.readFile(this.path, 'utf-8'))
        if(prods.some(prod => prod.id === parseInt(id))) {
            return prods.find(prod => prod.id === parseInt(id))
        } else {
            return "Producto no encontrado"
        }
    }

    async updateProduct(id, {title, description, price, thumbnail, code, stock}) {
        const prods = JSON.parse(await fs.readFile(this.path, 'utf-8'))
        if(prods.some(prod => prod.id === parseInt(id))) {
            let index= prods.findIndex(prod => prod.id === parseInt(id))
            prods[index].title = title
            prods[index].description = description
            prods[index].price = price
            prods[index].thumbnail = thumbnail
            prods[index].code = code
            prods[index].stock = stock
            await fs.writeFile(this.path, JSON.stringify(prods))
            return "Producto actualizado"
        } else {
            return "Producto no encontrado"
        }
    }

    async deleteProduct(id) {
        const prods = JSON.parse(await fs.readFile(this.path, 'utf-8'))
        if(prods.some(prod => prod.id === parseInt(id))) {
           const prodsFiltrados = prods.filter(prod => prod.id !== parseInt(id))
           await fs.writeFile(this.path, JSON.stringify(prodsFiltrados))
           return "Producto eliminado"
        } else {
            return "Producto no encontrado"
        }
    }

}
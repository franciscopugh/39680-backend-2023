import mongoose from "mongoose";

export class GestorMongoDB {
    constructor(url, coleccion, esquema) {
        this.url = url //Esta propiedad deberia ser privada
        this.coleccion = coleccion
        this.esquema = new mongoose.Schema(esquema)
        this.modelo = mongoose.model(this.coleccion, this.esquema)
    }

    async setConexion() {
        try {
            await mongoose.connect(this.url)
            console.log("MongoDB esta conectado")
        } catch (error) {
            console.log('Error en conexion MongoDB', error)
        }
    }

    async getElements() {
        try {
            const elementos = await this.modelo.find()
            return elementos
        } catch (error) {
            console.log('Error en consulta de todos los elementos en MongoDB', error)
        }
    }

    async getElementById(id) {
        try {
            const elemento = await this.modelo.findById(id)
            return elemento
        } catch (error) {
            console.log('Error en consulta de elemento en MongoDB', error)
        }

    }

    async addElements(elementos) { //Agrega uno o varios elementos
        try {
            const mensaje = await this.modelo.insertMany(elementos)
            return mensaje
        } catch (error) {
            console.log('Error en insertar de elemento en MongoDB', error)
        }

    }

    async updateElement(id, info) {
        try {
            const mensaje = await this.modelo.findByIdAndUpdate(id, info)
            return mensaje
        } catch (error) {
            console.log('Error en update de elemento en MongoDB', error)
        }

    }

    async deleteElement(id) {
        try {
            const respuesta = await this.modelo.findByIdAndRemove(id)
            return respuesta
        } catch (error) {
            console.log('Error en eliminacion de elemento en MongoDB', error)
        }

    }


}
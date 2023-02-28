import { Schema, model } from "mongoose";

const userCollection = "users" //Nombre de mi coleccion

const userSchema = new Schema({    //Esquema de usuario 
    nombre: String,
    apellido: String,
    email: {
        type: String,
        unique: true
    },
    edad: Number
})

export const userModel = model(userCollection, userSchema)
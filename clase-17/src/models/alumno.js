import { Schema, model } from "mongoose";

const studentCollection = "students"

const studentSchema = Schema({
    nombre: String,
    apellido: {
        type: String,
        index: true
    },
    email: {
        type: String,
        unique: true,
    },
    password: String,
    cursos: []
})

const studentModel = model(studentCollection, studentSchema)

export default studentModel
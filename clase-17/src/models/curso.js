import { Schema, model } from "mongoose";

const courseCollection = "courses"

const courseSchema = Schema({
    dias: [],
    nombre: {
        type: String,
        index: true
    },
    horario: String,
    numeroComision: String
})

const courseModel = model(courseCollection, courseSchema)

export default courseModel 
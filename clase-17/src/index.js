//import userModel from "./models/user.js";
import studentModel from "./models/alumno.js";
import courseModel from "./models/curso.js";
import mongoose from "mongoose";


const start = async () => {
    await mongoose.connect("mongodb+srv://franciscopugh01:coderhouse@cluster0.xfhtyhn.mongodb.net/?retryWrites=true&w=majority")
    /*await courseModel.create([
        { numeroComision: "PB123", nombre: "Programacion Backend", dias: ["Lunes", "Miercoles"], horarios: "20:00 a 22:00hs" },
        { numeroComision: "JS123", nombre: "JavaScript", dias: ["Lunes", "Miercoles"], horarios: "10:00 a 12:00hs" },
        { numeroComision: "PY123", nombre: "Python", dias: ["Martes", "Jueves"], horarios: "19:00 a 21:00hs" }
    ])
    await studentModel.create([
        { nombre: "Pepe", apellido: "Perez", email: "p@p.com", password: "123", cursos: [] },
        { nombre: "Pepa", apellido: "Perez", email: "pe@pe.com", password: "123", cursos: [] },
    ])

    const cursoBack = await courseModel.findById("64092b86e1ef68b4466df340")
    const student1 = await studentModel.findById("64092cfc097d40a623c18b6f")

    console.log(cursoBack)
    console.log(student1)

    student1.cursos.push(cursoBack)
    await studentModel.findByIdAndUpdate("64092cfc097d40a623c18b6f", student1)*/
    const student1 = await studentModel.findById("64092cfc097d40a623c18b6f").populate("cursos.course")

    console.log(JSON.stringify(student1))


}

start()
/*
const main = async () => {
    await mongoose.connect("mongodb+srv://franciscopugh01:coderhouse@cluster0.xfhtyhn.mongodb.net/?retryWrites=true&w=majority")
    userModel.create([
        { nombre: 'Jean-Luc Picard', apellido: "Rosales", email: 'Captain@Captain.com', password: "1234" },
        { nombre: 'William Riker', apellido: "Benitez", email: 'Commander@Commander.com', password: "1234" },
        { nombre: 'Deanna Troi', apellido: "Smith", email: 'Lieutenant@Lieutenant.com', password: "1234" },
        { nombre: 'Geordi La Forge', apellido: "Pascal", email: 'Lieutenant@Lieute.com', password: "1234" },
        { nombre: 'Worf', apellido: "Wolf", email: 'Worf@worf.com', password: "1234" }
    ])
    const respuesta = await userModel.find({ nombre: "Francisco" }).explain('executionStats')
    console.log(respuesta)
}

main()
*/

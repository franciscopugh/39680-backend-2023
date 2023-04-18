import jugueteModel from "../models/JugueteModel.js"

export const findToys = async () => {
    try {
        const toys = await jugueteModel.find()
        return toys
    } catch (error) {
        return error
    }

}

export const createToy = async (toy) => {
    try {
        const newToy = new jugueteModel(toy)
        await newToy.save()
        return newToy
    } catch (error) {
        return error
    }

}
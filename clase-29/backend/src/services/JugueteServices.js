
let jugueteModel
const BDD = 1
console.log(BDD)
if (BDD == 2) {
    await import("../models/MongoDB/JugueteModel.js").then(modulo => {
        jugueteModel = modulo.default
    }
    )
} else {
    await import("../models/Postgresql/JugueteModel.js").then(modulo => {
        jugueteModel = modulo.default
    })
}

console.log(jugueteModel)

export const findToys = async () => {
    try {
        let toys
        if (BDD == 1) {
            toys = await jugueteModel.find()
        } else {
            toys = await jugueteModel.findAll()
        }
        console.log(toys)
        return toys
    } catch (error) {
        return error
    }

}

export const createToy = async (toy) => {

    try {
        let newToy
        if (BDD == 1) {
            newToy = new jugueteModel(toy)
            newToy.save()
        } else {
            newToy = jugueteModel.build(toy)
            newToy.save()
        }

        return newToy
    } catch (error) {
        return error
    }

}
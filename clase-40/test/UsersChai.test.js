import chai from "chai";
import mongoose from "mongoose";
import Users from "../src/dao/Users.dao.js";

await mongoose.connect(`mongodb+srv://franciscopugh01:coderhouse@cluster0.xfhtyhn.mongodb.net/?retryWrites=true&w=majority`)
    .then(() => console.log("DB is connected"))

const expect = chai.expect

describe("Test con chai para users", () => {
    before(function () {
        this.usersDao = new Users()
    })
    beforeEach(function () {
        mongoose.connection.collections.users.drop() //Elimino de la BDD
        this.timeout(6000)
    })

    it('Consultar todos los usuarios de mi BDD con Chai', async function () { //Descripcion de la operacion
        const resultado = await this.usersDao.get()
        //expect(resultado).deep.equal([])
        expect(Array.isArray(resultado)).to.be.ok //ok revisa si en expect es V o F
        //expect(resultado).to.be.deep.equal([])

    })
})
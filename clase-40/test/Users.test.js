import mongoose from "mongoose";
import Users from "../src/dao/Users.dao.js";
import Assert from 'assert'

await mongoose.connect(`mongodb+srv://franciscopugh01:coderhouse@cluster0.xfhtyhn.mongodb.net/?retryWrites=true&w=majority`)
    .then(() => console.log("DB is connected"))

const assert = Assert.strict

describe('Testing Users', () => { //Descripcion de mi test
    before(function () {
        this.usersDao = new Users()
    })
    beforeEach(function () {
        this.timeout(6000)
    })

    it('Consultar todos los usuarios de mi BDD', async function () { //Descripcion de la operacion
        const resultado = await this.usersDao.get()
        assert.strictEqual(Array.isArray(resultado), true)
        //Ambito de ejecucion propio
    })

    it("Crear un nuevo usuario", async function () {
        const newUser = {
            first_name: "Pepe",
            last_name: "Perez",
            email: "pe@pe.com",
            password: "1234",
        }
        const resultado = await this.usersDao.save(newUser)
        assert.ok(resultado._id) //Reviso si se guardo correctamente el usuario
    })

    it("Consultar a un usuario dado su email", async function () {
        const email = "pepe@pepe.com"

        const user = await this.usersDao.getBy({ email: email })
        assert.strictEqual(typeof user, 'object')
    })
}) 
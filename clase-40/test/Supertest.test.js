import chai from "chai";
import supertest from "supertest";
import mongoose from "mongoose";

const expect = chai.expect
const requester = supertest('http://localhost:8080') //Apuntar a la ruta del servidor

await mongoose.connect(`mongodb+srv://franciscopugh01:coderhouse@cluster0.xfhtyhn.mongodb.net/?retryWrites=true&w=majority`)
    .then(() => console.log("DB is connected"))
    /
    describe("Testing Aplicacion de Adoptame", () => {
        /*describe('Test de mascotas', () => {
            it('Pruebo el endpoint /api/pets, que debe generarme una mascota', async function () {
                // _body, StatusCode, Ok
                const newPet = {
                    name: "Gruñon",
                    specie: "Dog",
                    birthDate: true
                }
                const { statusCode, ok, _body } = await requester.post('/api/pets').send(newPet) //requester.metodo()
                console.log(statusCode)
                console.log(ok)
                console.log(_body)
            })
    
            it('Pruebo el endpoint /api/pets, que debe actualizarme una mascota', async function () {
                // _body, StatusCode, Ok
                const id = "6487ac8d1a5381d95caddb5b"
                const updatePet = {
                    name: "Pancito",
                    specie: "Cat",
                    birthDate: "01/01/2019"
                }
                const { statusCode, ok, _body } = await requester.put(`/api/pets/${id}`).send(updatePet) //requester.metodo()
                console.log(statusCode)
                console.log(ok)
                console.log(_body)
            })
    
            it('Pruebo el endpoint /api/pets, que debe consultar mascotas', async function () {
    
                const { statusCode, ok, _body } = await requester.get('/api/pets/')
                console.log(statusCode)
                console.log(ok)
                console.log(_body)
            })
    
            it('Pruebo el endpoint /api/pets, que debe eliminar una mascota', async function () {
                // _body, StatusCode, Ok
                const id = "6487ac8d1a5381d95caddb5b"
    
                const { statusCode, ok, _body } = await requester.delete(`/api/pets/${id}`)
                console.log(statusCode)
                console.log(ok)
                console.log(_body)
            })
    
        }) 
        describe('Test de Sessions', () => {
            let cookie = ""
            /*it('Pruebo el endpoint /api/session/register, que debe generarme un usuario', async function () {
                // _body, StatusCode, Ok
                const newUser = {
                    first_name: "Maria",
                    last_name: "Martinez",
                    email: "ma@ma.com",
                    password: "1@1@rtqewq1@"
                }
                const { _body } = await requester.post('/api/sessions/register').send(newUser) //requester.metodo()
                console.log(_body)
                expect(_body.payload).to.be.ok
            })
            it('Pruebo el endpoint /api/session/login, que debe generarme una cookie', async function () {
                // _body, StatusCode, Ok
                const user = {
                    email: "ma@ma.com",
                    password: "1@1@rtqewq1@"
                }
                //const { _body } = await requester.post('/api/sessions/login').send(user) ME DEVUELVE EL MENSAJE PERO NECESITO LA COOKIE
                const result = await requester.post('/api/sessions/login').send(user)
                const cookieResult = result.headers['set-cookie'][0]
                expect(cookieResult).to.be.ok

                cookie = { //Elimino el = de mi cookie
                    name: cookieResult.split("=")[0],
                    value: cookieResult.split("=")[1]
                }

                expect(cookie.name).to.be.ok.and.equal('coderCookie') //Verifico si es valida y es igual a la esperada
                expect(cookie.value).to.be.ok
                //expect(_body.payload).to.be.ok
            })

            it('Pruebo el endpoint /api/session/current, que debe verificar que la cookie sea valida', async function () {
                //.set() para get para setear valores, .send() para post
                const { _body } = await requester.get('/api/sessions/current').set('Cookie', [`${cookie.name}=${cookie.value}`])
                console.log(_body)
                expect(_body.payload.email).to.be.equal("ma@ma.com")
            })
        })*/
        describe('Test de mascotas', () => {
            it('Pruebo el endpoint /api/pets/withimage, que debe generarme una mascota con imagen', async function () {
                // _body, StatusCode, Ok
                const newPet = {
                    name: "Orion",
                    specie: "Dog",
                    birthDate: "12/12/2020"
                }
                const result = await requester.post('/api/pets/withimage')
                    .field('name', newPet.name)
                    .field('specie', newPet.specie)
                    .field('birthDate', newPet.birthDate)
                    .attach('image', './test/perro.jpg')

                expect(result.status).to.be.ok
                expect(result._body.payload.image).to.be.ok
                expect(result._body.payload).to.have.property('_id')

            })
        })

    })



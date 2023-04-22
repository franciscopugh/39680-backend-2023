import { useRef } from "react"
export const Login = () => {

    const datForm = useRef() //Crear una referencia para consultar los valoresa actuales del form
    /* const pedirToken = () => {
         setInterval(() => {
             fetch('http://localhost:4000/auth/login', {
                 method: "POST",
                 headers: {
                     "Content-Type": "application/json"
                 },
                 body: JSON.stringify({ age: 22, email: "cris@cris.com", first_name: "Cristian", last_name: "U", password: "1234" })
             })
                 .then(response => response.json())
                 .then(data => {
                     document.cookie = `token=${data.token};expires=${new Date(Date.now() + 1 * 24 * 60 * 60 * 1000).toUTCString()};path=/`
                     console.log(data.token)
                 })
                 .catch(error => console.error(error))
         }, 10000)
     }
 
     pedirToken()*/

    const consultarForm = (e) => {
        //Consultar los datos del formulario
        e.preventDefault()
        const datosFormulario = new FormData(datForm.current) //Pasar de HTML a Objeto Iterable
        const cliente = Object.fromEntries(datosFormulario) //Pasar de objeto iterable a objeto simple

        fetch('http://localhost:4000/auth/login', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(cliente)
        })
            .then(response => response.json())
            .then(data => {
                document.cookie = `token=${data.token};expires=${new Date(Date.now() + 1 * 24 * 60 * 60 * 1000).toUTCString()};path=/`
                console.log(data.token)
            })
            .catch(error => console.error(error))

        e.target.reset() //Reset form
    }
    return (
        <div className="container divForm" >
            <h3>Formulario de Inicio de Sesion</h3>
            <form onSubmit={consultarForm} ref={datForm}>

                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="email" className="form-control" name="email" />
                </div>

                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Contraseña</label>
                    <input type="password" className="form-control" name="password" />
                </div>

                <button type="submit" className="btn btn-primary">Iniciar Sesion</button>
            </form>
        </div>
    )
}
const socket = io()

socket.emit('mensaje', "Hola, me estoy conectando")

socket.on('evento-admin', datos => {
    console.log(datos)
})

socket.on('evento-general', datos => {
    console.log(datos)
})
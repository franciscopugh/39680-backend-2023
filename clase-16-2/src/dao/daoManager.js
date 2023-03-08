const eleccionBDD = 1

export const getManagerMensajes = async () => {
    const modeloMensaje = eleccionBDD === 1 ? await import('./MongoDB/models/Message.js') :
        await import('./Postgresql/models/Message.js')
    return modeloMensaje
}

export const getManagerProductos = async () => {
    const modeloProducto = eleccionBDD === 1 ? await import('./MongoDB/models/Product.js') :
        await import('./Postgresql/models/Product.js')
    return modeloProducto
}
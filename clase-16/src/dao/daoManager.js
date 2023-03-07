
const eleccionBDD = 1

//1 si es MongoDB, si no es Postgresql
export const getManagerProductos = async () => {
    const modeloProducto = eleccionBDD === 1 ? await import('./MongoDB/models/Product') : await import('./Postgresql/models/Product')
    return modeloProducto
}

export const getManagerMensajes = async () => {
    const modeloMensaje = eleccionBDD === 1 ? await import('./MongoDB/models/Message') : await import('./Postgresql/models/Message')
    return modeloMensaje
}
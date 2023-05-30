export const generateResetToken = (email) => {
    const timestamp = Date.now()
    const token = Math.random().toString(36) + timestamp
    return token
}

export const isTokenExpired = (email) => {
    const elapsedTime = Date.now() - passwordData.timestamp //Hora actual - hora de generacion del token
    const expirationTime = 60 * 60 * 1000
    return elapsedTime > expirationTime
}
import Sequelize from 'sequelize'

const db = new Sequelize(
    "postgres",
    "postgres",
    "password",
    {
        host: "localhost",
        dialect: "postgres"
    }

)

export default db
import { Sequelize } from "sequelize";

const sequelize = new Sequelize(process.env.BDD_NAME, process.env.BDD_USER, process.env.BDD_PASSWORD, {
    host: 'localhost',
    dialect: 'postgres'
})

export default sequelize
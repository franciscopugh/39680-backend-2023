import { Sequelize, DataTypes } from 'sequelize'
const sequelize = new Sequelize(process.env.BDD_NAME)

const JugueteModel = sequelize.define('Juguete', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    descripcion: {
        type: DataTypes.STRING,
        allowNull: false
    },
    precio: {
        type: DataTypes.DOUBLE,
        allowNull: false
    }
})

export default JugueteModel


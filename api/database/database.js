import Sequelize from "sequelize";

const database = new Sequelize('pruebab', 'postgres', 'admin1', {
  host: 'localhost',
  dialect: 'postgres'
})

export default database;
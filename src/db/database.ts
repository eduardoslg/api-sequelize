import { Sequelize } from 'sequelize'

const DATABASE_URL =
  'mariadb://sequelizeuser:sequelize@localhost:3306/sequelizedb'

export const sequelize = new Sequelize(DATABASE_URL)

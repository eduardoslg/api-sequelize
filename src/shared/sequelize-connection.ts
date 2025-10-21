import { sequelize } from 'src/db/database'

export async function sequelizeConnect() {
  try {
    await sequelize.authenticate()

    console.log('Conexão com o banco de dados estabelecida com sucesso.')
  } catch (err) {
    console.error(err)
  }
}

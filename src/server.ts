import { app } from './shared/app'
import { sequelizeConnect } from './shared/sequelize-connection'

const PORT = 3000

app.listen(PORT, async () => {
  console.log(`Aplicação rodando na porta: ${PORT}`)

  await sequelizeConnect()
})

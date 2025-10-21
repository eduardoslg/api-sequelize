import { User } from 'src/db/models/user'
import { AppError } from 'src/shared/errors/app-error'

type createData = {
  name: string
  email: string
}

export const UsersServices = {
  async create({ name, email }: createData) {
    if (!name) throw new AppError('É necessário informar o nome.')
    if (!email) throw new AppError('É necessário informar o email.')

    const user = await User.create({
      name,
      email,
    })

    return user
  },
}

import { Request, Response } from 'express'

import { UsersServices } from '../services/users-services'

export const UsersController = {
  async create(req: Request, res: Response) {
    const { name, email } = req.body

    const output = await UsersServices.create({ name, email })

    res.status(200).send(output)
  },
}

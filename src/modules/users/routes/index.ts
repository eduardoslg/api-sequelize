import { Router } from 'express'
import { authenticated } from 'src/middlewares/authenticated'

import { UsersController } from '../controllers/users-controller'

export const usersRoutes = Router()

usersRoutes.use(authenticated)

usersRoutes.post('/', authenticated, UsersController.create)

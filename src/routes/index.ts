import { Router } from 'express'
import { usersRoutes } from 'src/modules/users/routes'

export const routes = Router()

routes.use('/users', usersRoutes)

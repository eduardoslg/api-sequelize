import express from 'express'
import { routes } from 'src/routes'

import { errorHandler } from './errors/error-handler'

export const app = express()

app.use(express.json())
app.use(routes)
app.use(errorHandler)
